import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'doc-icons',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss']
})
export class IconComponent {
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

  snippetIconLink = `
  <i sui-icon
     suiLink
     suiIconType="close"></i>
  <i sui-icon
     suiLink
     suiIconType="help"></i>`;

  snippetIconFlipped = `
  <i sui-icon
     suiFlip="horizontal"
     suiIconType="cloud"></i>
  <i sui-icon
     suiFlip="vertical"
     suiIconType="cloud"></i>`;

  snippetIconRotated = `
  <i sui-icon
     suiRotation="clockwise"
     suiIconType="cloud"></i>
  <i sui-icon
     suiRotation="counterclockwise"
     suiIconType="cloud"></i>`;

  snippetIconCircular = `
  <i sui-icon
     suiCircular
     suiIconType="users"></i>
  <i sui-icon
     suiCircular
     suiColour="teal"
     suiIconType="users"></i>
  <i sui-icon
     suiCircular
     suiInverted
     suiIconType="users"></i>
  <i sui-icon
     suiCircular
     suiInverted
     suiColour="teal"
     suiIconType="users"></i>`;

  snippetIconBordered = `
  <i sui-icon
     suiBordered
     suiIconType="users"></i>
  <i sui-icon
     suiBordered
     suiColour="teal"
     suiIconType="users"></i>
  <i sui-icon
     suiBordered
     suiInverted
     suiIconType="users"></i>
  <i sui-icon
     suiBordered
     suiInverted
     suiColour="teal"
     suiIconType="users"></i>`;

  snippetIconColoured = `
  <i sui-icon
     suiColour="red"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="orange"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="yellow"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="olive"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="green"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="teal"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="blue"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="violet"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="purple"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="pink"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="brown"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="grey"
     suiIconType="users"></i>
  <i sui-icon
     suiColour="black"
     suiIconType="users"></i>`;

  snippetIconInvertedColoured = `
  <div sui-segment
       suiInverted>
    <i sui-icon
       suiInverted
       suiColour="red"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="orange"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="yellow"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="olive"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="green"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="teal"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="blue"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="violet"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="purple"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="pink"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="brown"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="grey"
       suiIconType="users"></i>
    <i sui-icon
       suiInverted
       suiColour="black"
       suiIconType="users"></i>
  </div>`;

  snippetIconsFirst = `
  <i sui-icons
     suiSize="huge">
    <i sui-icon
       suiSize="big"
       suiIconType="circle outline"></i>
    <i sui-icon
       suiIconType="user"></i>
  </i>`;

  snippetIconsSecond = `
  <i sui-icons
     suiSize="huge">
    <i sui-icon
       suiSize="big"
       suiColour="red"
       suiIconType="dont"></i>
    <i sui-icon
       suiIconType="user"></i>
  </i>`;

  snippetIconsCorner = `
  <i sui-icons
     suiSize="huge">
    <i sui-icon
       suiIconType="puzzle"></i>
    <i sui-icon
       suiCorner="bottom right"
       suiIconType="add"></i>
  </i>`;

  snippetIconsCornerOptions = `
  <i sui-icons
     suiSize="huge">
    <i sui-icon
       suiIconType="puzzle"></i>
    <i sui-icon
       suiCorner="top left"
       suiIconType="add"></i>
  </i>
  <i sui-icons
     suiSize="huge">
    <i sui-icon
       suiIconType="puzzle"></i>
    <i sui-icon
       suiCorner="top right"
       suiIconType="add"></i>
  </i>
  <i sui-icons
     suiSize="huge">
    <i sui-icon
       suiIconType="puzzle"></i>
    <i sui-icon
       suiCorner="bottom left"
       suiIconType="add"></i>
  </i>
  <i sui-icons
     suiSize="huge">
    <i sui-icon
       suiIconType="puzzle"></i>
    <i sui-icon
       suiCorner="bottom right"
       suiIconType="add"></i>
  </i>`;

  snippetIconsInline = `
  <div sui-header>
    <i sui-icons>
      <i sui-icon
         suiIconType="twitter"></i>
      <i sui-icon
         suiInverted
         suiCorner="bottom right"
         suiIconType="add"></i>
    </i>
    Add on Twitter
  </div>`;

  constructor(title: Title) {
    title.setTitle('Icon | Ngx Semantic');
  }
}


