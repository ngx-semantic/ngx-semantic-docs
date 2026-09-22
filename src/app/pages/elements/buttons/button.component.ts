import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetBtnSrc from './snippets/btn-standard.sample.html' with { loader: 'text' };
import snippetBtnFocusableSrc from './snippets/btn-focusable.sample.html' with { loader: 'text' };
import snippetBtnEmphasisSrc from './snippets/btn-emphasis.sample.html' with { loader: 'text' };
import snippetBtnSecondaryEmphasisSrc from './snippets/btn-secondary-emphasis.sample.html' with { loader: 'text' };
import snippetBtnAnimatedSrc from './snippets/btn-animated.sample.html' with { loader: 'text' };
import snippetBtnLabeledSrc from './snippets/btn-labeled.sample.html' with { loader: 'text' };
import snippetBtnColourLabeledSrc from './snippets/btn-colour-labeled.sample.html' with { loader: 'text' };
import snippetBtnIconSrc from './snippets/btn-icon.sample.html' with { loader: 'text' };
import snippetBtnLabeledIconSrc from './snippets/btn-labeled-icon.sample.html' with { loader: 'text' };
import snippetBtnBasicSrc from './snippets/btn-basic.sample.html' with { loader: 'text' };
import snippetBtnBasicEmphasisSrc from './snippets/btn-basic-emphasis.sample.html' with { loader: 'text' };
import snippetBtnBasicColoursSrc from './snippets/btn-basic-colours.sample.html' with { loader: 'text' };
import snippetBtnInvertedSrc from './snippets/btn-inverted.sample.html' with { loader: 'text' };
import snippetBtnInvertedBasicSrc from './snippets/btn-inverted-basic.sample.html' with { loader: 'text' };
import snippetBtnGroupSrc from './snippets/btn-group.sample.html' with { loader: 'text' };
import snippetBtnGroupIconSrc from './snippets/btn-group-icon.sample.html' with { loader: 'text' };
import snippetBtnGroupConditionalSrc from './snippets/btn-group-conditionals.sample.html' with { loader: 'text' };
import snippetBtnGroupConditionalLocalizedSrc from './snippets/btn-group-conditionals-localized.sample.html' with { loader: 'text' };
import snippetBtnActiveSrc from './snippets/btn-active.sample.html' with { loader: 'text' };
import snippetBtnDisabledSrc from './snippets/btn-disabled.sample.html' with { loader: 'text' };
import snippetBtnLoadingSrc from './snippets/btn-loading.sample.html' with { loader: 'text' };
import snippetBtnSocialSrc from './snippets/btn-social.sample.html' with { loader: 'text' };
import snippetBtnSizeSrc from './snippets/btn-size.sample.html' with { loader: 'text' };
import snippetBtnFloatedSrc from './snippets/btn-floated.sample.html' with { loader: 'text' };
import snippetBtnColoursSrc from './snippets/btn-coloured.sample.html' with { loader: 'text' };
import snippetBtnCompactSrc from './snippets/btn-compact.sample.html' with { loader: 'text' };
import snippetBtnToggleSrc from './snippets/btn-toggle.sample.html' with { loader: 'text' };
import snippetBtnPositiveSrc from './snippets/btn-positive.sample.html' with { loader: 'text' };
import snippetBtnNegativeSrc from './snippets/btn-negative.sample.html' with { loader: 'text' };
import snippetBtnFluidSrc from './snippets/btn-fluid.sample.html' with { loader: 'text' };
import snippetBtnCircularSrc from './snippets/btn-circular.sample.html' with { loader: 'text' };
import snippetBtnCircularIconsSrc from './snippets/btn-circular-icons.sample.html' with { loader: 'text' };
import snippetBtnVerticalSrc from './snippets/btn-vertical.sample.html' with { loader: 'text' };
import snippetBtnVerticalButtonsSrc from './snippets/btn-vertical-buttons.sample.html' with { loader: 'text' };
import snippetBtnHorizontalSrc from './snippets/btn-horizontal.sample.html' with { loader: 'text' };
import snippetBtnGroupVerticalSrc from './snippets/btn-group-vertical.sample.html' with { loader: 'text' };
import snippetBtnGroupIconsSrc from './snippets/btn-group-icons.sample.html' with { loader: 'text' };
import snippetBtnGroupLabeledIconsSrc from './snippets/btn-group-labeled-icons.sample.html' with { loader: 'text' };
import snippetBtnGroupMixedSrc from './snippets/btn-group-mixed.sample.html' with { loader: 'text' };
import snippetBtnGroupEqualWidthSrc from './snippets/btn-group-equal-width.sample.html' with { loader: 'text' };
import snippetBtnGroupColouredSrc from './snippets/btn-group-coloured.sample.html' with { loader: 'text' };
import snippetBtnGroupBasicSrc from './snippets/btn-group-basic.sample.html' with { loader: 'text' };
import snippetBtnGroupBasicColouredSrc from './snippets/btn-group-basic-coloured.sample.html' with { loader: 'text' };
import snippetBtnGroupSizesSrc from './snippets/btn-btn-group-sizes.sample.html' with { loader: 'text' };
import snippetBtnGroupSizesIconsSrc from './snippets/btn-group-sizes-icon.sample.html' with { loader: 'text' };
import snippetBtnGroupSizesOrSrc from './snippets/btn-group-sizes-or.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-buttons',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: false
})
export class ButtonComponent {
  snippetBtn = snippetBtnSrc;
  snippetBtnFocusable = snippetBtnFocusableSrc;
  snippetBtnEmphasis = snippetBtnEmphasisSrc;
  snippetBtnSecondaryEmphasis = snippetBtnSecondaryEmphasisSrc;
  snippetBtnAnimated = snippetBtnAnimatedSrc;
  snippetBtnLabeled = snippetBtnLabeledSrc;
  snippetBtnColourLabeled = snippetBtnColourLabeledSrc;
  snippetBtnIcon = snippetBtnIconSrc;
  snippetBtnLabeledIcon = snippetBtnLabeledIconSrc;
  snippetBtnBasic = snippetBtnBasicSrc;
  snippetBtnBasicEmphasis = snippetBtnBasicEmphasisSrc;
  snippetBtnBasicColours = snippetBtnBasicColoursSrc;
  snippetBtnInverted = snippetBtnInvertedSrc;
  snippetBtnInvertedBasic = snippetBtnInvertedBasicSrc;
  snippetBtnGroup = snippetBtnGroupSrc;
  snippetBtnGroupIcon = snippetBtnGroupIconSrc;
  snippetBtnGroupConditional = snippetBtnGroupConditionalSrc;
  snippetBtnGroupConditionalLocalized = snippetBtnGroupConditionalLocalizedSrc;
  snippetBtnActive = snippetBtnActiveSrc;
  snippetBtnDisabled = snippetBtnDisabledSrc;
  snippetBtnLoading = snippetBtnLoadingSrc;
  snippetBtnSocial = snippetBtnSocialSrc;
  snippetBtnSize = snippetBtnSizeSrc;
  snippetBtnFloated = snippetBtnFloatedSrc;
  snippetBtnColours = snippetBtnColoursSrc;
  snippetBtnCompact = snippetBtnCompactSrc;
  snippetBtnToggle = snippetBtnToggleSrc;
  snippetBtnPositive = snippetBtnPositiveSrc;
  snippetBtnNegative = snippetBtnNegativeSrc;
  snippetBtnFluid = snippetBtnFluidSrc;
  snippetBtnCircular = snippetBtnCircularSrc;
  snippetBtnCircularIcons = snippetBtnCircularIconsSrc;
  snippetBtnVertical = snippetBtnVerticalSrc;
  snippetBtnVerticalButtons = snippetBtnVerticalButtonsSrc;
  snippetBtnHorizontal = snippetBtnHorizontalSrc;
  snippetBtnGroupVertical = snippetBtnGroupVerticalSrc;
  snippetBtnGroupIcons = snippetBtnGroupIconsSrc;
  snippetBtnGroupLabeledIcons = snippetBtnGroupLabeledIconsSrc;
  snippetBtnGroupMixed = snippetBtnGroupMixedSrc;
  snippetBtnGroupEqualWidth = snippetBtnGroupEqualWidthSrc;
  snippetBtnGroupColoured = snippetBtnGroupColouredSrc;
  snippetBtnGroupBasic = snippetBtnGroupBasicSrc;
  snippetBtnGroupBasicColoured = snippetBtnGroupBasicColouredSrc;
  snippetBtnGroupSizes = snippetBtnGroupSizesSrc;
  snippetBtnGroupSizesIcons = snippetBtnGroupSizesIconsSrc;
  snippetBtnGroupSizesOr = snippetBtnGroupSizesOrSrc;


  constructor(title: Title) {
    title.setTitle('Button | Ngx Semantic');
  }
}
