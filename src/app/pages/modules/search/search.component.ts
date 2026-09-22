import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetBasicAltSrc from './snippets/basic-alt.sample.html' with { loader: 'text' };
import snippetCategorySrc from './snippets/category.sample.html' with { loader: 'text' };
import snippetLocalSearchSrc from './snippets/local-search.sample.html' with { loader: 'text' };
import snippetLocalSearchTsSrc from './snippets/local-search.sample.txt' with { loader: 'text' };
import snippetLocalCategorySearchSrc from './snippets/local-category-search.sample.html' with { loader: 'text' };
import snippetLocalCategorySearchTsSrc from './snippets/local-category-search.sample.txt' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetAlignedSrc from './snippets/aligned.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-search',
    templateUrl: './search.component.html',
    standalone: false
})
export class SearchComponent {
  snippetBasic = snippetBasicSrc;
  snippetBasicAlt = snippetBasicAltSrc;
  snippetCategory = snippetCategorySrc;
  snippetLocalSearch = snippetLocalSearchSrc;
  snippetLocalSearchTs = snippetLocalSearchTsSrc;
  snippetLocalCategorySearch = snippetLocalCategorySearchSrc;
  snippetLocalCategorySearchTs = snippetLocalCategorySearchTsSrc;
  snippetLoading = snippetLoadingSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetFluid = snippetFluidSrc;
  snippetAligned = snippetAlignedSrc;

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












  constructor(title: Title) {
    title.setTitle('Search | Ngx Semantic');
  }

  public async searchText(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/${query}`;
    return SearchComponent.callUrl(queryUrl);
  }

  public async searchCategories(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/category/${query}`;
    return SearchComponent.callUrl(queryUrl);
  }

  private static async callUrl(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json.results;
    } catch (err) {
      return [];
    }
  }
}
