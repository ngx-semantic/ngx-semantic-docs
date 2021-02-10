import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-embed',
  templateUrl: './embed.component.html',
  styles: [
  ]
})
export class EmbedComponent implements AfterViewChecked {
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

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Embed | Ngx Semantic');
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
