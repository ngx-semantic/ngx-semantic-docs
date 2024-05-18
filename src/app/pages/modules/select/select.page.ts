import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-select',
  templateUrl: 'select.page.html'
})
export class SelectPage {
  constructor(title: Title) {
    title.setTitle('Select | Ngx Semantic');
  }
}
