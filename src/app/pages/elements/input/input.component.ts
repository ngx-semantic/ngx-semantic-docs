import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetStandard = `
  <div sui-input>
    <input type="text" placeholder="Search..." />
  </div>`;

  snippetFocus = `
  <div sui-input
       suiFocus>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetLoading = `
  <div sui-input
       suiLoading
       suiIcon
       suiIconPosition="left">
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiIconType="search"></i>
  </div>`;

  snippetLoadingRight = `
  <div sui-input
       suiLoading
       suiIcon
       suiIconPosition="right">
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiIconType="search"></i>
  </div>`;

  snippetDisabled = `
  <div sui-input
       disabled>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetDisabledIcon = `
  <div sui-input
       disabled
       suiIcon>
    <i sui-icon
       suiIconType="search"></i>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetDisabledInput = `
  <div sui-input>
    <input disabled type="text" placeholder="Search..."/>
  </div>`;

  snippetError = `
  <div sui-input
       suiError>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetIcon = `
  <div sui-input
       suiIcon>
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiIconType="search"></i>
  </div>`;

  snippetIconPosition = `
  <div sui-input
       suiIcon
       suiIconPosition="left">
    <input type="text" placeholder="Search users..."/>
    <i sui-icon
       suiIconType="users"></i>
  </div>`;

  snippetIconCircular = `
  <div sui-input
       suiIcon>
    <input type="text" placeholder="Search users..."/>
    <i sui-icon
       suiIconType="circular search link"></i>
  </div>`;

  snippetIconCircularInverted = `
  <div sui-input
       suiIcon>
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiInverted
       suiIconType="circular search link"></i>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Input | Ngx Semantic');
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
