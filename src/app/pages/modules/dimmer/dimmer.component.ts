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

  snippetDefault = `
  <div sui-segment
       sui-dimmer
       [(dimmed)]="simpleDimmerVisible">
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
