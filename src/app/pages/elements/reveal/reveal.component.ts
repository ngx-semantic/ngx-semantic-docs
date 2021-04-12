import {Component, AfterViewChecked} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-reveals',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements AfterViewChecked {
  snippetFade = `
  <div sui-reveal
       suiFade>
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/avatar/large/ade.jpg"/>
    </div>
  </div>`;

  snippetFadeAlt = `
  <div sui-reveal
       suiFade
       suiImage
       suiSize="small">
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/ade.jpg"/>
    </div>
  </div>`;

  snippetMove = `
  <div sui-reveal
       suiMove="left">
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/avatar/large/chris.jpg"/>
    </div>
  </div>`;

  snippetMoveRight = `
  <div sui-reveal
             suiMove="right">
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/avatar/large/jenny.jpg"/>
    </div>
  </div>`;

  snippetMoveUp = `
  <div sui-reveal
       suiMove="up">
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/avatar/large/chris.jpg"/>
    </div>
  </div>`;

  snippetMoveDown = `
  <div sui-reveal
             suiMove="down">
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           suiSize="small"
           src="https://semantic-ui.com/images/avatar/large/jenny.jpg"/>
    </div>
  </div>`;

  snippetRotate = `
  <div sui-image
       suiCircular
       suiSize="small"
       sui-reveal
       suiRotate="right">
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/stevie.jpg"/>
    </div>
  </div>`;

  snippetRotateLeft = `
  <div sui-image
       suiCircular
       suiSize="small"
       sui-reveal
       suiRotate="left">
    <div suiRevealContent
         suiVisible="visible">
      <img sui-image
           src="https://semantic-ui.com/images/wireframe/square-image.png"/>
    </div>
    <div suiRevealContent
         suiVisible="hidden">
      <img sui-image
           src="https://semantic-ui.com/images/avatar/large/veronika.jpg"/>
    </div>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Reveal | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
