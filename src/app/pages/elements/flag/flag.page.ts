import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'doc-flags',
  templateUrl: './flag.page.html',
  styleUrls: ['./flag.page.scss']
})
export class FlagComponent {
  snippetFlag = `
  <i sui-flag suiCountry="ae"></i>
  <i sui-flag suiCountry="nigeria"></i>
  <i sui-flag suiCountry="burkina faso"></i>
  <i sui-flag suiCountry="czech republic"></i>`;

  constructor(title: Title) {
    title.setTitle('Flag | Ngx Semantic');
  }
}


