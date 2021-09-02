import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";
import {BasePageComponent} from "../../../shared/components/base-page.component";

@Component({
  selector: 'doc-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent extends BasePageComponent {
  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Grid | Ngx Semantic');
  }
}
