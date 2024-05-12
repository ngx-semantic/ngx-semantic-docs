import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-checkbox',
  templateUrl: 'checkbox.page.html'
})
export class CheckboxPage {
  inlineRadioValue: string;
  groupedRadioValue: string;
  groupedSliderValue: string;

  snippetStandard = `
  <sui-checkbox>
    Make my profile visible
  </sui-checkbox>`;

  snippetBasic = `
  <sui-checkbox
      suiType="radio">
    Radio choice
  </sui-checkbox>`;

  snippetInlineRadio = `
  <div sui-form>
    <div suiFormFields suiInline>
      <label>How often do you use checkboxes?</label>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="once-a-week"
            [(ngModel)]="inlineRadioValue">
          Once a week
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="2-3-a-week"
            [(ngModel)]="inlineRadioValue">
          2-3 times a week
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="once-a-day"
            [(ngModel)]="inlineRadioValue">
          Once a day
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="twice-a-day"
            [(ngModel)]="inlineRadioValue">
          Twice a day
        </sui-checkbox>
      </div>
    </div>
  </div>`;
  snippetInlineRadioTs = `
  inlineRadioValue: string = null;`;

  snippetGroupedRadio = `
  <div sui-form>
    <div suiFormFields suiGrouped>
      <label>How often do you use checkboxes?</label>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="once-a-week"
            [(ngModel)]="groupedRadioValue">
          Once a week
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="2-3-a-week"
            [(ngModel)]="groupedRadioValue">
          2-3 times a week
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="once-a-day"
            [(ngModel)]="groupedRadioValue">
          Once a day
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="radio"
            suiValue="twice-a-day"
            [(ngModel)]="groupedRadioValue">
          Twice a day
        </sui-checkbox>
      </div>
    </div>
  </div>`;
  snippetGroupedRadioTs = `
  groupedRadioValue: string = null;`;

  snippetGroupedSlider = `
  <div sui-form>
    <div suiFormFields suiGrouped>
      <label>Outbound Throughput</label>
      <div suiFormField>
        <sui-checkbox
            suiType="slider"
            suiValue="20mb"
            [(ngModel)]="groupedSliderValue">
          20 mbps max
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="slider"
            suiValue="10mb"
            [(ngModel)]="groupedSliderValue">
          10 mbps max
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="slider"
            suiValue="5mb"
            [(ngModel)]="groupedSliderValue">
          5 mbps max
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox
            suiType="slider"
            suiValue="~mb"
            [(ngModel)]="groupedSliderValue">
          Unmetered
        </sui-checkbox>
      </div>
    </div>
  </div>`;
  snippetGroupedSliderTs = `
  groupedSliderValue: string = null;`;

  snippetToggle = `
  <sui-checkbox
      suiType="toggle">
    Subscribe to weekly newsletter
  </sui-checkbox>`;

  snippetReadOnly = `
  <sui-checkbox
      suiReadOnly>
    Read Only
  </sui-checkbox>`;

  snippetChecked = `
  <sui-checkbox
      [checked]="true">
    Active
  </sui-checkbox>`;

  snippetIndeterminate = `
  <sui-checkbox>
    Indeterminate
  </sui-checkbox>`;

  snippetDisabled = `
  <div>
    <sui-checkbox disabled>
      Disabled
    </sui-checkbox>
  </div>
  <div>
    <sui-checkbox disabled suiType="toggle">
      Disabled
    </sui-checkbox>
  </div>`;

  snippetFitted = `
  <div sui-segment suiCompact suiFloated="left floated">
    <sui-checkbox suiFitted></sui-checkbox>
  </div>
  <div sui-segment suiCompact suiFloated="left floated">
    <sui-checkbox suiFitted suiType="slider"></sui-checkbox>
  </div>
  <div sui-segment suiCompact suiFloated="left floated">
    <sui-checkbox suiFitted suiType="toggle"></sui-checkbox>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Checkbox | Ngx Semantic');
  }
}
