import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandard from './snippets/standard.sample.html' with { loader: 'text' };
import snippetBasicRadio from './snippets/basic-radio.sample.html' with { loader: 'text' };
import snippetInlineRadio from './snippets/inline-radio.sample.html' with { loader: 'text' };
import snippetInlineRadioTs from './snippets/inline-radio.sample.txt' with { loader: 'text' };
import snippetGroupedRadio from './snippets/grouped-radio.sample.html' with { loader: 'text' };
import snippetGroupedRadioTs from './snippets/grouped-radio.sample.txt' with { loader: 'text' };
import snippetBasicSlider from './snippets/basic-slider.sample.html' with { loader: 'text' };
import snippetGroupedSlider from './snippets/grouped-slider.sample.html' with { loader: 'text' };
import snippetGroupedSliderTs from './snippets/grouped-slider.sample.txt' with { loader: 'text' };
import snippetToggle from './snippets/toggle.sample.html' with { loader: 'text' };
import snippetReadOnly from './snippets/read-only.sample.html' with { loader: 'text' };
import snippetChecked from './snippets/checked.sample.html' with { loader: 'text' };
import snippetIndeterminate from './snippets/indeterminate.sample.html' with { loader: 'text' };
import snippetDisabled from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetFitted from './snippets/fitted.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-checkbox',
    templateUrl: 'checkbox.page.html',
    standalone: false
})
export class CheckboxPage {
  snippetStandard = snippetStandard;
  snippetBasicRadio = snippetBasicRadio;
  snippetInlineRadio = snippetInlineRadio;
  snippetInlineRadioTs = snippetInlineRadioTs;
  snippetGroupedRadio = snippetGroupedRadio;
  snippetGroupedRadioTs = snippetGroupedRadioTs;
  snippetBasicSlider = snippetBasicSlider;
  snippetGroupedSlider = snippetGroupedSlider;
  snippetGroupedSliderTs = snippetGroupedSliderTs;
  snippetToggle = snippetToggle;
  snippetReadOnly = snippetReadOnly;
  snippetChecked = snippetChecked;
  snippetIndeterminate = snippetIndeterminate;
  snippetDisabled = snippetDisabled;
  snippetFitted = snippetFitted;

  constructor(title: Title) {
    title.setTitle('Checkbox | Ngx Semantic');
  }
}
