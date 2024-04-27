import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-feed',
  templateUrl: 'feed.page.html',
})
export class FeedPage {
  snippetBasic = ``;

  constructor(title: Title) {
    title.setTitle('Feed | Ngx Semantic');
  }
}
