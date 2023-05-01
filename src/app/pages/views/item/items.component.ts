import {AfterViewChecked, Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetBasic = `
  <div sui-statistic>
    <div suiStatValue>5,550</div>
    <div suiStatLabel>Downloads</div>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Item | Ngx Semantic');
  }

  ngAfterViewChecked(): void {
    this.highlighter.highlightAll();
  }
}
