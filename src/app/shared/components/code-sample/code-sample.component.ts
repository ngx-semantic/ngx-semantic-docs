import { Component, ContentChild, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { DocDemoDirective } from '../../directives/doc-demo.directive';

@Component({
    selector: 'doc-code-sample',
    templateUrl: 'code-sample.component.html',
    styleUrl: 'code-sample.component.scss',
    standalone: false
})
export class CodeSampleComponent {
  @ContentChild(DocDemoDirective) demo?: DocDemoDirective;
  @Input() templateCode: string;
  @Input() componentCode?: string;

  codeShown = false;

  constructor(private clipboard: Clipboard) {
  }

  copyCode(which: 'html' | 'ts' | 'all' = 'all'): void {
    const html = this.templateCode?.trim() ?? '';
    const ts = this.componentCode?.trim() ?? '';
    let text = html;
    if (which === 'ts') {
      text = ts;
    } else if (which === 'all' && ts) {
      text = `${html}\n\n${ts}`;
    }
    this.clipboard.copy(text);
  }

  toggleCodeDisplay(): void {
    this.codeShown = !this.codeShown;
  }

  formatCode(code?: string): string {
    return `  ${code?.trim()}`;
  }
}
