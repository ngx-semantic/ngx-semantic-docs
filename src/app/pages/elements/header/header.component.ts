import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetPageHeaderSrc from './snippets/page-headers.sample.html' with { loader: 'text' };
import snippetContentHeaderSrc from './snippets/content-headers.sample.html' with { loader: 'text' };
import snippetIconHeaderSrc from './snippets/icon-headers.sample.html' with { loader: 'text' };
import snippetIconCenteredHeaderSrc from './snippets/icon-center-headers.sample.html' with { loader: 'text' };
import snippetSubHeaderSrc from './snippets/sub-headers.sample.html' with { loader: 'text' };
import snippetSubImageHeaderSrc from './snippets/sub-image-headers.sample.html' with { loader: 'text' };
import snippetImageHeaderSrc from './snippets/image-header.sample.html' with { loader: 'text' };
import snippetCircularImageHeaderSrc from './snippets/image-circular-header.sample.html' with { loader: 'text' };
import snippetImageSubHeaderSrc from './snippets/image-sub-header.sample.html' with { loader: 'text' };
import snippetHeaderDetailsSrc from './snippets/sub-header-details.sample.html' with { loader: 'text' };
import snippetHeaderSizeDetailsSrc from './snippets/sub-header-sizes-details.sample.html' with { loader: 'text' };
import snippetDisabledHeaderSrc from './snippets/disabled-header.sample.html' with { loader: 'text' };
import snippetDividingHeaderSrc from './snippets/dividing-header.sample.html' with { loader: 'text' };
import snippetBlockHeaderSrc from './snippets/block-header.sample.html' with { loader: 'text' };
import snippetAttachedHeaderSrc from './snippets/attached-header.sample.html' with { loader: 'text' };
import snippetFloatingHeaderSrc from './snippets/floating-header.sample.html' with { loader: 'text' };
import snippetTextAlignmentHeaderSrc from './snippets/text-alignment-header.sample.html' with { loader: 'text' };
import snippetColouredSrc from './snippets/header-coloured.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/header-coloured-inverted.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-headers',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  snippetPageHeader = snippetPageHeaderSrc;
  snippetContentHeader = snippetContentHeaderSrc;
  snippetIconHeader = snippetIconHeaderSrc;
  snippetIconCenteredHeader = snippetIconCenteredHeaderSrc;
  snippetSubHeader = snippetSubHeaderSrc;
  snippetSubImageHeader = snippetSubImageHeaderSrc;
  snippetImageHeader = snippetImageHeaderSrc;
  snippetCircularImageHeader = snippetCircularImageHeaderSrc;
  snippetImageSubHeader = snippetImageSubHeaderSrc;
  snippetHeaderDetails = snippetHeaderDetailsSrc;
  snippetHeaderSizeDetails = snippetHeaderSizeDetailsSrc;
  snippetDisabledHeader = snippetDisabledHeaderSrc;
  snippetDividingHeader = snippetDividingHeaderSrc;
  snippetBlockHeader = snippetBlockHeaderSrc;
  snippetAttachedHeader = snippetAttachedHeaderSrc;
  snippetFloatingHeader = snippetFloatingHeaderSrc;
  snippetTextAlignmentHeader = snippetTextAlignmentHeaderSrc;
  snippetColoured = snippetColouredSrc;
  snippetInverted = snippetInvertedSrc;

  isDefinitionsActive = true;
  isApiActive: boolean;




















  constructor(title: Title) {
    title.setTitle('Header | Ngx Semantic');
  }
}
