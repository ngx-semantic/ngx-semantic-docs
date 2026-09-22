import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetBasicInnerImgSrc from './snippets/basic-inner-img.sample.html' with { loader: 'text' };
import snippetBasicInnerSvgSrc from './snippets/basic-inner-svg.sample.html' with { loader: 'text' };
import snippetImageLinkSrc from './snippets/image-link.sample.html' with { loader: 'text' };
import snippetHiddenSrc from './snippets/hidden.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetAvatarSrc from './snippets/avatar.sample.html' with { loader: 'text' };
import snippetBorderedSrc from './snippets/bordered.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetRoundedSrc from './snippets/rounded.sample.html' with { loader: 'text' };
import snippetCircularSrc from './snippets/circular.sample.html' with { loader: 'text' };
import snippetAlignmentSrc from './snippets/vertical-aligned.sample.html' with { loader: 'text' };
import snippetCenteredSrc from './snippets/centered.sample.html' with { loader: 'text' };
import snippetSpacedSrc from './snippets/spaced.sample.html' with { loader: 'text' };
import snippetSpacedAltSrc from './snippets/spaced-alt.sample.html' with { loader: 'text' };
import snippetFloatedSrc from './snippets/floated.sample.html' with { loader: 'text' };
import snippetSizeSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetGroupSizeSrc from './snippets/group-size.sample.html' with { loader: 'text' };
import snippetGroupSizeAltSrc from './snippets/group-size-alt.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-image',
    templateUrl: './image.component.html',
    styles: [`
    .image-sizes img {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  `],
    standalone: false
})
export class ImageComponent {
  snippetBasic = snippetBasicSrc;
  snippetBasicInnerImg = snippetBasicInnerImgSrc;
  snippetBasicInnerSvg = snippetBasicInnerSvgSrc;
  snippetImageLink = snippetImageLinkSrc;
  snippetHidden = snippetHiddenSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetAvatar = snippetAvatarSrc;
  snippetBordered = snippetBorderedSrc;
  snippetFluid = snippetFluidSrc;
  snippetRounded = snippetRoundedSrc;
  snippetCircular = snippetCircularSrc;
  snippetAlignment = snippetAlignmentSrc;
  snippetCentered = snippetCenteredSrc;
  snippetSpaced = snippetSpacedSrc;
  snippetSpacedAlt = snippetSpacedAltSrc;
  snippetFloated = snippetFloatedSrc;
  snippetSize = snippetSizeSrc;
  snippetGroupSize = snippetGroupSizeSrc;
  snippetGroupSizeAlt = snippetGroupSizeAltSrc;




















  constructor(title: Title) {
    title.setTitle('Image | Ngx Semantic');
  }
}
