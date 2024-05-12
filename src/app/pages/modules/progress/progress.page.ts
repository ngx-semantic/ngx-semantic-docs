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

  snippetInverted = `
  <sui-progress
      suiInverted
      suiShowProgress
      [suiValue]="15">
    Uploading Files
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="success"
      [suiValue]="100">
    Success
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="warning"
      [suiValue]="100">
    Warning
  </sui-progress>
  <sui-progress
      suiInverted
      suiShowProgress
      suiState="error"
      [suiValue]="100">
    Error
  </sui-progress>`;

  snippetAttached = `
  <div sui-segment>
    <sui-progress
        suiAttached="top"
        [suiValue]="21">
    </sui-progress>
    <p>La la la la</p>
    <sui-progress
        suiAttached="bottom"
        [suiValue]="31">
    </sui-progress>
  </div>`;

  snippetCardAttached = `
  <div sui-card>
    <div suiCardImage>
      <img src="/assets/images/wireframes/image.png" />
    </div>
    <div suiCardContent>
      <a suiCardHeader>Project</a>
      <div suiCardMeta>
        <span class="date">Started in 2014</span>
      </div>
    </div>
    <div suiCardExtra>
      <a>
        <i sui-icon suiIconType="user"></i>
        22 Friends
      </a>
    </div>
    <sui-progress
        suiAttached="bottom"
        [suiValue]="31">
    </sui-progress>
  </div>`;

  snippetSize = `
  <sui-progress
      suiSize="tiny"
      [suiValue]="61">
    Tiny
  </sui-progress>
  <sui-progress
      suiSize="small"
      [suiValue]="21">
    Small
  </sui-progress>
  <sui-progress
      [suiValue]="41">
    Standard
  </sui-progress>
  <sui-progress
      suiSize="large"
      [suiValue]="5">
    Large
  </sui-progress>
  <sui-progress
      suiSize="big"
      [suiValue]="14">
    Big
  </sui-progress>`;

  snippetColour = `
  <sui-progress
      suiColour="red"
      [suiValue]="59">
  </sui-progress>
  <sui-progress
      suiColour="orange"
      [suiValue]="31">
  </sui-progress>
  <sui-progress
      suiColour="yellow"
      [suiValue]="48">
  </sui-progress>
  <sui-progress
      suiColour="olive"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiColour="green"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiColour="teal"
      [suiValue]="31">
  </sui-progress>
  <sui-progress
      suiColour="blue"
      [suiValue]="35">
  </sui-progress>
  <sui-progress
      suiColour="violet"
      [suiValue]="18">
  </sui-progress>
  <sui-progress
      suiColour="purple"
      [suiValue]="22">
  </sui-progress>
  <sui-progress
      suiColour="pink"
      [suiValue]="50">
  </sui-progress>
  <sui-progress
      suiColour="brown"
      [suiValue]="18">
  </sui-progress>
  <sui-progress
      suiColour="grey"
      [suiValue]="56">
  </sui-progress>
  <sui-progress
      suiColour="black"
      [suiValue]="45">
  </sui-progress>`;

  snippetInvertedColour = `
  <div sui-segment suiInverted>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="red"
        [suiValue]="59">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="orange"
        [suiValue]="31">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="yellow"
        [suiValue]="48">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="olive"
        [suiValue]="35">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="green"
        [suiValue]="35">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="teal"
        [suiValue]="31">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="blue"
        [suiValue]="35">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="violet"
        [suiValue]="18">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="purple"
        [suiValue]="22">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="pink"
        [suiValue]="50">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="brown"
        [suiValue]="18">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="grey"
        [suiValue]="56">
    </sui-progress>
    <sui-progress
        suiInverted
        suiShowProgress
        suiColour="black"
        [suiValue]="45">
    </sui-progress>
  </div>`;

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
