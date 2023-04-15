import {AfterViewChecked, Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements AfterViewChecked {
  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Item | Ngx Semantic');
  }

  ngAfterViewChecked(): void {
    this.highlighter.highlightAll();
  }
}
