import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetCardSrc from './snippets/card.sample.html' with { loader: 'text' };
import snippetCardsSrc from './snippets/cards.sample.html' with { loader: 'text' };
import snippetContentBlockSrc from './snippets/content-block.sample.html' with { loader: 'text' };
import snippetImageSrc from './snippets/image.sample.html' with { loader: 'text' };
import snippetHeaderSrc from './snippets/header.sample.html' with { loader: 'text' };
import snippetMetadataSrc from './snippets/metadata.sample.html' with { loader: 'text' };
import snippetLinkSrc from './snippets/link.sample.html' with { loader: 'text' };
import snippetButtonsSrc from './snippets/buttons.sample.html' with { loader: 'text' };
import snippetApprovalSrc from './snippets/approval.sample.html' with { loader: 'text' };
import snippetDescriptionSrc from './snippets/description.sample.html' with { loader: 'text' };
import snippetExtraContentSrc from './snippets/extra-content.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetCenteredSrc from './snippets/centered.sample.html' with { loader: 'text' };
import snippetRaisedSrc from './snippets/raised.sample.html' with { loader: 'text' };
import snippetLinkCardSrc from './snippets/link-card.sample.html' with { loader: 'text' };
import snippetFloatedSrc from './snippets/floated.sample.html' with { loader: 'text' };
import snippetTextAlignmentSrc from './snippets/text-alignment.sample.html' with { loader: 'text' };
import snippetColouredSrc from './snippets/coloured.sample.html' with { loader: 'text' };
import snippetColumnCountSrc from './snippets/column-count.sample.html' with { loader: 'text' };
import snippetStackableSrc from './snippets/stackable.sample.html' with { loader: 'text' };
import snippetDoublingSrc from './snippets/doubling.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-card',
  templateUrl: 'card.page.html',
  standalone: false
})
export class CardPage {
  snippetCard = snippetCardSrc;
  snippetCards = snippetCardsSrc;
  snippetContentBlock = snippetContentBlockSrc;
  snippetImage = snippetImageSrc;
  snippetHeader = snippetHeaderSrc;
  snippetMetadata = snippetMetadataSrc;
  snippetLink = snippetLinkSrc;
  snippetButtons = snippetButtonsSrc;
  snippetApproval = snippetApprovalSrc;
  snippetDescription = snippetDescriptionSrc;
  snippetExtraContent = snippetExtraContentSrc;
  snippetFluid = snippetFluidSrc;
  snippetCentered = snippetCenteredSrc;
  snippetRaised = snippetRaisedSrc;
  snippetLinkCard = snippetLinkCardSrc;
  snippetFloated = snippetFloatedSrc;
  snippetTextAlignment = snippetTextAlignmentSrc;
  snippetColoured = snippetColouredSrc;
  snippetColumnCount = snippetColumnCountSrc;
  snippetStackable = snippetStackableSrc;
  snippetDoubling = snippetDoublingSrc;

  constructor(title: Title) {
    title.setTitle('Card | Ngx Semantic');
  }
}
