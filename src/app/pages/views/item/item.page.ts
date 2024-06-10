import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-item',
  templateUrl: 'item.page.html'
})
export class ItemPage {
  constructor(title: Title) {
    title.setTitle('Item | Ngx Semantic');
  }
}
