import { Component } from '@angular/core';

export class FormSampleState {
  states = [ { text: 'Alabama', value: 'al' } ];
  countries = [ { text: 'Albania', value: 'al', flag: 'al' }, { text: 'Nigeria', value: 'ng', flag: 'ng' } ];
  months = [ { text: 'January', value: 'jan' } ];
  cards = [ { text: 'Visa', value: 'visa' } ];
  contacts = [ {
    text: 'Justen Kitsune',
    image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg' }
  } ];
  gender = [ { text: 'Male' }, { text: 'Female' } ];
}

@Component({
  selector: 'doc-form-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class FormBasicExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-basic-alt-example',
  templateUrl: './snippets/basic-alt.sample.html',
  standalone: false
})
export class FormBasicAltExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-user-input-example',
  templateUrl: './snippets/user-input.sample.html',
  standalone: false
})
export class FormUserInputExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-fields-example',
  templateUrl: './snippets/fields.sample.html',
  standalone: false
})
export class FormFieldsExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-fields-width-example',
  templateUrl: './snippets/fields-width.sample.html',
  standalone: false
})
export class FormFieldsWidthExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-fields-inline-example',
  templateUrl: './snippets/fields-inline.sample.html',
  standalone: false
})
export class FormFieldsInlineExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-text-area-example',
  templateUrl: './snippets/text-area.sample.html',
  standalone: false
})
export class FormTextAreaExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-checkbox-example',
  templateUrl: './snippets/checkbox.sample.html',
  standalone: false
})
export class FormCheckboxExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-radio-example',
  templateUrl: './snippets/radio.sample.html',
  standalone: false
})
export class FormRadioExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-dropdown-example',
  templateUrl: './snippets/dropdown.sample.html',
  standalone: false
})
export class FormDropdownExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-dropdown-alt-example',
  templateUrl: './snippets/dropdown-alt.sample.html',
  standalone: false
})
export class FormDropdownAltExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-multiple-select-example',
  templateUrl: './snippets/multiple-select.sample.html',
  standalone: false
})
export class FormMultipleSelectExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-html-select-example',
  templateUrl: './snippets/html-select.sample.html',
  standalone: false
})
export class FormHtmlSelectExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-message-example',
  templateUrl: './snippets/message.sample.html',
  standalone: false
})
export class FormMessageExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-loading-example',
  templateUrl: './snippets/loading.sample.html',
  standalone: false
})
export class FormLoadingExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-success-example',
  templateUrl: './snippets/success.sample.html',
  standalone: false
})
export class FormSuccessExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-error-example',
  templateUrl: './snippets/error.sample.html',
  standalone: false
})
export class FormErrorExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-warning-example',
  templateUrl: './snippets/warning.sample.html',
  standalone: false
})
export class FormWarningExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-field-error-example',
  templateUrl: './snippets/field-error.sample.html',
  standalone: false
})
export class FormFieldErrorExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class FormDisabledExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-read-only-example',
  templateUrl: './snippets/read-only.sample.html',
  standalone: false
})
export class FormReadOnlyExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-size-mini-example',
  templateUrl: './snippets/size-mini.sample.html',
  standalone: false
})
export class FormSizeMiniExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-size-tiny-example',
  templateUrl: './snippets/size-tiny.sample.html',
  standalone: false
})
export class FormSizeTinyExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-size-small-example',
  templateUrl: './snippets/size-small.sample.html',
  standalone: false
})
export class FormSizeSmallExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-size-large-example',
  templateUrl: './snippets/size-large.sample.html',
  standalone: false
})
export class FormSizeLargeExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-size-big-example',
  templateUrl: './snippets/size-big.sample.html',
  standalone: false
})
export class FormSizeBigExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-size-huge-example',
  templateUrl: './snippets/size-huge.sample.html',
  standalone: false
})
export class FormSizeHugeExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-size-massive-example',
  templateUrl: './snippets/size-massive.sample.html',
  standalone: false
})
export class FormSizeMassiveExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-equal-width-example',
  templateUrl: './snippets/equal-width.sample.html',
  standalone: false
})
export class FormEqualWidthExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  standalone: false
})
export class FormInvertedExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-inline-example',
  templateUrl: './snippets/inline.sample.html',
  standalone: false
})
export class FormInlineExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-width-example',
  templateUrl: './snippets/width.sample.html',
  standalone: false
})
export class FormWidthExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-required-example',
  templateUrl: './snippets/required.sample.html',
  standalone: false
})
export class FormRequiredExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-evenly-divided-example',
  templateUrl: './snippets/evenly-divided.sample.html',
  standalone: false
})
export class FormEvenlyDividedExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-grouped-example',
  templateUrl: './snippets/grouped.sample.html',
  standalone: false
})
export class FormGroupedExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-equal-width-group-example',
  templateUrl: './snippets/equal-width-group.sample.html',
  standalone: false
})
export class FormEqualWidthGroupExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-inline-group-example',
  templateUrl: './snippets/inline-group.sample.html',
  standalone: false
})
export class FormInlineGroupExampleComponent extends FormSampleState {
}

@Component({
  selector: 'doc-form-inline-group-alt-example',
  templateUrl: './snippets/inline-group-alt.sample.html',
  standalone: false
})
export class FormInlineGroupAltExampleComponent extends FormSampleState {
}
export const FORM_EXAMPLES = [
  FormBasicExampleComponent,
  FormBasicAltExampleComponent,
  FormUserInputExampleComponent,
  FormFieldsExampleComponent,
  FormFieldsWidthExampleComponent,
  FormFieldsInlineExampleComponent,
  FormTextAreaExampleComponent,
  FormCheckboxExampleComponent,
  FormRadioExampleComponent,
  FormDropdownExampleComponent,
  FormDropdownAltExampleComponent,
  FormMultipleSelectExampleComponent,
  FormHtmlSelectExampleComponent,
  FormMessageExampleComponent,
  FormLoadingExampleComponent,
  FormSuccessExampleComponent,
  FormErrorExampleComponent,
  FormWarningExampleComponent,
  FormFieldErrorExampleComponent,
  FormDisabledExampleComponent,
  FormReadOnlyExampleComponent,
  FormSizeMiniExampleComponent,
  FormSizeTinyExampleComponent,
  FormSizeSmallExampleComponent,
  FormSizeLargeExampleComponent,
  FormSizeBigExampleComponent,
  FormSizeHugeExampleComponent,
  FormSizeMassiveExampleComponent,
  FormEqualWidthExampleComponent,
  FormInvertedExampleComponent,
  FormInlineExampleComponent,
  FormWidthExampleComponent,
  FormRequiredExampleComponent,
  FormEvenlyDividedExampleComponent,
  FormGroupedExampleComponent,
  FormEqualWidthGroupExampleComponent,
  FormInlineGroupExampleComponent,
  FormInlineGroupAltExampleComponent,
];
