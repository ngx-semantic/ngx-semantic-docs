import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'doc-contributing',
  templateUrl: './contributing.component.html'
})
export class ContributingComponent {
  constructor(title: Title) {
    title.setTitle('Contributing | Ngx Semantic')
  }
}
