import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetSearchSrc from './snippets/search.sample.html' with { loader: 'text' };
import snippetMultipleSrc from './snippets/multiple.sample.html' with { loader: 'text' };
import snippetMultipleSearchSrc from './snippets/multiple-search.sample.html' with { loader: 'text' };
import snippetFlagSrc from './snippets/flag.sample.html' with { loader: 'text' };
import snippetImagesSrc from './snippets/images.sample.html' with { loader: 'text' };
import snippetTwoWaySrc from './snippets/two-way.sample.html' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetErrorSrc from './snippets/error.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetScrollingSrc from './snippets/scrolling.sample.html' with { loader: 'text' };
import snippetCompactSrc from './snippets/compact.sample.html' with { loader: 'text' };
import snippetStandardTsSrc from './snippets/standard.sample.txt' with { loader: 'text' };
import snippetSearchTsSrc from './snippets/search.sample.txt' with { loader: 'text' };
import snippetMultipleTsSrc from './snippets/multiple.sample.txt' with { loader: 'text' };
import snippetFlagsTsSrc from './snippets/flag.sample.txt' with { loader: 'text' };
import snippetImagesTsSrc from './snippets/images.sample.txt' with { loader: 'text' };
import snippetTwoWayTsSrc from './snippets/two-way.sample.txt' with { loader: 'text' };
import snippetStatesTsSrc from './snippets/loading.sample.txt' with { loader: 'text' };
import snippetScrollingTsSrc from './snippets/scrolling.sample.txt' with { loader: 'text' };
import snippetCompactTsSrc from './snippets/compact.sample.txt' with { loader: 'text' };

@Component({
  selector: 'doc-select',
  templateUrl: 'select.page.html',
  standalone: false
})
export class SelectPage {
  snippetStandard = snippetStandardSrc;
  snippetFluid = snippetFluidSrc;
  snippetSearch = snippetSearchSrc;
  snippetMultiple = snippetMultipleSrc;
  snippetMultipleSearch = snippetMultipleSearchSrc;
  snippetFlag = snippetFlagSrc;
  snippetImages = snippetImagesSrc;
  snippetTwoWay = snippetTwoWaySrc;
  snippetLoading = snippetLoadingSrc;
  snippetError = snippetErrorSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetScrolling = snippetScrollingSrc;
  snippetCompact = snippetCompactSrc;
  snippetStandardTs = snippetStandardTsSrc;
  snippetSearchTs = snippetSearchTsSrc;
  snippetMultipleTs = snippetMultipleTsSrc;
  snippetFlagsTs = snippetFlagsTsSrc;
  snippetImagesTs = snippetImagesTsSrc;
  snippetTwoWayTs = snippetTwoWayTsSrc;
  snippetStatesTs = snippetStatesTsSrc;
  snippetScrollingTs = snippetScrollingTsSrc;
  snippetCompactTs = snippetCompactTsSrc;

  constructor(title: Title) {
    title.setTitle('Select | Ngx Semantic');
  }
}
