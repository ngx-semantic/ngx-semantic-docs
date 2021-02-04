import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'doc-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  snippetStandard = `
  <div sui-divider></div>`;

  snippetVertical = `
  <div sui-segment>
    <div sui-grid
         suiRelaxation="very relaxed"
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
       suiPlaceholder>
    <div sui-grid
         suiWidth="two"
         suiStackable
         suiRelaxation="very relaxed">
      <div suiGridColumn>
        <div sui-form>
          <div suiFormField>
            <label>Username</label>
            <div sui-input
                 suiIcon>
              <input type="text" placeholder="Username">
              <i sui-icon
                 suiIconType="user"></i>
            </div>
          </div>
          <div suiFormField>
            <label>Password</label>
            <div sui-input
                 suiIcon>
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
       suiBasic>
    <div sui-input
         suiIcon
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
         suiIcon>
      Create New Order
      <i sui-icon
         suiIconType="add"></i>
    </div>
  </div>`;

  snippetHorizontalTable = `
  <h4 sui-divider
        suiHeader
        suiDirection="horizontal">
      <i sui-icon
         suiIconType="tag"></i>
      Description
    </h4>
    <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
    <h4 sui-divider
        suiHeader
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
       suiInverted>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
    <div sui-divider
         suiInverted>
    </div>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
    <div sui-divider
         suiInverted
         suiDirection="horizontal">
      Horizontal
    </div>
  </div>`;

  snippetDividerFitted = `
  <div sui-segment>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
    malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    <div sui-divider
         suiFitted>
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
         suiHidden>
    </div>
    <h3 sui-header>Section Two</h3>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
  </div>`;

  snippetDividerSection = `
  <div sui-segment>
    <h3 sui-header>Section One</h3>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
    <div sui-divider
         suiSection>
    </div>
    <h3 sui-header>Section Two</h3>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
  </div>`;

  snippetDividerClearing = `
   <div sui-segment>
    <h1 sui-header
        suiFloated="right floated">Floated Content</h1>
    <div sui-divider
         suiClearing></div>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Dividers | NgxSemantic');
  }
}
