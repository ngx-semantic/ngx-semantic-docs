import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'doc-home',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss']
})
export class QuickStartComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Quick Start | Ngx Semantic');
  }

  ngOnInit(): void {
  }
}
