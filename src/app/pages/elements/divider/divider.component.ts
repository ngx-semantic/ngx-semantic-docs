import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetStandardSrc from './snippets/div-standard.sample.html' with { loader: 'text' };
import snippetVerticalSrc from './snippets/div-vertical.sample.html' with { loader: 'text' };
import snippetVerticalFormSrc from './snippets/div-vertical-form.sample.html' with { loader: 'text' };
import snippetHorizontalSrc from './snippets/div-horizontal.sample.html' with { loader: 'text' };
import snippetHorizontalTableSrc from './snippets/div-horizontal-table.sample.html' with { loader: 'text' };
import snippetDividerInvertedSrc from './snippets/div-inverted.sample.html' with { loader: 'text' };
import snippetDividerFittedSrc from './snippets/div-fitted.sample.html' with { loader: 'text' };
import snippetDividerHiddenSrc from './snippets/div-hidden.sample.html' with { loader: 'text' };
import snippetDividerSectionSrc from './snippets/div-section.sample.html' with { loader: 'text' };
import snippetDividerClearingSrc from './snippets/div-clearing.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-divider',
    templateUrl: './divider.component.html',
    styleUrls: ['./divider.component.scss'],
    standalone: false
})
export class DividerComponent {
  snippetStandard = snippetStandardSrc;
  snippetVertical = snippetVerticalSrc;
  snippetVerticalForm = snippetVerticalFormSrc;
  snippetHorizontal = snippetHorizontalSrc;
  snippetHorizontalTable = snippetHorizontalTableSrc;
  snippetDividerInverted = snippetDividerInvertedSrc;
  snippetDividerFitted = snippetDividerFittedSrc;
  snippetDividerHidden = snippetDividerHiddenSrc;
  snippetDividerSection = snippetDividerSectionSrc;
  snippetDividerClearing = snippetDividerClearingSrc;











  constructor(title: Title) {
    title.setTitle('Divider | Ngx Semantic');
  }
}
