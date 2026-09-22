import { Component } from '@angular/core';

@Component({
  selector: 'doc-checkbox-standard-example',
  templateUrl: './snippets/standard.sample.html',
  standalone: false
})
export class CheckboxStandardExampleComponent {
}

@Component({
  selector: 'doc-checkbox-basic-radio-example',
  templateUrl: './snippets/basic-radio.sample.html',
  standalone: false
})
export class CheckboxBasicRadioExampleComponent {
}

@Component({
  selector: 'doc-checkbox-inline-radio-example',
  templateUrl: './snippets/inline-radio.sample.html',
  standalone: false
})
export class CheckboxInlineRadioExampleComponent {
  inlineRadioValue: string = null;
}

@Component({
  selector: 'doc-checkbox-grouped-radio-example',
  templateUrl: './snippets/grouped-radio.sample.html',
  standalone: false
})
export class CheckboxGroupedRadioExampleComponent {
  groupedRadioValue: string = null;
}

@Component({
  selector: 'doc-checkbox-basic-slider-example',
  templateUrl: './snippets/basic-slider.sample.html',
  standalone: false
})
export class CheckboxBasicSliderExampleComponent {
}

@Component({
  selector: 'doc-checkbox-grouped-slider-example',
  templateUrl: './snippets/grouped-slider.sample.html',
  standalone: false
})
export class CheckboxGroupedSliderExampleComponent {
  groupedSliderValue: string = null;
}

@Component({
  selector: 'doc-checkbox-toggle-example',
  templateUrl: './snippets/toggle.sample.html',
  standalone: false
})
export class CheckboxToggleExampleComponent {
}

@Component({
  selector: 'doc-checkbox-read-only-example',
  templateUrl: './snippets/read-only.sample.html',
  standalone: false
})
export class CheckboxReadOnlyExampleComponent {
}

@Component({
  selector: 'doc-checkbox-checked-example',
  templateUrl: './snippets/checked.sample.html',
  standalone: false
})
export class CheckboxCheckedExampleComponent {
}

@Component({
  selector: 'doc-checkbox-indeterminate-example',
  templateUrl: './snippets/indeterminate.sample.html',
  standalone: false
})
export class CheckboxIndeterminateExampleComponent {
}

@Component({
  selector: 'doc-checkbox-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class CheckboxDisabledExampleComponent {
}

@Component({
  selector: 'doc-checkbox-fitted-example',
  templateUrl: './snippets/fitted.sample.html',
  standalone: false
})
export class CheckboxFittedExampleComponent {
}

export const CHECKBOX_EXAMPLES = [
  CheckboxStandardExampleComponent,
  CheckboxBasicRadioExampleComponent,
  CheckboxInlineRadioExampleComponent,
  CheckboxGroupedRadioExampleComponent,
  CheckboxBasicSliderExampleComponent,
  CheckboxGroupedSliderExampleComponent,
  CheckboxToggleExampleComponent,
  CheckboxReadOnlyExampleComponent,
  CheckboxCheckedExampleComponent,
  CheckboxIndeterminateExampleComponent,
  CheckboxDisabledExampleComponent,
  CheckboxFittedExampleComponent,
];
