import { AfterContentChecked, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HighlightService } from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-accordion',
  templateUrl: './accordion.page.html'
})
export class AccordionPage implements AfterContentChecked {

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Accordion | Ngx Semantic');
  }

  ngAfterContentChecked() {
    this.highlighter.highlightAll();
  }
}
