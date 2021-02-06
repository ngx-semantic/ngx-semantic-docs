import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetColored = `
  <div class="ui segment">
    <h4 sui-header suiColour="red" suiInverted>Red</h4>
    <h4 sui-header suiColour="orange" suiInverted>Orange</h4>
    <h4 sui-header suiColour="yellow" suiInverted>Yellow</h4>
    <h4 sui-header suiColour="olive" suiInverted>Olive</h4>
  </div>`;

  snippetInverted = `
  <div class="ui inverted segment">
    <h4 sui-header suiColour="teal" suiInverted>Teal</h4>
    <h4 sui-header suiColour="blue" suiInverted>Blue</h4>
    <h4 sui-header suiColour="purple" suiInverted>Purple</h4>
    <h4 sui-header suiColour="violet" suiInverted>Violet</h4>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Headers | Ngx Semantic');
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
