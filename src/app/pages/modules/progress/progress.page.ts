import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-progress',
  templateUrl: 'progress.page.html'
})
export class ProgressPage {
  snippetStandard = `
  <sui-progress
      suiShowProgress
      [suiValue]="31">
    Uploading Files
  </sui-progress>`;

  snippetIndicating = `
  <sui-progress
      suiIndicating
      [suiValue]="indicatingValue">
    {{indicatingValue}}% Funded
  </sui-progress>`;

  snippetIndicatingTs = `
  indicatingValue = 40;`;

  snippetBar = `
  <sui-progress
      [suiValue]="28">
  </sui-progress>`;

  snippetProgress = `
  <sui-progress
      suiShowProgress
      [suiValue]="35">
  </sui-progress>`;

  snippetActive = `
  <sui-progress
      suiState="active"
      [suiValue]="51">
    Uploading Files
  </sui-progress>`;

  snippetSuccess = `
  <sui-progress
      suiState="success"
      [suiValue]="100">
    Everything worked, your file is all ready.
  </sui-progress>`;

  snippetWarning = `
  <sui-progress
      suiState="warning"
      [suiValue]="100">
    Your file didn't meet the minimum resolution requirements.
  </sui-progress>`;

  snippetError = `
  <sui-progress
      suiState="error"
      [suiValue]="100">
    There was an error.
  </sui-progress>`;

  snippetDisabled = `
  <sui-progress
      disabled
      [suiValue]="38">
  </sui-progress>`;

  standardValue = 31;
  indicatingValue = 40;

  constructor(title: Title) {
    title.setTitle('Progress | Ngx Semantic');
  }

  addToStandard(value: number): void {
    let computedValue = this.standardValue + value;

    if (computedValue > 100) {
      computedValue = 100;
    } else if (computedValue < 0) {
      computedValue = 0;
    }

    this.standardValue = computedValue;
  }

  addToIndicating(value: number): void {
    let computedValue = this.indicatingValue + value;

    if (computedValue > 100) {
      computedValue = 100;
    } else if (computedValue < 0) {
      computedValue = 0;
    }

    this.indicatingValue = computedValue;
  }
}
