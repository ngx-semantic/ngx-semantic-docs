import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetPageHeader = `
  <h1 sui-header>First Header</h1>
  <h2 sui-header>Second Header</h2>
  <h3 sui-header>Third Header</h3>
  <h4 sui-header>Fourth Header</h4>
  <h5 sui-header>Fifth Header</h5>`;

  snippetContentHeader = `
  <div sui-header
       suiSize="huge">Huge Header
  </div>
  <div sui-header
       suiSize="large">Large Header
  </div>
  <div sui-header
       suiSize="medium">Medium Header
  </div>
  <div sui-header
       suiSize="small">Small Header
  </div>
  <div sui-header
       suiSize="tiny">Tiny Header
  </div>`;

  snippetIconHeader = `
  <h2 sui-header
      suiIcon>
    <i sui-icon suiIconType="settings"></i>
    <div class="content">
      Account Settings
      <div suiSubHeader>Manage your account settings and set e-mail preferences.</div>
    </div>
  </h2>`;

  snippetIconCenteredHeader = `
  <h2 sui-header
      suiIcon
      suiAlignment="center aligned">
    <i sui-icon suiIconType="circular users"></i>
    Friends
  </h2>
  <img sui-image class="wireframe"
       suiCentered
       src="https://semantic-ui.com/images/wireframe/centered-paragraph.png" />`;

  snippetSubHeader = `
  <h2 sui-header
      suiSubHeader>
    Price
  </h2>
  <span>$10.99</span>`;

  snippetSubImageHeader = `
   <div sui-list
         suiHorizontal>
      <div suiListItem>
        <img sui-image
             suiCircular
             suiSize="mini"
             src="https://semantic-ui.com/images/avatar2/small/molly.png">
        <div class="content">
          <div sui-header
               suiSubHeader>Molly
          </div>
          Coordinator
        </div>
      </div>
      <div suiListItem>
        <img sui-image
             suiCircular
             suiSize="mini"
             src="https://semantic-ui.com/images/avatar2/small/elyse.png">
        <div class="content">
          <div sui-header
               suiSubHeader>Elyse
          </div>
          Developer
        </div>
      </div>
      <div suiListItem>
        <img sui-image
             suiCircular
             suiSize="mini"
             src="https://semantic-ui.com/images/avatar2/small/eve.png">
        <div class="content">
          <div sui-header
               suiSubHeader>Eve
          </div>
          Project Manager
        </div>
      </div>
    </div>`;

  snippetImageHeader = `
  <h2 sui-header>
    <img sui-image src="https://semantic-ui.com/images/icons/school.png">
    <div class="content">
      Learn More
    </div>
  </h2>`;

  snippetCircularImageHeader = `
  <h2 sui-header>
    <img sui-image
         suiCircular
         src="https://semantic-ui.com/images/avatar2/large/patrick.png">
    <div class="content">
      Patrick
    </div>
  </h2>`;

  snippetImageSubHeader = `
   <h2 sui-header>
      <img sui-image
           src="https://semantic-ui.com/images/icons/plugin.png">
      <div class="content">
        Plug-ins
        <div suiSubHeader>Check out our plug-in marketplace</div>
      </div>
    </h2>`;

  snippetColored = `
  <div class="ui segment">
    <h4 sui-header suiColour="red" suiInverted>Red</h4>
    <h4 sui-header suiColour="orange" suiInverted>Orange</h4>
    <h4 sui-header suiColour="yellow" suiInverted>Yellow</h4>
    <h4 sui-header suiColour="olive" suiInverted>Olive</h4>
  </div>`;

  snippetInverted = `
  <div class="ui inverted segment">
    <h4 sui-header suiColour="teal" suiInverted>Teal</h4>
    <h4 sui-header suiColour="blue" suiInverted>Blue</h4>
    <h4 sui-header suiColour="purple" suiInverted>Purple</h4>
    <h4 sui-header suiColour="violet" suiInverted>Violet</h4>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Headers | Ngx Semantic');
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
