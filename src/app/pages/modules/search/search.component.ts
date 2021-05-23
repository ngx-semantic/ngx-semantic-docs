import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-search',
  templateUrl: './search.component.html'
})
export class SearchComponent extends BasePageComponent {
  countries = [
    { title: 'Andorra' },
    { title: 'United Arab Emirates' },
    { title: 'Afghanistan' },
    { title: 'Antigua' },
    { title: 'Anguilla' },
    { title: 'Albania' },
    { title: 'Armenia' },
    { title: 'Netherlands Antilles' },
    { title: 'Angola' },
    { title: 'Argentina' },
    { title: 'American Samoa' },
    { title: 'Austria' },
    { title: 'Australia' },
    { title: 'Aruba' },
    { title: 'Aland Islands' },
    { title: 'Azerbaijan' },
    { title: 'Bosnia' },
    { title: 'Barbados' },
    { title: 'Bangladesh' },
    { title: 'Belgium' },
    { title: 'Burkina Faso' },
    { title: 'Bulgaria' },
    { title: 'Bahrain' },
    { title: 'Burundi' }
  ];

  snippetBasic = `
   <sui-search
     suiPlaceholder="Common passwords...">         
   </sui-search>`;

  snippetBasicAlt = `
  <sui-search
      suiShowIcon
      suiPlaceholder="Common passwords...">
  </sui-search>`;

  snippetCategory = `
  <sui-search
      suiShowIcon
      suiPlaceholder="Common animals...">
  </sui-search>`;

  snippetLocalSearch = `
  <sui-search
      suiShowIcon
      suiPlaceholder="Search countries..."
      [suiOptions]="countries">
  </sui-search>`;

  snippetLocalSearchTs = `
  countries = [
    { title: 'Andorra' },
    { title: 'United Arab Emirates' },
    { title: 'Afghanistan' },
    { title: 'Antigua' },
    { title: 'Anguilla' },
    { title: 'Albania' },
    { title: 'Armenia' },
    { title: 'Netherlands Antilles' },
    { title: 'Angola' },
    { title: 'Argentina' },
    { title: 'American Samoa' },
    { title: 'Austria' },
    { title: 'Australia' },
    { title: 'Aruba' },
    { title: 'Aland Islands' },
    { title: 'Azerbaijan' },
    { title: 'Bosnia' },
    { title: 'Barbados' },
    { title: 'Bangladesh' },
    { title: 'Belgium' },
    { title: 'Burkina Faso' },
    { title: 'Bulgaria' },
    { title: 'Bahrain' },
    { title: 'Burundi' }
  ];`;

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

  public async searchCategories(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/category/${query}`;
    const response = await fetch(queryUrl);
    const json = await response.json();
    return json.results;
  }
}
