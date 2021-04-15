import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetFlag = `
      <i sui-flag suiCountry="ae"></i>
      <i sui-flag suiCountry="nigeria"></i>
      <i sui-flag suiCountry="burkina faso"></i>
      <i sui-flag suiCountry="czech republic"></i>
  `;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Flag | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
