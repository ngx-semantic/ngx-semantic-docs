import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-tab',
  templateUrl: './tab.component.html',
  styles: [
  ]
})
export class TabComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetYoutube = `
   <sui-embed
      suiSource="youtube"
      suiId="O6Xo21L0ybE"
      suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>`;

  snippetVimeo = `
   <sui-embed
      suiSource="vimeo"
      suiId="125292332"
      suiPlaceHolder="https://semantic-ui.com/images/vimeo-example.jpg"></sui-embed>`;

  snippetCustomContent = `
   <sui-embed
      suiIcon="right circle arrow"
      suiSourceUrl="http://www.myfav.es/jack"
      suiPlaceHolder="https://semantic-ui.com/images/image-16by9.png"></sui-embed>`;

  snippetAspectRatio = `
   <sui-embed
      suiAspectRatio="4:3"
      suiSource="youtube"
      suiId="HTZudKi36bo"
      suiPlaceHolder="https://semantic-ui.com/images/4by3.jpg"></sui-embed>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Tab | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }

  tabChanged(payload: string): void {
    if (payload === 'api') {
      this.isApiActive = true;
      this.isDefinitionsActive = false;
    }

    if (payload === 'definitions') {
      this.isApiActive = false;
      this.isDefinitionsActive = true;
    }
  }
}
