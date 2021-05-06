import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements AfterViewChecked {
  snippetBasic = `
  <img sui-image
     suiSize="small"
     src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetBasicInnerImg = `
  <div sui-image
       suiSize="small">
    <img src="https://semantic-ui.com/images/wireframe/image.png">
  </div>`;

  snippetBasicInnerSvg = `
  <div sui-image
       suiSize="small">
    <svg width="150" height="150">
      <image xlink:href="https://semantic-ui.com/images/wireframe/image.png" x="0" y="0" width="100%" height="100%"></image>
    </svg>
  </div>`;

  snippetImageLink = `
  <a sui-image
     suiSize="medium"
     href="https://google.com">
    <img src="https://semantic-ui.com/images/wireframe/image-text.png">
  </a>`;

  snippetHidden = `
  <img sui-image
     suiHidden
     src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetDisabled = `
  <img sui-image
     disabled
     suiSize="medium"
     src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetAvatar = `
  <img sui-image
       suiAvatar
       src="https://semantic-ui.com/images/wireframe/square-image.png">
  <span>Username</span>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Image | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
