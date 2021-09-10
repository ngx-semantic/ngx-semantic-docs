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
  <div sui-grid>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
    <div suiGridColumn></div>
  </div>`;

  snippetDivided = `
  <div sui-grid
       suiWidth="three"
       suiDivided="divided">
    <div suiGridRow>
      <div suiGridColumn></div>
      <div suiGridColumn></div>
      <div suiGridColumn></div>
    </div>
    <div suiGridRow>
      <div suiGridColumn></div>
      <div suiGridColumn></div>
      <div suiGridColumn></div>
    </div>
  </div>`;

  snippetVerticallyDivided = `
  <div sui-grid
       suiDivided="vertically divided">
    <div suiGridRow
         suiWidth="two">
      <div suiGridColumn></div>
      <div suiGridColumn></div>
    </div>
    <div suiGridRow
         suiWidth="three">
      <div suiGridColumn></div>
      <div suiGridColumn></div>
      <div suiGridColumn></div>
    </div>
  </div>`;

  snippetCelled = `
  <div sui-grid
       suiCelled="celled">
    <div suiGridRow>
      <div suiGridColumn suiWidth="three"></div>
      <div suiGridColumn suiWidth="thirteen"></div>
    </div>
    <div suiGridRow>
      <div suiGridColumn suiWidth="three"></div>
      <div suiGridColumn suiWidth="ten"></div>
      <div suiGridColumn suiWidth="three"></div>
    </div>
  </div>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Grid | Ngx Semantic');
  }
}
