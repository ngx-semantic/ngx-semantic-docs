import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-flags',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent extends BasePageComponent {
  snippetFlag = `
  <i sui-flag suiCountry="ae"></i>
  <i sui-flag suiCountry="nigeria"></i>
  <i sui-flag suiCountry="burkina faso"></i>
  <i sui-flag suiCountry="czech republic"></i>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Flag | Ngx Semantic');
  }
}
