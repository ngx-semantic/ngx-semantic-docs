import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetImageContentSrc from './snippets/image-content.sample.html' with { loader: 'text' };
import snippetContentSrc from './snippets/content.sample.html' with { loader: 'text' };
import snippetHeaderSrc from './snippets/header.sample.html' with { loader: 'text' };
import snippetMetadataSrc from './snippets/metadata.sample.html' with { loader: 'text' };
import snippetLinkSrc from './snippets/link.sample.html' with { loader: 'text' };
import snippetDescriptionSrc from './snippets/description.sample.html' with { loader: 'text' };
import snippetExtraContentSrc from './snippets/extra-content.sample.html' with { loader: 'text' };
import snippetRatingSrc from './snippets/rating.sample.html' with { loader: 'text' };
import snippetUnstackableSrc from './snippets/unstackable.sample.html' with { loader: 'text' };
import snippetDividedSrc from './snippets/divided.sample.html' with { loader: 'text' };
import snippetRelaxedSrc from './snippets/relaxed.sample.html' with { loader: 'text' };
import snippetVeryRelaxedSrc from './snippets/very-relaxed.sample.html' with { loader: 'text' };
import snippetLinkItemSrc from './snippets/link-item.sample.html' with { loader: 'text' };
import snippetVerticalAlignmentSrc from './snippets/vertical-alignment.sample.html' with { loader: 'text' };
import snippetFloatedContentSrc from './snippets/floated-content.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-item',
    templateUrl: 'item.page.html',
    standalone: false
})
export class ItemPage {
  snippetStandard = snippetStandardSrc;
  snippetImageContent = snippetImageContentSrc;
  snippetContent = snippetContentSrc;
  snippetHeader = snippetHeaderSrc;
  snippetMetadata = snippetMetadataSrc;
  snippetLink = snippetLinkSrc;
  snippetDescription = snippetDescriptionSrc;
  snippetExtraContent = snippetExtraContentSrc;
  snippetRating = snippetRatingSrc;
  snippetUnstackable = snippetUnstackableSrc;
  snippetDivided = snippetDividedSrc;
  snippetRelaxed = snippetRelaxedSrc;
  snippetVeryRelaxed = snippetVeryRelaxedSrc;
  snippetLinkItem = snippetLinkItemSrc;
  snippetVerticalAlignment = snippetVerticalAlignmentSrc;
  snippetFloatedContent = snippetFloatedContentSrc;

















  constructor(title: Title) {
    title.setTitle('Item | Ngx Semantic');
  }
}
