import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetFocusSrc from './snippets/focus.sample.html' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetLoadingRightSrc from './snippets/loading-right.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetDisabledIconSrc from './snippets/disabled-icon.sample.html' with { loader: 'text' };
import snippetDisabledInputSrc from './snippets/disabled-input.sample.html' with { loader: 'text' };
import snippetErrorSrc from './snippets/error.sample.html' with { loader: 'text' };
import snippetIconSrc from './snippets/icon.sample.html' with { loader: 'text' };
import snippetIconPositionSrc from './snippets/icon-position.sample.html' with { loader: 'text' };
import snippetIconCircularSrc from './snippets/icon-circular.sample.html' with { loader: 'text' };
import snippetIconCircularInvertedSrc from './snippets/icon-circular-inverted.sample.html' with { loader: 'text' };
import snippetLabeledSrc from './snippets/labeled.sample.html' with { loader: 'text' };
import snippetRightLabeledSrc from './snippets/right-labeled.sample.html' with { loader: 'text' };
import snippetBasicLabeledSrc from './snippets/basic-labeled.sample.html' with { loader: 'text' };
import snippetCombinedLabeledSrc from './snippets/combined-labeled.sample.html' with { loader: 'text' };
import snippetAngledLabeledSrc from './snippets/angled-labeled.sample.html' with { loader: 'text' };
import snippetLeftCornerLabeledSrc from './snippets/left-corner-labeled.sample.html' with { loader: 'text' };
import snippetCornerLabeledSrc from './snippets/corner-labeled.sample.html' with { loader: 'text' };
import snippetActionSrc from './snippets/action.sample.html' with { loader: 'text' };
import snippetLeftActionSrc from './snippets/left-action.sample.html' with { loader: 'text' };
import snippetRightActionSrc from './snippets/right-action.sample.html' with { loader: 'text' };
import snippetCombinedActionSrc from './snippets/combined-action.sample.html' with { loader: 'text' };
import snippetRightLabeledActionSrc from './snippets/right-label-action.sample.html' with { loader: 'text' };
import snippetIconActionSrc from './snippets/icon-action.sample.html' with { loader: 'text' };
import snippetTransparentSrc from './snippets/transparent.sample.html' with { loader: 'text' };
import snippetIconTransparentSrc from './snippets/icon-transparent.sample.html' with { loader: 'text' };
import snippetLeftIconTransparentSrc from './snippets/left-icon-transparent.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetMiniSizeSrc from './snippets/mini-size.sample.html' with { loader: 'text' };
import snippetSmallSizeSrc from './snippets/small-size.sample.html' with { loader: 'text' };
import snippetLargeSizeSrc from './snippets/large-size.sample.html' with { loader: 'text' };
import snippetBigSizeSrc from './snippets/big-size.sample.html' with { loader: 'text' };
import snippetHugeSizeSrc from './snippets/huge-size.sample.html' with { loader: 'text' };
import snippetMassiveSizeSrc from './snippets/massive-size.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: false
})
export class InputComponent {
  snippetStandard = snippetStandardSrc;
  snippetFocus = snippetFocusSrc;
  snippetLoading = snippetLoadingSrc;
  snippetLoadingRight = snippetLoadingRightSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetDisabledIcon = snippetDisabledIconSrc;
  snippetDisabledInput = snippetDisabledInputSrc;
  snippetError = snippetErrorSrc;
  snippetIcon = snippetIconSrc;
  snippetIconPosition = snippetIconPositionSrc;
  snippetIconCircular = snippetIconCircularSrc;
  snippetIconCircularInverted = snippetIconCircularInvertedSrc;
  snippetLabeled = snippetLabeledSrc;
  snippetRightLabeled = snippetRightLabeledSrc;
  snippetBasicLabeled = snippetBasicLabeledSrc;
  snippetCombinedLabeled = snippetCombinedLabeledSrc;
  snippetAngledLabeled = snippetAngledLabeledSrc;
  snippetLeftCornerLabeled = snippetLeftCornerLabeledSrc;
  snippetCornerLabeled = snippetCornerLabeledSrc;
  snippetAction = snippetActionSrc;
  snippetLeftAction = snippetLeftActionSrc;
  snippetRightAction = snippetRightActionSrc;
  snippetCombinedAction = snippetCombinedActionSrc;
  snippetRightLabeledAction = snippetRightLabeledActionSrc;
  snippetIconAction = snippetIconActionSrc;
  snippetTransparent = snippetTransparentSrc;
  snippetIconTransparent = snippetIconTransparentSrc;
  snippetLeftIconTransparent = snippetLeftIconTransparentSrc;
  snippetInverted = snippetInvertedSrc;
  snippetFluid = snippetFluidSrc;
  snippetMiniSize = snippetMiniSizeSrc;
  snippetSmallSize = snippetSmallSizeSrc;
  snippetLargeSize = snippetLargeSizeSrc;
  snippetBigSize = snippetBigSizeSrc;
  snippetHugeSize = snippetHugeSizeSrc;
  snippetMassiveSize = snippetMassiveSizeSrc;


  selectedOption = 'articles';
  options = [
    {value: 'all', text: 'All'},
    {value: 'articles', text: 'Articles'},
    {value: 'products', text: 'Products'}
  ];

  constructor(title: Title) {
    title.setTitle('Input | Ngx Semantic');
  }
}
