const fs = require('fs');
const path = require('path');

function walkHtml(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkHtml(p, acc);
    else if (e.name.endsWith('.html') && !e.name.endsWith('.sample.html')) acc.push(p);
  }
  return acc;
}

function kebab(s) {
  return s
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function pascal(s) {
  return kebab(s)
    .split('-')
    .filter(Boolean)
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join('');
}

function stripCommonIndent(text) {
  const lines = text.replace(/^\n/, '').replace(/\n\s*$/, '').split('\n');
  const indents = lines
    .filter((l) => l.trim())
    .map((l) => l.match(/^\s*/)[0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min)).join('\n').trim() + '\n';
}

function extractSnippets(ts) {
  const map = {};
  const re = /(\w+)\s*=\s*`([\s\S]*?)`;/g;
  let m;
  while ((m = re.exec(ts))) {
    map[m[1]] = m[2];
  }
  return map;
}

function extractState(ts) {
  const cls = ts.match(/export class \w+[^{]*\{([\s\S]*)\}\s*$/);
  if (!cls) return '';
  let body = cls[1];
  body = body.replace(/(\w+)\s*=\s*`[\s\S]*?`;\s*/g, '');
  body = body.replace(/constructor\s*\([^)]*\)\s*\{[\s\S]*?\n  \}\s*/g, '');
  return body.trim();
}

function extractBalanced(html, startTagRe) {
  const start = html.search(startTagRe);
  if (start < 0) return null;
  const openEnd = html.indexOf('>', start);
  if (openEnd < 0) return null;
  const tagMatch = html.slice(start, openEnd + 1).match(/^<([a-zA-Z0-9:-]+)/);
  const tag = tagMatch[1];
  let i = openEnd + 1;
  let depth = 1;
  while (i < html.length && depth > 0) {
    const nextOpen = html.slice(i).search(new RegExp(`<${tag}\\b`));
    const nextClose = html.slice(i).search(new RegExp(`</${tag}>`));
    if (nextClose < 0) return null;
    if (nextOpen >= 0 && nextOpen < nextClose) {
      depth++;
      i += nextOpen + tag.length + 1;
    } else {
      depth--;
      if (depth === 0) {
        return {
          start,
          end: i + nextClose + tag.length + 3,
          attrs: html.slice(start + tag.length + 1, openEnd),
          inner: html.slice(openEnd + 1, i + nextClose),
        };
      }
      i += nextClose + tag.length + 3;
    }
  }
  return null;
}

function processPage(htmlPath) {
  if (htmlPath.includes(`${path.sep}flag${path.sep}`) || htmlPath.includes(`${path.sep}checkbox${path.sep}`)) {
    return null;
  }
  const dir = path.dirname(htmlPath);
  if (fs.existsSync(path.join(dir, `${path.basename(dir)}-examples.component.ts`))) {
    return null;
  }
  let html = fs.readFileSync(htmlPath, 'utf8');
  if (!html.includes('doc-code-sample') || !html.includes('docDemo')) return null;
  const tsPath = fs.existsSync(htmlPath.replace(/\.html$/, '.ts'))
    ? htmlPath.replace(/\.html$/, '.ts')
    : fs.readdirSync(dir).map((f) => path.join(dir, f)).find((f) => f.endsWith('.ts') && !f.includes('example') && !f.includes('.sample.'));
  if (!tsPath || !fs.existsSync(tsPath)) {
    console.warn('no ts for', htmlPath);
    return null;
  }

  const folder = path.basename(dir);
  const prefix = kebab(folder);
  const classPrefix = pascal(folder);
  const snippetsDir = path.join(dir, 'snippets');
  fs.mkdirSync(snippetsDir, { recursive: true });

  let ts = fs.readFileSync(tsPath, 'utf8');
  const snippetValues = extractSnippets(ts);
  const stateBody = extractState(ts);

  const samples = [];
  let rebuilt = '';
  let cursor = 0;
  while (true) {
    const rel = html.slice(cursor).search(/<doc-code-sample\b/);
    if (rel < 0) {
      rebuilt += html.slice(cursor);
      break;
    }
    rebuilt += html.slice(cursor, cursor + rel);
    const sample = extractBalanced(html.slice(cursor + rel), /^<doc-code-sample\b/);
    if (!sample) {
      rebuilt += html.slice(cursor + rel);
      break;
    }
    const demo = extractBalanced(sample.inner, /<ng-template[^>]*\bdocDemo\b/);
    if (!demo) {
      rebuilt += html.slice(cursor + rel, cursor + rel + sample.end);
      cursor = cursor + rel + sample.end;
      continue;
    }
    const attrs = sample.attrs;
    const before = sample.inner.slice(0, demo.start);
    const tplAttrs = demo.attrs;
    const inner = demo.inner;
    const refMatch = tplAttrs.match(/#(\w+)/);
    const codeMatch = attrs.match(/\[templateCode\]="(\w+)"/);
    const tsMatch = attrs.match(/\[componentCode\]="(\w+)"/);
    const name = kebab(refMatch ? refMatch[1] : (codeMatch ? codeMatch[1].replace(/^snippet/, '') : `sample${samples.length + 1}`));
    const selector = `doc-${prefix}-${name}-example`;
    const className = `${classPrefix}${pascal(name)}ExampleComponent`;
    const htmlFile = `${name}.sample.html`;
    fs.writeFileSync(path.join(snippetsDir, htmlFile), stripCommonIndent(inner));
    let txtFile;
    if (tsMatch && snippetValues[tsMatch[1]] != null) {
      txtFile = `${name}.sample.txt`;
      fs.writeFileSync(path.join(snippetsDir, txtFile), stripCommonIndent(snippetValues[tsMatch[1]]));
    }
    const varHtml = codeMatch ? codeMatch[1] : `snippet${pascal(name)}`;
    const varTs = tsMatch ? tsMatch[1] : null;
    samples.push({ name, selector, className, htmlFile, txtFile, varHtml, varTs });
    const newTplAttrs = tplAttrs.replace(/\s*#\w+/, '');
    rebuilt += `<doc-code-sample${attrs}>${before}<ng-template${newTplAttrs}>\n        <${selector}></${selector}>\n      </ng-template>${sample.inner.slice(demo.end)}</doc-code-sample>`;
    cursor = cursor + rel + sample.end;
  }
  html = rebuilt;

  if (!samples.length) return null;

  fs.writeFileSync(htmlPath, html);

  const importLines = [];
  const assignments = [];
  const seen = new Set();
  for (const s of samples) {
    if (!seen.has(s.varHtml)) {
      importLines.push(`import ${s.varHtml}Src from './snippets/${s.htmlFile}' with { loader: 'text' };`);
      assignments.push(`  ${s.varHtml} = ${s.varHtml}Src;`);
      seen.add(s.varHtml);
    }
    if (s.txtFile && s.varTs && !seen.has(s.varTs)) {
      importLines.push(`import ${s.varTs}Src from './snippets/${s.txtFile}' with { loader: 'text' };`);
      assignments.push(`  ${s.varTs} = ${s.varTs}Src;`);
      seen.add(s.varTs);
    }
  }
  ts = ts.replace(/\r\n/g, '\n');
  const classMatch = ts.match(/(@Component\([\s\S]*?\)\s*export class \w+[^{]*\{)/);
  if (!classMatch) {
    console.warn('could not parse class', tsPath);
    return null;
  }
  const keepImports = ts
    .slice(0, ts.indexOf(classMatch[1]))
    .split('\n')
    .filter((l) => !l.includes("with { loader: 'text' }"))
    .join('\n')
    .replace(/\n+$/, '\n');
  let body = ts.slice(ts.indexOf(classMatch[1]) + classMatch[1].length);
  body = body.replace(/\n  \w+\s*=\s*`[\s\S]*?`;/g, '');
  body = body.replace(/\n  snippet\w+\s*=\s*snippet\w+Src;/g, '');
  ts = `${keepImports}${importLines.join('\n')}\n\n${classMatch[1]}\n${assignments.join('\n')}\n${body}`;
  fs.writeFileSync(tsPath, ts);

  const stateClass = stateBody
    ? `export class ${classPrefix}SampleState {\n  ${stateBody}\n}\n\n`
    : '';
  const extendsClause = stateBody ? ` extends ${classPrefix}SampleState` : '';

  const exampleSrc = `import { Component } from '@angular/core';\n\n${stateClass}${samples
    .map(
      (s) => `@Component({
  selector: '${s.selector}',
  templateUrl: './snippets/${s.htmlFile}',
  standalone: false
})
export class ${s.className}${extendsClause} {
}
`
    )
    .join('\n')}export const ${classPrefix.toUpperCase()}_EXAMPLES = [
${samples.map((s) => `  ${s.className},`).join('\n')}
];
`;
  fs.writeFileSync(path.join(dir, `${folder}-examples.component.ts`), exampleSrc);

  return { folder, classPrefix, dir, htmlPath };
}

function patchModule(modPath, results) {
  let src = fs.readFileSync(modPath, 'utf8');
  for (const r of results) {
    const rel = path.relative(path.dirname(modPath), path.join(r.dir, `${r.folder}-examples.component.ts`)).replace(/\\/g, '/');
    const importName = `${r.classPrefix.toUpperCase()}_EXAMPLES`;
    const imp = `import { ${importName} } from './${rel.replace(/\.ts$/, '')}';\n`;
    if (!src.includes(importName)) {
      src = src.replace(/(@NgModule\(\{)/, `${imp}\n$1`);
      src = src.replace(/declarations:\s*\[/, (m) => `${m}\n    ...${importName},`);
    }
  }
  fs.writeFileSync(modPath, src);
}

const roots = process.argv.slice(2);
if (!roots.length) {
  console.error('usage: node scripts/migrate-page-samples.js <dir>...');
  process.exit(1);
}

const byModule = new Map();
for (const root of roots) {
  const files = walkHtml(root);
  for (const f of files) {
    const res = processPage(f);
    if (!res) continue;
    console.log('migrated', f);
    let mod;
    if (f.includes(`${path.sep}elements${path.sep}`)) mod = 'src/app/pages/elements/elements.module.ts';
    else if (f.includes(`${path.sep}modules${path.sep}`)) mod = 'src/app/pages/modules/modules.module.ts';
    else if (f.includes(`${path.sep}collections${path.sep}`)) mod = 'src/app/pages/collections/collections.module.ts';
    else if (f.includes(`${path.sep}views${path.sep}`)) mod = 'src/app/pages/views/views.module.ts';
    if (mod) {
      if (!byModule.has(mod)) byModule.set(mod, []);
      byModule.get(mod).push(res);
    }
  }
}
for (const [mod, results] of byModule) {
  patchModule(mod, results);
}
