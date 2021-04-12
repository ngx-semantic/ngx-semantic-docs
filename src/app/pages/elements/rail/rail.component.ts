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
  snippetStdRail = `
  <div sui-rail suiLocation="left" suiDividing>
    <div class="ui segment">
      Left Rail Content
    </div>
  </div>
  <div sui-rail suiLocation="right" suiDividing>
    <div class="ui segment">
      Right Rail Content
    </div>
  </div>
  `;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Rail | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
