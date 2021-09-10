import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";
import {BasePageComponent} from "../../../shared/components/base-page.component";

@Component({
  selector: 'doc-grid',
  templateUrl: './grid.component.html',
  styles: [`
    [suigridcolumn]::after {
      background-color: rgba(86, 61, 124, .1);
      -webkit-box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
      box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
      content: "";
      display: block;
      min-height: 50px;
    }
  `]
})
export class GridComponent extends BasePageComponent {
  snippetBasic = `
  `;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Grid | Ngx Semantic');
  }
}
