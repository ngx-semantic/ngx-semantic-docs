import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetStdSrc from './snippets/std-label.sample.html' with { loader: 'text' };
import snippetImgSrc from './snippets/img-label.sample.html' with { loader: 'text' };
import snippetImg2Src from './snippets/img-label2.sample.html' with { loader: 'text' };
import snippetImg3Src from './snippets/img-label3.sample.html' with { loader: 'text' };
import snippetPointingSrc from './snippets/pointing-label.sample.html' with { loader: 'text' };
import snippetPointing2Src from './snippets/pointing-label2.sample.html' with { loader: 'text' };
import snippetCornerSrc from './snippets/corner-label.sample.html' with { loader: 'text' };
import snippetTagSrc from './snippets/tag-label.sample.html' with { loader: 'text' };
import snippetRibbonSrc from './snippets/ribbon-label.sample.html' with { loader: 'text' };
import snippetRibbon2Src from './snippets/ribbon-label2.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/attched-label.sample.html' with { loader: 'text' };
import snippetHorizontalSrc from './snippets/horizontal-label.sample.html' with { loader: 'text' };
import snippetFloatingSrc from './snippets/floating-label.sample.html' with { loader: 'text' };
import snippetDetailSrc from './snippets/detail-label.sample.html' with { loader: 'text' };
import snippetIconSrc from './snippets/icon-label.sample.html' with { loader: 'text' };
import snippetImage4Src from './snippets/img-label4.sample.html' with { loader: 'text' };
import snippetLinkSrc from './snippets/std-link.sample.html' with { loader: 'text' };
import snippetCircularSrc from './snippets/label-circular.sample.html' with { loader: 'text' };
import snippetColouredEmptySrc from './snippets/label-coloured-empty.sample.html' with { loader: 'text' };
import snippetBasicSrc from './snippets/label-basic.sample.html' with { loader: 'text' };
import snippetColouredSrc from './snippets/label-coloured.sample.html' with { loader: 'text' };
import snippetSizeSrc from './snippets/label-size.sample.html' with { loader: 'text' };
import snippetGroupSizeSrc from './snippets/label-group-size.sample.html' with { loader: 'text' };
import snippetGroupColourSrc from './snippets/label-group-colour.sample.html' with { loader: 'text' };
import snippetGroupTagSrc from './snippets/label-group-tag.sample.html' with { loader: 'text' };
import snippetGroupCircularSrc from './snippets/label-group-circular.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-labels',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
    standalone: false
})
export class LabelComponent {
  snippetStd = snippetStdSrc;
  snippetImg = snippetImgSrc;
  snippetImg2 = snippetImg2Src;
  snippetImg3 = snippetImg3Src;
  snippetPointing = snippetPointingSrc;
  snippetPointing2 = snippetPointing2Src;
  snippetCorner = snippetCornerSrc;
  snippetTag = snippetTagSrc;
  snippetRibbon = snippetRibbonSrc;
  snippetRibbon2 = snippetRibbon2Src;
  snippetAttached = snippetAttachedSrc;
  snippetHorizontal = snippetHorizontalSrc;
  snippetFloating = snippetFloatingSrc;
  snippetDetail = snippetDetailSrc;
  snippetIcon = snippetIconSrc;
  snippetImage4 = snippetImage4Src;
  snippetLink = snippetLinkSrc;
  snippetCircular = snippetCircularSrc;
  snippetColouredEmpty = snippetColouredEmptySrc;
  snippetBasic = snippetBasicSrc;
  snippetColoured = snippetColouredSrc;
  snippetSize = snippetSizeSrc;
  snippetGroupSize = snippetGroupSizeSrc;
  snippetGroupColour = snippetGroupColourSrc;
  snippetGroupTag = snippetGroupTagSrc;
  snippetGroupCircular = snippetGroupCircularSrc;




























  constructor(title: Title) {
    title.setTitle('Label | Ngx Semantic');
  }
}
