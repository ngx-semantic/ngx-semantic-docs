import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-form',
  templateUrl: './form.component.html'
})
export class FormComponent extends BasePageComponent {
  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Form | Ngx Semantic');
  }
}
