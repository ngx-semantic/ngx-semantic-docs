/**
 * Created by bolorundurowb on 5/9/2021
 */

import {AfterViewChecked, Directive} from '@angular/core';
import {HighlightService} from '../services/highlight.service';

@Directive({
  selector: 'doc-base-page'
})
export abstract class BasePageComponent implements AfterViewChecked {
  protected constructor(private highlighter: HighlightService) {
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
