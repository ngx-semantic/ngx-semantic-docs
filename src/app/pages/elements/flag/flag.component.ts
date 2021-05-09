import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-flags',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements AfterViewChecked {
  snippetFlag = `
  <i sui-flag suiCountry="ae"></i>
  <i sui-flag suiCountry="nigeria"></i>
  <i sui-flag suiCountry="burkina faso"></i>
  <i sui-flag suiCountry="czech republic"></i>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Flag | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
