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

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Reveal | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
