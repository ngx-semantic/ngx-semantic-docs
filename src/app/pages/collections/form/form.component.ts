import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetBasicAltSrc from './snippets/basic-alt.sample.html' with { loader: 'text' };
import snippetUserInputSrc from './snippets/user-input.sample.html' with { loader: 'text' };
import snippetFieldsSrc from './snippets/fields.sample.html' with { loader: 'text' };
import snippetFieldsWidthSrc from './snippets/fields-width.sample.html' with { loader: 'text' };
import snippetFieldsInlineSrc from './snippets/fields-inline.sample.html' with { loader: 'text' };
import snippetTextAreaSrc from './snippets/text-area.sample.html' with { loader: 'text' };
import snippetCheckboxSrc from './snippets/checkbox.sample.html' with { loader: 'text' };
import snippetRadioSrc from './snippets/radio.sample.html' with { loader: 'text' };
import snippetDropdownSrc from './snippets/dropdown.sample.html' with { loader: 'text' };
import snippetDropdownAltSrc from './snippets/dropdown-alt.sample.html' with { loader: 'text' };
import snippetMultipleSelectSrc from './snippets/multiple-select.sample.html' with { loader: 'text' };
import snippetHtmlSelectSrc from './snippets/html-select.sample.html' with { loader: 'text' };
import snippetMessageSrc from './snippets/message.sample.html' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetSuccessSrc from './snippets/success.sample.html' with { loader: 'text' };
import snippetErrorSrc from './snippets/error.sample.html' with { loader: 'text' };
import snippetWarningSrc from './snippets/warning.sample.html' with { loader: 'text' };
import snippetFieldErrorSrc from './snippets/field-error.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetReadOnlySrc from './snippets/read-only.sample.html' with { loader: 'text' };
import snippetSizeMiniSrc from './snippets/size-mini.sample.html' with { loader: 'text' };
import snippetSizeTinySrc from './snippets/size-tiny.sample.html' with { loader: 'text' };
import snippetSizeSmallSrc from './snippets/size-small.sample.html' with { loader: 'text' };
import snippetSizeLargeSrc from './snippets/size-large.sample.html' with { loader: 'text' };
import snippetSizeBigSrc from './snippets/size-big.sample.html' with { loader: 'text' };
import snippetSizeHugeSrc from './snippets/size-huge.sample.html' with { loader: 'text' };
import snippetSizeMassiveSrc from './snippets/size-massive.sample.html' with { loader: 'text' };
import snippetEqualWidthSrc from './snippets/equal-width.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetInlineSrc from './snippets/inline.sample.html' with { loader: 'text' };
import snippetWidthSrc from './snippets/width.sample.html' with { loader: 'text' };
import snippetRequiredSrc from './snippets/required.sample.html' with { loader: 'text' };
import snippetEvenlyDividedSrc from './snippets/evenly-divided.sample.html' with { loader: 'text' };
import snippetGroupedSrc from './snippets/grouped.sample.html' with { loader: 'text' };
import snippetEqualWidthGroupSrc from './snippets/equal-width-group.sample.html' with { loader: 'text' };
import snippetInlineGroupSrc from './snippets/inline-group.sample.html' with { loader: 'text' };
import snippetInlineGroupAltSrc from './snippets/inline-group-alt.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-form',
    templateUrl: './form.component.html',
    standalone: false
})
export class FormComponent {
  snippetBasic = snippetBasicSrc;
  snippetBasicAlt = snippetBasicAltSrc;
  snippetUserInput = snippetUserInputSrc;
  snippetFields = snippetFieldsSrc;
  snippetFieldsWidth = snippetFieldsWidthSrc;
  snippetFieldsInline = snippetFieldsInlineSrc;
  snippetTextArea = snippetTextAreaSrc;
  snippetCheckbox = snippetCheckboxSrc;
  snippetRadio = snippetRadioSrc;
  snippetDropdown = snippetDropdownSrc;
  snippetDropdownAlt = snippetDropdownAltSrc;
  snippetMultipleSelect = snippetMultipleSelectSrc;
  snippetHtmlSelect = snippetHtmlSelectSrc;
  snippetMessage = snippetMessageSrc;
  snippetLoading = snippetLoadingSrc;
  snippetSuccess = snippetSuccessSrc;
  snippetError = snippetErrorSrc;
  snippetWarning = snippetWarningSrc;
  snippetFieldError = snippetFieldErrorSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetReadOnly = snippetReadOnlySrc;
  snippetSizeMini = snippetSizeMiniSrc;
  snippetSizeTiny = snippetSizeTinySrc;
  snippetSizeSmall = snippetSizeSmallSrc;
  snippetSizeLarge = snippetSizeLargeSrc;
  snippetSizeBig = snippetSizeBigSrc;
  snippetSizeHuge = snippetSizeHugeSrc;
  snippetSizeMassive = snippetSizeMassiveSrc;
  snippetEqualWidth = snippetEqualWidthSrc;
  snippetInverted = snippetInvertedSrc;
  snippetInline = snippetInlineSrc;
  snippetWidth = snippetWidthSrc;
  snippetRequired = snippetRequiredSrc;
  snippetEvenlyDivided = snippetEvenlyDividedSrc;
  snippetGrouped = snippetGroupedSrc;
  snippetEqualWidthGroup = snippetEqualWidthGroupSrc;
  snippetInlineGroup = snippetInlineGroupSrc;
  snippetInlineGroupAlt = snippetInlineGroupAltSrc;


  states = [ { text: 'Alabama', value: 'al' } ];
  countries = [ { text: 'Albania', value: 'al', flag: 'al' }, { text: 'Nigeria', value: 'ng', flag: 'ng' } ];
  months = [ { text: 'January', value: 'jan' } ];
  cards = [ { text: 'Visa', value: 'visa' } ];
  contacts = [ {
    text: 'Justen Kitsune',
    image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg' }
  } ];
  gender = [ { text: 'Male' }, { text: 'Female' } ];

  constructor(title: Title) {
    title.setTitle('Form | Ngx Semantic');
  }
}
