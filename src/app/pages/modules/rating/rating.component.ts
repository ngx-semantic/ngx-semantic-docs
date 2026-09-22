import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetStarSrc from './snippets/star.sample.html' with { loader: 'text' };
import snippetHeartSrc from './snippets/heart.sample.html' with { loader: 'text' };
import snippetSizesSrc from './snippets/sizes.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-rating',
    templateUrl: './rating.component.html',
    styles: [],
    standalone: false
})
export class RatingComponent {
  snippetBasic = snippetBasicSrc;
  snippetStar = snippetStarSrc;
  snippetHeart = snippetHeartSrc;
  snippetSizes = snippetSizesSrc;

  isDefinitionsActive = true;
  isApiActive: boolean;





  constructor(title: Title) {
    title.setTitle('Rating | Ngx Semantic');
  }
}
