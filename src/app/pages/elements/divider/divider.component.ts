import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'doc-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  snippetStandard = `
  <div sui-divider></div>`;

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
  </div>`;

  snippetVerticalForm = `
  <div sui-segment
       suiPlaceholder="true">
    <div sui-grid
         suiWidth="two"
         suiStackable="true"
         suiRelaxation="very relaxed">
      <div suiGridColumn>
        <div sui-form>
          <div suiFormField>
            <label>Username</label>
            <div sui-input
                 suiIcon="true">
              <input type="text" placeholder="Username">
              <i sui-icon
                 suiIconType="user"></i>
            </div>
          </div>
          <div suiFormField>
            <label>Password</label>
            <div sui-input
                 suiIcon="true">
              <input type="password">
              <i sui-icon
                 suiIconType="lock"></i>
            </div>
          </div>
          <div sui-button
               suiColour="blue">Login
          </div>
        </div>
      </div>
      <div suiGridColumn
           suiAlignment="center aligned">
        <div sui-button
             suiSize="big">
          <i sui-icon
             suiIconType="signup"></i>
          Sign Up
        </div>
      </div>
    </div>
    <div sui-divider
         suiDirection="vertical">
      and
    </div>
  </div>`;

  snippetHorizontal = `
  <div sui-segment
       suiTextAlignment="center aligned"
       suiBasic="true">
    <div sui-input
         suiIcon="true"
         suiAction="left action">
      <i sui-icon
         suiIconType="search"></i>
      <input type="text" placeholder="Order #">
      <div sui-button
           suiColour="blue">
        Search
      </div>
    </div>
    <div sui-divider
         suiDirection="horizontal">
      or
    </div>
    <div sui-button
         suiColour="teal"
         suiLabeled="labeled"
         suiIcon="true">
      Create New Order
      <i sui-icon
         suiIconType="add"></i>
    </div>
  </div>`;

  snippetHorizontalTable = `
  <h4 sui-divider
        suiHeader="true"
        suiDirection="horizontal">
      <i sui-icon
         suiIconType="tag"></i>
      Description
    </h4>
    <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
    <h4 sui-divider
        suiHeader="true"
        suiDirection="horizontal">
      <i sui-icon
         suiIconType="bar chart"></i>
      Specifications
    </h4>
    <table class="ui definition table">
      <tbody>
      <tr>
        <td class="two wide column">Size</td>
        <td>1" x 2"</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>6 ounces</td>
      </tr>
      <tr>
        <td>Color</td>
        <td>Yellowish</td>
      </tr>
      <tr>
        <td>Odor</td>
        <td>Not Much Usually</td>
      </tr>
      </tbody>
    </table>`;

  snippetDividerInverted = `
  <div sui-segment
       suiInverted="true">
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
    <div sui-divider
         suiInverted="true">
    </div>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
    <div sui-divider
         suiInverted="true"
         suiDirection="horizontal">
      Horizontal
    </div>
  </div>`;

  snippetDividerFitted = `
  <div sui-segment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
    malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <div sui-divider
         suiFitted="true">
    </div>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
    malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  </div>`;

  snippetDividerHidden = `
  <div sui-segment>
    <h3 sui-header>Section One</h3>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
    <div sui-divider
         suiHidden="true">
    </div>
    <h3 sui-header>Section Two</h3>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
  </div>`;

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
