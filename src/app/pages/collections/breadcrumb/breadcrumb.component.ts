import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStdSrc from './snippets/breadcrumb-std.sample.html' with { loader: 'text' };
import snippetStd1Src from './snippets/breadcrumb-std1.sample.html' with { loader: 'text' };
import snippetContent1Src from './snippets/breadcrumb-content.sample.html' with { loader: 'text' };
import snippetContent2Src from './snippets/breadcrumb-content1.sample.html' with { loader: 'text' };
import snippetSectionSrc from './snippets/breadcrumb-section.sample.html' with { loader: 'text' };
import snippetLinkSrc from './snippets/breadcrumb-link.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/breadcrumb-active.sample.html' with { loader: 'text' };
import snippetSizeSrc from './snippets/breadcrumb-size.sample.html' with { loader: 'text' };
import snippetSize1Src from './snippets/breadcrumb-size1.sample.html' with { loader: 'text' };
import snippetSize2Src from './snippets/breadcrumb-size2.sample.html' with { loader: 'text' };
import snippetSize3Src from './snippets/breadcrumb-size3.sample.html' with { loader: 'text' };
import snippetSize4Src from './snippets/breadcrumb-size4.sample.html' with { loader: 'text' };
import snippetSize5Src from './snippets/breadcrumb-size5.sample.html' with { loader: 'text' };
import snippetSize6Src from './snippets/breadcrumb-size6.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    standalone: false
})
export class BreadcrumbComponent {
  snippetStd = snippetStdSrc;
  snippetStd1 = snippetStd1Src;
  snippetContent1 = snippetContent1Src;
  snippetContent2 = snippetContent2Src;
  snippetSection = snippetSectionSrc;
  snippetLink = snippetLinkSrc;
  snippetActive = snippetActiveSrc;
  snippetSize = snippetSizeSrc;
  snippetSize1 = snippetSize1Src;
  snippetSize2 = snippetSize2Src;
  snippetSize3 = snippetSize3Src;
  snippetSize4 = snippetSize4Src;
  snippetSize5 = snippetSize5Src;
  snippetSize6 = snippetSize6Src;















  constructor(title: Title) {
    title.setTitle('Breadcrumb | Ngx Semantic');
  }
}
