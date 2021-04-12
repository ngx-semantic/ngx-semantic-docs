import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-rail',
  templateUrl: './rail.component.html',
  styleUrls: ['./rail.component.scss']
})
export class RailComponent implements AfterViewChecked {
  snippetBasic = ``;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Rail | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
