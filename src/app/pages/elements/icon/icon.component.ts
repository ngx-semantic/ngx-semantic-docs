import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetIconDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetIconLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetIconFittedSrc from './snippets/fitted.sample.html' with { loader: 'text' };
import snippetIconSizesSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetIconLinkSrc from './snippets/link.sample.html' with { loader: 'text' };
import snippetIconFlippedSrc from './snippets/flipped.sample.html' with { loader: 'text' };
import snippetIconRotatedSrc from './snippets/rotated.sample.html' with { loader: 'text' };
import snippetIconCircularSrc from './snippets/circular.sample.html' with { loader: 'text' };
import snippetIconBorderedSrc from './snippets/bordered.sample.html' with { loader: 'text' };
import snippetIconColouredSrc from './snippets/coloured.sample.html' with { loader: 'text' };
import snippetIconInvertedColouredSrc from './snippets/inverted-coloured.sample.html' with { loader: 'text' };
import snippetIconsFirstSrc from './snippets/first-icon-group.sample.html' with { loader: 'text' };
import snippetIconsSecondSrc from './snippets/second-icon-group.sample.html' with { loader: 'text' };
import snippetIconsCornerSrc from './snippets/corner-icon.sample.html' with { loader: 'text' };
import snippetIconsCornerOptionsSrc from './snippets/corner-icon-options.sample.html' with { loader: 'text' };
import snippetIconsInlineSrc from './snippets/inline-corner-icon.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-icons',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    standalone: false
})
export class IconComponent {
  snippetIconDisabled = snippetIconDisabledSrc;
  snippetIconLoading = snippetIconLoadingSrc;
  snippetIconFitted = snippetIconFittedSrc;
  snippetIconSizes = snippetIconSizesSrc;
  snippetIconLink = snippetIconLinkSrc;
  snippetIconFlipped = snippetIconFlippedSrc;
  snippetIconRotated = snippetIconRotatedSrc;
  snippetIconCircular = snippetIconCircularSrc;
  snippetIconBordered = snippetIconBorderedSrc;
  snippetIconColoured = snippetIconColouredSrc;
  snippetIconInvertedColoured = snippetIconInvertedColouredSrc;
  snippetIconsFirst = snippetIconsFirstSrc;
  snippetIconsSecond = snippetIconsSecondSrc;
  snippetIconsCorner = snippetIconsCornerSrc;
  snippetIconsCornerOptions = snippetIconsCornerOptionsSrc;
  snippetIconsInline = snippetIconsInlineSrc;

  isDefinitionsActive = true;
  isApiActive: boolean;

















  constructor(title: Title) {
    title.setTitle('Icon | Ngx Semantic');
  }
}
