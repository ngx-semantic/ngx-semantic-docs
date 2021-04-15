import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements AfterViewChecked {

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Tab | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
