import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetSimpleCardSrc from './snippets/example.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-cards',
    templateUrl: './cards.component.html',
    standalone: false
})
export class CardsComponent {
  snippetSimpleCard = snippetSimpleCardSrc;


  constructor(title: Title) {
    title.setTitle('Card | NgxSemantic');
  }
}
