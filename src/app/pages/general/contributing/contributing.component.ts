import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-contributing',
  templateUrl: './contributing.component.html'
})
export class ContributingComponent {
  snippetClone = `  git clone https://github.com/<your username>/ngx-semantic`;

  constructor(title: Title) {
    title.setTitle('Contributing | Ngx Semantic');
  }
}
