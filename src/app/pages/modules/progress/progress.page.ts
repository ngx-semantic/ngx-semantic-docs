import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-progress',
  templateUrl: 'progress.page.html'
})
export class ProgressPage {
  snippetStandard = ``;

  standardValue = 31;
  indicatingValue = 40;

  constructor(title: Title) {
    title.setTitle('Progress | Ngx Semantic');
  }

  addToStandard(value: number) {
    let computedValue = this.standardValue + value;

    if (computedValue > 100) {
      computedValue = 100;
    } else if (computedValue < 0) {
      computedValue = 0;
    }

    this.standardValue = computedValue;
  }
}
