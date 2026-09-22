import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetPointingSrc from './snippets/pointing-menu.sample.html' with { loader: 'text' };
import snippetTextSrc from './snippets/text-menu.sample.html' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetPositionedSrc from './snippets/positioned.sample.html' with { loader: 'text' };
import snippetColouredSrc from './snippets/coloured.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-tab',
    templateUrl: './tab.component.html',
    styles: [`
    select {
        margin-bottom: 1rem;
    }
  `],
    standalone: false
})
export class TabComponent {
  snippetBasic = snippetBasicSrc;
  snippetPointing = snippetPointingSrc;
  snippetText = snippetTextSrc;
  snippetLoading = snippetLoadingSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetPositioned = snippetPositionedSrc;
  snippetColoured = snippetColouredSrc;

  isDefinitionsActive = true;
  isApiActive: boolean;

  colours = ['red', 'orange', 'green', 'blue', 'violet'];

  tabColour = 'blue';
  isTabDisabled = false;








  constructor(title: Title) {
    title.setTitle('Tab | Ngx Semantic');
  }
}
