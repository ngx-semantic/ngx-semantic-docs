import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements AfterViewChecked {
  options = [];

  snippetBasic = `
   <sui-search
     suiPlaceholder="Common passwords...">         
   </sui-search>`;

  snippetBasicAlt = `
  <sui-search
      suiShowIcon
      suiPlaceholder="Common passwords...">
  </sui-search>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Search | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
