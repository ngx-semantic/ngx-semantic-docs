import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-dimmer',
  templateUrl: './dimmer.component.html',
  styles: [`
    button {
      margin-bottom: 1.2rem !important;
    }
  `]
})
export class DimmerComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  simpleDimmerVisible = false;
  contentDimmerVisible = false
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
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderImage suiHeader>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>
  </div>`;

  snippetSharedTs = `
  dimmerVisible: boolean = false;`;

  snippetContent = `
  <div sui-segment
       sui-dimmer
       [(dimmed)]="dimmerVisible">
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderImage suiHeader>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>

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
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>
  </div>`;

  snippetDisabled = `
  <<div sui-segment
       sui-dimmer
       disabled>
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>
  </div>`;

  snippetBlurring = `
  <div sui-segment
       sui-dimmer
       suiDimmerBlurring
       [(dimmed)]="dimmerVisible">
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>
  </div>`;

  snippetBlurringInverted = `
  <div sui-segment
       sui-dimmer
       suiDimmerBlurring
       suiDimmerInverted
       [(dimmed)]="dimmerVisible">
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>
  </div>`;

  snippetTopAligned = `
  <div sui-segment
       sui-dimmer
       suiDimmerAlignment="top"
       [(dimmed)]="dimmerVisible">
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>

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
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>

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
    <div sui-placeholder
         suiFluid>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Dimmer | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }

  tabChanged(payload: string): void {
    if (payload === 'api') {
      this.isApiActive = true;
      this.isDefinitionsActive = false;
    }

    if (payload === 'definitions') {
      this.isApiActive = false;
      this.isDefinitionsActive = true;
    }
  }
}
