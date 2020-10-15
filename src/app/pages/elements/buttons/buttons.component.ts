import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'doc-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  snippetBtn = `
  <button sui-button>
    Follow
  </button>`;

  snippetBtnFocusable = `
  <button sui-button>
    Button
  </button>
  <button sui-button
    tabindex="0">
    Focusable
  </button>`;

  snippetBtnEmphasis = `
  <button sui-button suiEmphasis="primary">
    Save
  </button>

  <button sui-button>
    Discard
  </button>`;

  snippetBtnSecondaryEmphasis = `
  <button sui-button suiEmphasis="secondary">
    Save
  </button>

  <button sui-button>
    Discard
  </button>`;

  snippetBtnAnimated = `
  <div sui-button
     tabindex="0"
     suiAnimated="animated">
    <div class="visible content">Next</div>
    <div class="hidden content">
      <i sui-icon
         suiIconType="right arrow"></i>
    </div>
  </div>
  <div sui-button
       tabindex="0"
       suiAnimated="vertical animated">
    <div class="hidden content">Shop</div>
    <div class="visible content">
      <i class="shop icon"></i>
    </div>
  </div>
  <div sui-button
       tabindex="0"
       suiAnimated="animated fade">
    <div class="visible content">Sign-up for a Pro account</div>
    <div class="hidden content">
      $12.99 a month
    </div>
  </div>`;

  snippetBtnLabeled = `
  <div sui-button
       tabindex="0"
       suiLabeled="labeled">
    <div sui-button>
      <i sui-icon
         suiIconType="heart"></i> Like
    </div>
    <a sui-label
       suiBasic="true">
      2,048
    </a>
  </div>
  <div sui-button
       suiLabeled="left labeled"
       tabindex="0">
    <a sui-label
       suiBasic="true"
       suiPointing="right">
      2,048
    </a>
    <div sui-button>
      <i sui-icon
         suiIconType="heart"></i> Like
    </div>
  </div>
  <div class="ui left labeled button" tabindex="0">
    <a sui-label
       suiBasic="true">
      1,048
    </a>
    <div sui-button
         suiIcon="true">
      <i sui-icon
         suiIconType="fork"></i>
    </div>
  </div>`;

  snippetBtnColorLabeled = `
  <div sui-button
       suiLabeled="labeled"
       tabindex="0">
    <div sui-button
         suiColour="red">
      <i sui-icon
         suiIconType="heart"></i> Like
    </div>
    <a sui-label
       suiColour="red"
       suiBasic="true"
       suiPointing="left">
      1,048
    </a>
  </div>
  <div sui-button
       suiLabeled="labeled"
       tabindex="0">
    <div sui-button
         suiBasic="true"
         suiColour="blue">
      <i sui-icon
         suiIconType="fork"></i> Fork
    </div>
    <a sui-label
       suiColour="blue"
       suiBasic="true"
       suiPointing="left">
      1,048
    </a>
  </div>`;

  snippetBtnIcon = `
   <button sui-button
          suiIcon="true">
    <i sui-icon
       suiIconType="cloud"></i>
  </button>`;

  snippetBtnLabeledIcon = `
 <button sui-button
          suiIcon="true"
          suiLabeled="labeled">
    <i sui-icon
       suiIconType="pause"></i>
    Pause
  </button>
  <button sui-button
          suiIcon="true"
          suiLabeled="right labeled">
    <i sui-icon
       suiIconType="right arrow"></i>
    Next
  </button>`;

  snippetBtnBasic = `
   <button sui-button
          suiBasic="true">
    <i sui-icon
       suiIconType="user"></i>
    Add Friend
  </button>`;

  snippetBtnBasicEmphasis = `
   <button sui-button
          suiBasic="true"
          suiEmphasis="primary">
    Primary
  </button>
  <button sui-button
          suiBasic="true"
          suiEmphasis="secondary">
    Secondary
  </button>
  <button sui-button
          suiBasic="true"
          suiEmphasis="positive">
    Positive
  </button>
  <button sui-button
          suiBasic="true"
          suiEmphasis="negative">
    Negative
  </button>`;

  snippetBtnBasicColours = `
   <button sui-button
          suiBasic="true"
          suiColour="red">
    Red
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="orange">
    Orange
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="yellow">
    Yellow
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="olive">
    Olive
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="green">
    Green
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="teal">
    Teal
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="blue">
    Blue
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="violet">
    Violet
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="purple">
    Purple
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="pink">
    Pink
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="brown">
    Brown
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="grey">
    Grey
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="black">
    Black
  </button>`;

  snippetBtnInverted = `
   <button sui-button
          suiBasic="true"
          suiColour="red">
    Red
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="orange">
    Orange
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="yellow">
    Yellow
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="olive">
    Olive
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="green">
    Green
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="teal">
    Teal
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="blue">
    Blue
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="violet">
    Violet
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="purple">
    Purple
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="pink">
    Pink
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="brown">
    Brown
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="grey">
    Grey
  </button>
  <button sui-button
          suiBasic="true"
          suiColour="black">
    Black
  </button>`;

  snippetBtnInvertedBasic = `
  <div sui-segment
       suiInverted="true">
    <button sui-button
            suiBasic="true"
            suiInverted="true">
      Basic
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiEmphasis="primary">
      Primary
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiEmphasis="secondary">
      Secondary
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="red">
      Basic Red
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="orange">
      Basic Orange
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="yellow">
      Basic Yellow
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="olive">
      Basic Olive
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="green">
      Basic Green
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="teal">
      Basic Teal
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="blue">
      Basic Blue
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="violet">
      Basic Violet
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="purple">
      Basic Purple
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="pink">
      Basic Pink
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="brown">
      Basic Brown
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="grey">
      Basic Grey
    </button>
    <button sui-button
            suiBasic="true"
            suiInverted="true"
            suiColour="black">
      Basic Black
    </button>
  </div>`;

  snippetBtnGroup = `
  <div sui-buttons>
    <button sui-button>One</button>
    <button sui-button>Two</button>
    <button sui-button>Three</button>
  </div>`;

  snippetBtnGroupIcon = `
  <div sui-buttons
       suiIcon="icon">
    <button sui-button>
      <i sui-icon
         suiIconType="align left"></i>
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="align center"></i>
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="align right"></i>
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="align justify"></i>
    </button>
  </div>
  <div sui-buttons
       suiIcon="icon">
    <button sui-button>
      <i sui-icon
         suiIconType="bold"></i>
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="underline"></i>
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="text width"></i>
    </button>
  </div>`;

  snippetBtnGroupConditional = `
  <div sui-buttons>
    <button sui-button>Cancel</button>
    <div class="or"></div>
    <button sui-button
            suiEmphasis="positive">
      Save
    </button>
  </div>`;

  snippetBtnGroupConditionalLocalized = `
  <div sui-buttons>
    <button sui-button>un</button>
    <div class="or" data-text="ou"></div>
    <button sui-button
            suiEmphasis="positive">
      deux
    </button>
  </div>`;

  snippetBtnActive = `
  <button sui-button
          suiActive="true">
    <i sui-icon
       suiIconType="user"></i>
    Follow
  </button>`;

  snippetBtnDisabled = `
  <button sui-button
          suiDisabled="true">
    <i sui-icon
       suiIconType="user"></i>
    Followed
  </button>`;

  snippetBtnLoading = `
  <button sui-button
          suiLoading="true">
    Loading
  </button>
  <button sui-button
          suiLoading="true"
          suiBasic="true">
    Loading
  </button>
  <button sui-button
          suiLoading="true"
          suiEmphasis="primary">
    Loading
  </button>
  <button sui-button
          suiLoading="true"
          suiEmphasis="secondary">
    Loading
  </button>`;

  snippetBtnSocial = `
  <button sui-button
          suiSocial="facebook">
    <i sui-icon
       suiIconType="facebook"></i>
    Facebook
  </button>
  <button sui-button
          suiSocial="twitter">
    <i sui-icon
       suiIconType="twitter"></i>
    Twitter
  </button>
  <button sui-button
          suiSocial="google">
    <i sui-icon
       suiIconType="google"></i>
    Google Plus
  </button>
  <button sui-button
          suiSocial="vk">
    <i sui-icon
       suiIconType="vk"></i>
    VK
  </button>
  <button sui-button
          suiSocial="linkedin">
    <i sui-icon
       suiIconType="linkedin"></i>
    LinkedIn
  </button>
  <button sui-button
          suiSocial="instagram">
    <i sui-icon
       suiIconType="instagram"></i>
    Instagram
  </button>
  <button sui-button
          suiSocial="youtube">
    <i sui-icon
       suiIconType="youtube"></i>
    YouTube
  </button>`;

  snippetBtnSize = `
  <button sui-button
          suiSize="mini">
    Mini
  </button>
  <button sui-button
          suiSize="tiny">
    Tiny
  </button>
  <button sui-button
          suiSize="small">
    Small
  </button>
  <button sui-button
          suiSize="medium">
    Medium
  </button>
  <button sui-button
          suiSize="large">
    Large
  </button>
  <button sui-button
          suiSize="big">
    Big
  </button>
  <button sui-button
          suiSize="huge">
    Huge
  </button>
  <button sui-button
          suiSize="massive">
    Massive
  </button>`;

  snippetBtnFloated = `
   <button sui-button
          suiFloated="left floated">
    Left Floated
  </button>
  <button sui-button
          suiFloated="right floated">
    Right Floated
  </button>`;

  snippetBtnColours = `
  <button sui-button
          suiColour="red">
   Red
  </button>
  <button sui-button
          suiColour="orange">
   Orange
  </button>
  <button sui-button
          suiColour="yellow">
   Yellow
  </button>
  <button sui-button
          suiColour="olive">
   Olive
  </button>
  <button sui-button
          suiColour="green">
   Green
  </button>
  <button sui-button
          suiColour="teal">
   Teal
  </button>
  <button sui-button
          suiColour="blue">
   Blue
  </button>
  <button sui-button
          suiColour="violet">
   Violet
  </button>
  <button sui-button
          suiColour="purple">
   Purple
  </button>
  <button sui-button
          suiColour="pink">
   Pink
  </button>
  <button sui-button
          suiColour="brown">
   Brown
  </button>
  <button sui-button
          suiColour="grey">
   Grey
  </button>
  <button sui-button
          suiColour="black">
   Black
  </button>`;

  snippetBtnCompact = `
  <button sui-button
          suiCompact="true">
    Hold
  </button>
  <button sui-button
          suiCompact="true">
    <i sui-icon
       suiIconType="pause"></i>
  </button>
  <button sui-button
          suiCompact="true">
    <i sui-icon
       suiIconType="pause"></i>
    Pause
  </button>`;

  snippetBtnToggle = `
  <button sui-button
          suiToggle="true">
    Toggle
  </button>`;

  snippetBtnPositive = `
  <button sui-button
         suiEmphasis="positive">
    Positive
  </button>`;

  snippetBtnNegative = `
  <button sui-button
         suiEmphasis="negative">
    Negative
  </button>`;

  snippetBtnFluid = `
   <button sui-button
          suiFluid="true">
    Fits container
  </button>`;

  snippetBtnCircular = `
   <button sui-button
          suiIcon="true"
          suiCircular="true">
    <i sui-icon
       suiIconType="settings"></i>
  </button>`;

  snippetBtnCircularIcons = `
   <button sui-button
          suiIcon="true"
          suiCircular="true"
          suiSocial="facebook">
    <i sui-icon
       suiIconType="facebook"></i>
  </button>
  <button sui-button
          suiIcon="true"
          suiCircular="true"
          suiSocial="twitter">
    <i sui-icon
       suiIconType="twitter"></i>
  </button>
  <button sui-button
          suiIcon="true"
          suiCircular="true"
          suiSocial="linkedin">
    <i sui-icon
       suiIconType="linkedin"></i>
  </button>
  <button sui-button
          suiIcon="true"
          suiCircular="true"
          suiSocial="google">
    <i sui-icon
       suiIconType="google"></i>
  </button>`;

  snippetBtnVertical = `
   <button sui-button
          suiAttached="top attached">
    Top
  </button>
  <div sui-segment
       suiAttached="attached">
    <div sui-placeholder>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
  </div>
  <button sui-button
          suiAttached="bottom attached">
    Bottom
  </button>`;

  snippetBtnHorizontal = `
   <button sui-button
          suiAttached="left attached">
    Left
  </button>
  <button sui-button
          suiAttached="right attached">
    Right
  </button>`;

  snippetBtnGroupVertical = `
  <div sui-buttons
       suiVertical="true">
    <button sui-button>
      Feed
    </button>
    <button sui-button>
      Messages
    </button>
    <button sui-button>
      Events
    </button>
    <button sui-button>
      Photos
    </button>
  </div>`;

  snippetBtnGroupIcons = `
  <div sui-buttons
     suiIcon="icon">
  <button sui-button>
    <i sui-icon
       suiIconType="play"></i>
  </button>
  <button sui-button>
    <i sui-icon
       suiIconType="pause"></i>
  </button>
  <button sui-button>
    <i sui-icon
       suiIconType="shuffle"></i>
  </button>
</div>`;

  snippetBtnGroupLabeledIcons = `
   <div sui-buttons
       suiIcon="labeled icon"
       suiVertical="true">
    <button sui-button>
      <i sui-icon
         suiIconType="pause"></i>
      Pause
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="play"></i>
      Play
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="shuffle"></i>
      Shuffle
    </button>
  </div>`;

  snippetBtnGroupMixed = `
  <div sui-buttons>
    <button sui-button
            suiLabeled="labeled"
            suiIcon="true">
      <i sui-icon
         suiIconType="left chevron"></i>
      Back
    </button>
    <button sui-button>
      <i sui-icon
         suiIconType="stop"></i>
      Stop
    </button>
    <button sui-button
            suiLabeled="right labeled"
            suiIcon="true">
      Forward
      <i sui-icon
         suiIconType="right chevron"></i>
    </button>
  </div>`;

  snippetBtnGroupEqualWidth = `
  <div sui-buttons
       class="five">
    <button sui-button>Overview</button>
    <button sui-button>Specs</button>
    <button sui-button>Warranty</button>
    <button sui-button>Reviews</button>
    <button sui-button>Support</button>
  </div>
  <div sui-buttons
       class="three">
    <button sui-button>Overview</button>
    <button sui-button>Specs</button>
    <button sui-button>Support</button>
  </div>`;

  snippetBtnGroupColoured = `
  <div sui-buttons
       suiColour="blue">
    <button sui-button>One</button>
    <button sui-button>Two</button>
    <button sui-button>Three</button>
  </div>`;

  snippetBtnGroupBasic = `
  <div sui-buttons
       suiBasic="true">
    <button sui-button>One</button>
    <button sui-button>Two</button>
    <button sui-button>Three</button>
  </div>
  <div sui-divider></div>
  <div sui-buttons
       suiBasic="true"
       suiVertical="true">
    <button sui-button>One</button>
    <button sui-button>Two</button>
    <button sui-button>Three</button>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Buttons | NgxSemantic');
  }
}
