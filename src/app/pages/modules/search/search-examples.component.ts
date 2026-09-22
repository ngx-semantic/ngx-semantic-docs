import { Component } from '@angular/core';

export class SearchSampleState {
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

  public async searchText(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/${query}`;
    return SearchSampleState.callUrl(queryUrl);
  }

  public async searchCategories(query): Promise<Array<any>> {
    const queryUrl = `https://api.semantic-ui.com/search/category/${query}`;
    return SearchSampleState.callUrl(queryUrl);
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

@Component({
  selector: 'doc-search-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class SearchBasicExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-basic-alt-example',
  templateUrl: './snippets/basic-alt.sample.html',
  standalone: false
})
export class SearchBasicAltExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-category-example',
  templateUrl: './snippets/category.sample.html',
  standalone: false
})
export class SearchCategoryExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-local-search-example',
  templateUrl: './snippets/local-search.sample.html',
  standalone: false
})
export class SearchLocalSearchExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-local-category-search-example',
  templateUrl: './snippets/local-category-search.sample.html',
  standalone: false
})
export class SearchLocalCategorySearchExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-loading-example',
  templateUrl: './snippets/loading.sample.html',
  standalone: false
})
export class SearchLoadingExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class SearchDisabledExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-fluid-example',
  templateUrl: './snippets/fluid.sample.html',
  standalone: false
})
export class SearchFluidExampleComponent extends SearchSampleState {
}

@Component({
  selector: 'doc-search-aligned-example',
  templateUrl: './snippets/aligned.sample.html',
  standalone: false
})
export class SearchAlignedExampleComponent extends SearchSampleState {
}
export const SEARCH_EXAMPLES = [
  SearchBasicExampleComponent,
  SearchBasicAltExampleComponent,
  SearchCategoryExampleComponent,
  SearchLocalSearchExampleComponent,
  SearchLocalCategorySearchExampleComponent,
  SearchLoadingExampleComponent,
  SearchDisabledExampleComponent,
  SearchFluidExampleComponent,
  SearchAlignedExampleComponent,
];
