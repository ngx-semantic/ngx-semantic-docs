import {Title} from "@angular/platform-browser";
import {AfterViewChecked, Component} from '@angular/core';

@Component({
  selector: 'doc-home',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss']
})
export class QuickStartComponent {
  constructor(title: Title) {
    title.setTitle('Quick Start | Ngx Semantic');
  }
}
