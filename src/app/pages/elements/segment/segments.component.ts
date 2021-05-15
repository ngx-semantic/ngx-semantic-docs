import {Component} from '@angular/core';
import {BasePageComponent} from '../../../shared/components/base-page.component';
import {HighlightService} from '../../../shared/services/highlight.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'doc-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
})
export class SegmentsComponent extends BasePageComponent {
  snippetBasic = `
  <div sui-placeholder>
    <div suiPlaceholderHeader
         suiImage>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
    <div suiPlaceholderParagraph>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
  </div>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Segment | Ngx Semantic');
  }
}
