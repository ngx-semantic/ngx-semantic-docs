import {Component, AfterViewChecked} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-reveals',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements AfterViewChecked {
  snippetBasic = `
  <div sui-reveal suiSize="small" suiMove="right" suiImage>
    <img sui-reveal-content suiVisible="visible" src="https://semantic-ui.com/images/avatar/large/ade.jpg">
    <img sui-reveal-content suiVisible="hidden" src="https://semantic-ui.com/images/wireframe/square-image.png">
  </div>

  <div sui-reveal suiSize="medium" suiRotate="right" suiImage>
    <img sui-reveal-content suiVisible="visible" src="https://semantic-ui.com/images/avatar/large/ade.jpg">
    <img sui-reveal-content suiVisible="hidden" src="https://semantic-ui.com/images/wireframe/square-image.png">
  </div>
  `;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Reveal | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
