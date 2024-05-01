import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-checkbox',
  templateUrl: 'checkbox.page.html'
})
export class CheckboxPage {
  constructor(title: Title) {
    title.setTitle('Checkbox | Ngx Semantic');
  }
}
