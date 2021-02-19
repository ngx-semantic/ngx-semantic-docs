import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-dimmer',
  templateUrl: './dimmer.component.html',
  styles: [
  ]
})
export class DimmerComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Tab | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }

  tabChanged(payload: string): void {
    if (payload === 'api') {
      this.isApiActive = true;
      this.isDefinitionsActive = false;
    }

    if (payload === 'definitions') {
      this.isApiActive = false;
      this.isDefinitionsActive = true;
    }
  }
}
