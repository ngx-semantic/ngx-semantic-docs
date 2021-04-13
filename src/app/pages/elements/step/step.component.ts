import {Component, AfterViewChecked} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-steps',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements AfterViewChecked {
  snippetSingle = `
  <div sui-steps>
    <div sui-step>
      Shipping
    </div>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Step | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
