import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'doc-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  snippetStandard = `
  <div sui-divider></div>
  `;

  snippetVertical = `
  <div sui-segment>
    <div sui-grid
         suiRelaxed="true"
         suiWidth="two">
      <div suiGridColumn>
        <div sui-placeholder>
          <p suiPlaceholderLine></p>
          <p suiPlaceholderLine></p>
          <p suiPlaceholderLine></p>
          <p suiPlaceholderLine></p>
        </div>
      </div>
      <div suiGridColumn>
        <div sui-placeholder>
          <p suiPlaceholderLine></p>
          <p suiPlaceholderLine></p>
          <p suiPlaceholderLine></p>
          <p suiPlaceholderLine></p>
        </div>
      </div>
    </div>
    <div sui-divider
         suiDirection="vertical">
      and
    </div>
  </div>
  `;

  stdDivider = `
  <div>
    <p> Some content here ...</p>
  </div>

  <div sui-divider></div>

  <div>
    <p> Some content here ...</p>
  </div>`;

  verticalDivider = `
  <div sui-segment>
    <div class="ui two column very relaxed grid">
      <div class="column">
        <div>
          <p> Some content ...</p>
        </div>
        <div>
          <p> Some content ...</p>
        </div>
      </div>

      <div class="column">
        <div>
          <p> Some content ...</p>
        </div>
        <div>
          <p> Some content ...</p>
        </div>
      </div>
    </div>
    <div sui-divider suiDirection="vertical">
      and
    </div>
  </div>
      `;

  horizontalDivider = `
  <div sui-segment suiTextAlignment="center aligned" suiBasic="true">
    <div sui-input suiAction="left action" suiIcon="true">
      <input type="text" placeholder="Order #">
      <div sui-button suiColour="blue">
        Search
      </div>
    </div>

    <div sui-divider suiDirection="horizontal">
        Or
    </div>

    <div class="ui teal labeled icon button">
      Create New Order
      <i class="add icon"></i>
    </div>
  </div>
  `;

  constructor(title: Title) {
    title.setTitle('Dividers | NgxSemantic');
  }

  toggleStateMap: any = {};

  ngOnInit(): void {
  }

  toggleLabel(key: string) {
    this.toggleStateMap[key] = !this.toggleStateMap[key];
  }
}
