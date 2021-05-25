import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-search',
  templateUrl: './search.component.html'
})
export class SearchComponent extends BasePageComponent {
  blankOptions = [];
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
  categoryContent = [
    { category: 'South America', title: 'Brazil' },
    { category: 'South America', title: 'Peru' },
    { category: 'North America', title: 'Canada' },
    { category: 'Asia', title: 'South Korea' },
    { category: 'Asia', title: 'Japan' },
    { category: 'Asia', title: 'China' },
    { category: 'Europe', title: 'Denmark' },
    { category: 'Europe', title: 'England' },
    { category: 'Europe', title: 'France' },
    { category: 'Europe', title: 'Germany' },
    { category: 'Africa', title: 'Ethiopia' },
    { category: 'Africa', title: 'Nigeria' },
    { category: 'Africa', title: 'Zimbabwe' }
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

  snippetLocalCategorySearch = `
  <sui-search
      suiShowIcon
      suiPlaceholder="Search countries..."
      [suiOptions]="categoryContent">
  </sui-search>`;

  snippetLocalCategorySearchTs = `
  categoryContent = [
    { category: 'South America', title: 'Brazil' },
    { category: 'South America', title: 'Peru' },
    { category: 'North America', title: 'Canada' },
    { category: 'Asia', title: 'South Korea' },
    { category: 'Asia', title: 'Japan' },
    { category: 'Asia', title: 'China' },
    { category: 'Europe', title: 'Denmark' },
    { category: 'Europe', title: 'England' },
    { category: 'Europe', title: 'France' },
    { category: 'Europe', title: 'Germany' },
    { category: 'Africa', title: 'Ethiopia' },
    { category: 'Africa', title: 'Nigeria' },
    { category: 'Africa', title: 'Zimbabwe' }
  ];`;

  snippetLoading = `
  <sui-search
      suiLoading
      suiPlaceholder="Search...">
  </sui-search>`;

  snippetDisabled = `
  <sui-search
      disabled
      suiShowIcon
      suiPlaceholder="Search animals...">
  </sui-search>`;

  snippetFluid = `
  <sui-search
      disabled
      suiFluid
      suiShowIcon
      suiPlaceholder="Search animals...">
  </sui-search>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Search | Ngx Semantic');
  }

  public async searchText(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/${query}`;
    return this.callUrl(queryUrl);
  }

  public async searchCategories(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/category/${query}`;
    return this.callUrl(queryUrl);
  }

  private async callUrl(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json.results;
    } catch (err) {
      return [];
    }
  }
}
