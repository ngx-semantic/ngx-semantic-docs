import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetInternalSrc from './snippets/internal.sample.html' with { loader: 'text' };
import snippetDividingSrc from './snippets/dividing.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/attached.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-rail',
    templateUrl: './rail.component.html',
    styles: [`
    .container {
      min-height: 300px;
      width: 960px;
    }
  `],
    standalone: false
})
export class RailComponent {
  snippetBasic = snippetBasicSrc;
  snippetInternal = snippetInternalSrc;
  snippetDividing = snippetDividingSrc;
  snippetAttached = snippetAttachedSrc;





  constructor(title: Title) {
    title.setTitle('Rail | Ngx Semantic');
  }
}
