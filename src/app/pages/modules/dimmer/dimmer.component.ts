import { AfterViewChecked, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HighlightService } from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-dimmer',
  templateUrl: './dimmer.component.html',
  styles: [ `
      button {
          margin-bottom: 1.2rem !important;
      }
  ` ]
})
export class DimmerComponent implements AfterViewChecked {
  simpleDimmerVisible = false;
  contentDimmerVisible = false;
  pageDimmerVisible = false;
  blurringDimmerVisible = false;
  blurringDInvertedDimmerVisible = false;
  topAlignmentDimmerVisible = false;
  bottomAlignmentDimmerVisible = false;
  invertedDimmerVisible = false;

  snippetSimple = `
  <div sui-segment
       sui-dimmer
       [(dimmed)]="dimmerVisible">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  snippetSharedTs = `
  dimmerVisible: boolean = false;`;

  snippetContent = `
  <div sui-segment
       sui-dimmer
       [(dimmed)]="dimmerVisible">
    <doc-wireframe type="short-paragraph"></doc-wireframe>

    <ng-template suiDimmerContent>
      <h2 sui-header
          suiInverted>
        <i sui-icon
           suiIconType="heart"></i>
        Dimmed Message!
      </h2>
    </ng-template>
  </div>`;

  snippetPage = `
  <div sui-dimmer
       suiDimmerFullPage
       [(dimmed)]="dimmerVisible">
    <ng-template suiDimmerContent>
      <h2 sui-header
          suiIcon
          suiInverted>
        <i sui-icon
           suiIconType="mail"></i>
        Dimmed Message
      </h2>
      <div suiSubHeader>Dimmer sub-header</div>
    </ng-template>
  </div>`;

  snippetActive = `
  <div sui-segment
       sui-dimmer
       dimmed>
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  snippetDisabled = `
  <<div sui-segment
       sui-dimmer
       disabled>
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  snippetBlurring = `
  <div sui-segment
       sui-dimmer
       suiDimmerBlurring
       [(dimmed)]="dimmerVisible">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  snippetBlurringInverted = `
  <div sui-segment
       sui-dimmer
       suiDimmerBlurring
       suiDimmerInverted
       [(dimmed)]="dimmerVisible">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  snippetTopAligned = `
  <div sui-segment
       sui-dimmer
       suiDimmerAlignment="top"
       [(dimmed)]="dimmerVisible">
    <doc-wireframe type="short-paragraph"></doc-wireframe>

    <ng-template suiDimmerContent>
      <h2 sui-header
          suiInverted>
        Title
      </h2>
      <div sui-button
           suiEmphasis="primary">Add</div>
      <div sui-button>View</div>
    </ng-template>
  </div>`;

  snippetBottomAligned = `
  <div sui-segment
       sui-dimmer
       suiDimmerAlignment="top"
       [(dimmed)]="dimmerVisible">
    <doc-wireframe type="short-paragraph"></doc-wireframe>

    <ng-template suiDimmerContent>
      <h2 sui-header
          suiInverted>
        Title
      </h2>
      <div sui-button
           suiEmphasis="primary">Add</div>
      <div sui-button>View</div>
    </ng-template>
  </div>`;

  snippetInverted = `
  <div sui-segment
       sui-dimmer
       suiDimmerInverted
       [(dimmed)]="dimmerVisible">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Dimmer | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
