import { Component } from '@angular/core';

export class InputSampleState {
  selectedOption = 'articles';
  options = [
    {value: 'all', text: 'All'},
    {value: 'articles', text: 'Articles'},
    {value: 'products', text: 'Products'}
  ];
}

@Component({
  selector: 'doc-input-standard-example',
  templateUrl: './snippets/standard.sample.html',
  standalone: false
})
export class InputStandardExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-focus-example',
  templateUrl: './snippets/focus.sample.html',
  standalone: false
})
export class InputFocusExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-loading-example',
  templateUrl: './snippets/loading.sample.html',
  standalone: false
})
export class InputLoadingExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-loading-right-example',
  templateUrl: './snippets/loading-right.sample.html',
  standalone: false
})
export class InputLoadingRightExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class InputDisabledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-disabled-icon-example',
  templateUrl: './snippets/disabled-icon.sample.html',
  standalone: false
})
export class InputDisabledIconExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-disabled-input-example',
  templateUrl: './snippets/disabled-input.sample.html',
  standalone: false
})
export class InputDisabledInputExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-error-example',
  templateUrl: './snippets/error.sample.html',
  standalone: false
})
export class InputErrorExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-icon-example',
  templateUrl: './snippets/icon.sample.html',
  standalone: false
})
export class InputIconExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-icon-position-example',
  templateUrl: './snippets/icon-position.sample.html',
  standalone: false
})
export class InputIconPositionExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-icon-circular-example',
  templateUrl: './snippets/icon-circular.sample.html',
  standalone: false
})
export class InputIconCircularExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-icon-circular-inverted-example',
  templateUrl: './snippets/icon-circular-inverted.sample.html',
  standalone: false
})
export class InputIconCircularInvertedExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-labeled-example',
  templateUrl: './snippets/labeled.sample.html',
  standalone: false
})
export class InputLabeledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-right-labeled-example',
  templateUrl: './snippets/right-labeled.sample.html',
  standalone: false
})
export class InputRightLabeledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-basic-labeled-example',
  templateUrl: './snippets/basic-labeled.sample.html',
  standalone: false
})
export class InputBasicLabeledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-combined-labeled-example',
  templateUrl: './snippets/combined-labeled.sample.html',
  standalone: false
})
export class InputCombinedLabeledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-angled-labeled-example',
  templateUrl: './snippets/angled-labeled.sample.html',
  standalone: false
})
export class InputAngledLabeledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-left-corner-labeled-example',
  templateUrl: './snippets/left-corner-labeled.sample.html',
  standalone: false
})
export class InputLeftCornerLabeledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-corner-labeled-example',
  templateUrl: './snippets/corner-labeled.sample.html',
  standalone: false
})
export class InputCornerLabeledExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-action-example',
  templateUrl: './snippets/action.sample.html',
  standalone: false
})
export class InputActionExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-left-action-example',
  templateUrl: './snippets/left-action.sample.html',
  standalone: false
})
export class InputLeftActionExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-right-action-example',
  templateUrl: './snippets/right-action.sample.html',
  standalone: false
})
export class InputRightActionExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-combined-action-example',
  templateUrl: './snippets/combined-action.sample.html',
  standalone: false
})
export class InputCombinedActionExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-right-label-action-example',
  templateUrl: './snippets/right-label-action.sample.html',
  standalone: false
})
export class InputRightLabelActionExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-icon-action-example',
  templateUrl: './snippets/icon-action.sample.html',
  standalone: false
})
export class InputIconActionExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-transparent-example',
  templateUrl: './snippets/transparent.sample.html',
  standalone: false
})
export class InputTransparentExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-icon-transparent-example',
  templateUrl: './snippets/icon-transparent.sample.html',
  standalone: false
})
export class InputIconTransparentExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-left-icon-transparent-example',
  templateUrl: './snippets/left-icon-transparent.sample.html',
  standalone: false
})
export class InputLeftIconTransparentExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  standalone: false
})
export class InputInvertedExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-fluid-example',
  templateUrl: './snippets/fluid.sample.html',
  standalone: false
})
export class InputFluidExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-mini-size-example',
  templateUrl: './snippets/mini-size.sample.html',
  standalone: false
})
export class InputMiniSizeExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-small-size-example',
  templateUrl: './snippets/small-size.sample.html',
  standalone: false
})
export class InputSmallSizeExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-large-size-example',
  templateUrl: './snippets/large-size.sample.html',
  standalone: false
})
export class InputLargeSizeExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-big-size-example',
  templateUrl: './snippets/big-size.sample.html',
  standalone: false
})
export class InputBigSizeExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-huge-size-example',
  templateUrl: './snippets/huge-size.sample.html',
  standalone: false
})
export class InputHugeSizeExampleComponent extends InputSampleState {
}

@Component({
  selector: 'doc-input-massive-size-example',
  templateUrl: './snippets/massive-size.sample.html',
  standalone: false
})
export class InputMassiveSizeExampleComponent extends InputSampleState {
}
export const INPUT_EXAMPLES = [
  InputStandardExampleComponent,
  InputFocusExampleComponent,
  InputLoadingExampleComponent,
  InputLoadingRightExampleComponent,
  InputDisabledExampleComponent,
  InputDisabledIconExampleComponent,
  InputDisabledInputExampleComponent,
  InputErrorExampleComponent,
  InputIconExampleComponent,
  InputIconPositionExampleComponent,
  InputIconCircularExampleComponent,
  InputIconCircularInvertedExampleComponent,
  InputLabeledExampleComponent,
  InputRightLabeledExampleComponent,
  InputBasicLabeledExampleComponent,
  InputCombinedLabeledExampleComponent,
  InputAngledLabeledExampleComponent,
  InputLeftCornerLabeledExampleComponent,
  InputCornerLabeledExampleComponent,
  InputActionExampleComponent,
  InputLeftActionExampleComponent,
  InputRightActionExampleComponent,
  InputCombinedActionExampleComponent,
  InputRightLabelActionExampleComponent,
  InputIconActionExampleComponent,
  InputTransparentExampleComponent,
  InputIconTransparentExampleComponent,
  InputLeftIconTransparentExampleComponent,
  InputInvertedExampleComponent,
  InputFluidExampleComponent,
  InputMiniSizeExampleComponent,
  InputSmallSizeExampleComponent,
  InputLargeSizeExampleComponent,
  InputBigSizeExampleComponent,
  InputHugeSizeExampleComponent,
  InputMassiveSizeExampleComponent,
];
