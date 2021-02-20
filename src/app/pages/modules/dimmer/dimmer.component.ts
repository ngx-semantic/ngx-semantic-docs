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

  snippetSimpleTs = `
  dimmerVisible: boolean = false;`;

  snippetContent = `
  <div sui-segment
       sui-dimmer
       [(dimmed)]="contentDimmerVisible">
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

  snippetContentTs = `
  dimmerVisible: boolean = false;`;

  snippetPage = `
  <div sui-dimmer
       suiDimmerFullPage
       [(dimmed)]="pageDimmerVisible">
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

  snippetPageTs = `
  dimmerVisible: boolean = false;`;

  snippetActive = `
  <div sui-segment
       sui-dimmer
       [dimmed]="true">
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
