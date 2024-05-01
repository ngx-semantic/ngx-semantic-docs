import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-checkbox',
  templateUrl: 'checkbox.page.html'
})
export class CheckboxPage {
  inlineRadioValue: string;
  groupedRadioValue: string;

  snippetStandard =`
  <sui-checkbox>
    Make my profile visible
  </sui-checkbox>`;

  snippetBasic =`
  <sui-checkbox
      suiType="radio">
    Radio choice
  </sui-checkbox>`;

  snippetInlineRadio =`
  <div sui-form>
    <div suiFormFields suiInline>
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

  snippetGroupedRadio =`
  <div sui-form>
    <div suiFormFields suiGrouped>
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

  constructor(title: Title) {
    title.setTitle('Checkbox | Ngx Semantic');
  }
}
