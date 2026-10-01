import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStickySrc from './snippets/sticky.sample.html' with { loader: 'text' };
import snippetPushingSrc from './snippets/pushing.sample.html' with { loader: 'text' };
import snippetOffsetSrc from './snippets/offset.sample.html' with { loader: 'text' };
import snippetEventsSrc from './snippets/events.sample.html' with { loader: 'text' };
import snippetScrollContextSrc from './snippets/scroll-context.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-sticky',
  templateUrl: './sticky.page.html',
  styles: [`
    :host ::ng-deep .sticky-demo .sticky-content {
      width: 60%;
    }

    :host ::ng-deep .sticky-demo .sticky-scroll {
      height: 22rem;
      overflow-y: auto;
    }
  `],
  standalone: false
})
export class StickyPage {
  snippetSticky = snippetStickySrc;
  snippetPushing = snippetPushingSrc;
  snippetOffset = snippetOffsetSrc;
  snippetEvents = snippetEventsSrc;
  snippetScrollContext = snippetScrollContextSrc;

  constructor(title: Title) {
    title.setTitle('Sticky | Ngx Semantic');
  }
}
