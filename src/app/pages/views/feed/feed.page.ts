import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetImageLabelSrc from './snippets/image-label.sample.html' with { loader: 'text' };
import snippetIconLabelSrc from './snippets/icon-label.sample.html' with { loader: 'text' };
import snippetHeaderDateLabelSrc from './snippets/header-date.sample.html' with { loader: 'text' };
import snippetSubscriptDateLabelSrc from './snippets/subscript-date.sample.html' with { loader: 'text' };
import snippetAdditionalInformationSrc from './snippets/additional-information.sample.html' with { loader: 'text' };
import snippetSizeSmallSrc from './snippets/size-small.sample.html' with { loader: 'text' };
import snippetSizeLargeSrc from './snippets/size-large.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-feed',
    templateUrl: 'feed.page.html',
    standalone: false
})
export class FeedPage {
  snippetBasic = snippetBasicSrc;
  snippetImageLabel = snippetImageLabelSrc;
  snippetIconLabel = snippetIconLabelSrc;
  snippetHeaderDateLabel = snippetHeaderDateLabelSrc;
  snippetSubscriptDateLabel = snippetSubscriptDateLabelSrc;
  snippetAdditionalInformation = snippetAdditionalInformationSrc;
  snippetSizeSmall = snippetSizeSmallSrc;
  snippetSizeLarge = snippetSizeLargeSrc;









  constructor(title: Title) {
    title.setTitle('Feed | Ngx Semantic');
  }
}
