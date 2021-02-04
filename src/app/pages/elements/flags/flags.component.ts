import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements AfterViewChecked {
  // isDefinitionsActive = true;
  // isApiActive: boolean;
  isDefinitionsActive:boolean;
  isApiActive = true;

  snippetFlag = `
      <i sui-flag suiCountry="ae"></i>
      <i sui-flag suiCountry="nigeria"></i>
      <i sui-flag suiCountry="burkina faso"></i>
      <i sui-flag suiCountry="czech republic"></i>
  `;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Flags | Ngx Semantic');
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
