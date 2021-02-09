import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetIconDisabled = `
  <i sui-icon
     disabled
     suiIconType="users"></i>`;

  snippetIconLoading = `
  <i sui-icon
     suiLoading
     suiIconType="spinner"></i>
  <i sui-icon
     suiLoading
     suiIconType="notched circle"></i>
  <i sui-icon
     suiLoading
     suiIconType="asterisk"></i>`;

  snippetIconFitted = `
  <div>
    Tight Spacing
    <i sui-icon
       suiFitted
       suiIconType="help"></i>
    Tight Spacing
  </div>`;

  snippetIconSizes = `
  <i sui-icon
     suiSize="mini"
     suiIconType="home"></i>
  <i sui-icon
     suiSize="tiny"
     suiIconType="home"></i>
  <i sui-icon
     suiSize="small"
     suiIconType="home"></i>
  <i sui-icon
     suiIconType="home"></i>
  <i sui-icon
     suiSize="large"
     suiIconType="home"></i>
  <i sui-icon
     suiSize="big"
     suiIconType="home"></i>
  <i sui-icon
     suiSize="huge"
     suiIconType="home"></i>
  <i sui-icon
     suiSize="massive"
     suiIconType="home"></i>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Icons | Ngx Semantic');
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
