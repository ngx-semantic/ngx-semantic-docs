import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements AfterViewChecked {
  snippetIconDisabled = `
  <i sui-icon
     disabled
     suiIconType="users"></i>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Loaders | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
