import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetBasicSrc from './snippets/placeholder.sample.html' with { loader: 'text' };
import snippetGridSrc from './snippets/grid-placeholder.sample.html' with { loader: 'text' };
import snippetCardSrc from './snippets/card-placeholder.sample.html' with { loader: 'text' };
import snippetLinesSrc from './snippets/lines.sample.html' with { loader: 'text' };
import snippetImageHeaderSrc from './snippets/image-header.sample.html' with { loader: 'text' };
import snippetHeaderSrc from './snippets/header.sample.html' with { loader: 'text' };
import snippetParagraphSrc from './snippets/paragraph.sample.html' with { loader: 'text' };
import snippetImageSrc from './snippets/image.sample.html' with { loader: 'text' };
import snippetSquareImageSrc from './snippets/square-images.sample.html' with { loader: 'text' };
import snippetRectangularImageSrc from './snippets/rectangular-images.sample.html' with { loader: 'text' };
import snippetLineLengthSrc from './snippets/line-length.sample.html' with { loader: 'text' };
import snippetComplexLineLengthSrc from './snippets/complex-line-length.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-placeholders',
    templateUrl: './placeholder.component.html',
    styles: [`
    div [class*="right floated"] {
      float: right;
      margin-right: 0.25em;
    }
  `],
    standalone: false
})
export class PlaceholderComponent {
  snippetBasic = snippetBasicSrc;
  snippetGrid = snippetGridSrc;
  snippetCard = snippetCardSrc;
  snippetLines = snippetLinesSrc;
  snippetImageHeader = snippetImageHeaderSrc;
  snippetHeader = snippetHeaderSrc;
  snippetParagraph = snippetParagraphSrc;
  snippetImage = snippetImageSrc;
  snippetSquareImage = snippetSquareImageSrc;
  snippetRectangularImage = snippetRectangularImageSrc;
  snippetLineLength = snippetLineLengthSrc;
  snippetComplexLineLength = snippetComplexLineLengthSrc;
  snippetFluid = snippetFluidSrc;
  snippetInverted = snippetInvertedSrc;















  constructor(title: Title) {
    title.setTitle('Placeholder | Ngx Semantic');
  }
}
