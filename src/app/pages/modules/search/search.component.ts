import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-search',
  templateUrl: './search.component.html'
})
export class SearchComponent extends BasePageComponent {
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

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Search | Ngx Semantic');
  }

  public async searchText(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/${query}`;
    const response = await fetch(queryUrl);
    const json = await response.json();
    return json.results;
  }
}
