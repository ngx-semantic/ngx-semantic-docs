import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-popup',
  templateUrl: 'popup.page.html'
})
export class PopupPage {
  snippetStandard = `
  <button sui-button suiIcon
          sui-popup suiPopupContent="Add users to your feed">
    <i sui-icon suiIconType="add"></i>
  </button>`;

  snippetTitled = `
  <img sui-image suiAvatar
       sui-popup suiPopupTitle="Elliot Fu" suiPopupContent="Elliot has been a member since July 2012"
       src="/assets/images/elliot.jpg" />
  <img sui-image suiAvatar
       sui-popup suiPopupTitle="Stevie Feliciano" suiPopupContent="Stevie has been a member since August 2013"
       src="/assets/images/stevie.jpg" />
  <img sui-image suiAvatar
       sui-popup suiPopupTitle="Matt" suiPopupContent="Matt has been a member since July 2014"
       src="/assets/images/matt.jpg" />`;

  snippetHtml = `
  <div sui-card
       sui-popup suiPopupTitle="User Rating" [suiPopupContent]="popupContent">
    <div suiCardImage>
      <img src="https://semantic-ui.com/images/movies/watchmen-horizontal.jpg"/>
    </div>
    <div suiCardContent>
      <div suiCardHeader>Watchmen</div>
      <div suiCardDescription>
        In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a
        government crackdown, but after one of the masked veterans is brutally murdered an investigation into the
        killer is initiated.
      </div>
    </div>
    <div sui-buttons suiAttached suiWidth="two" suiAttachedPosition="bottom">
      <div sui-button>
        <i sui-icon suiIconType="add"></i>
        Queue
      </div>
      <div sui-button suiEmphasis="primary">
        <i sui-icon suiIconType="play"></i>
        Watch
      </div>
    </div>
  </div>

  <ng-template #popupContent>
    <sui-rating suiValue="3" suiMaxValue="5"></sui-rating>
  </ng-template>`;

  snippetBasic = `
  <button sui-button suiIcon
          sui-popup suiPopupBasic suiPopupContent="The default theme's basic popup removes the pointing arrow.">
    <i sui-icon suiIconType="add"></i>
  </button>`;

  snippetWidth = `
  <i sui-icon suiCircular suiLink suiIconType="heart"
          sui-popup suiPopupWidth="wide" suiPopupContent="Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>
  <i sui-icon suiCircular suiLink suiIconType="heart"
          sui-popup suiPopupWidth="very wide" suiPopupContent="Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide."></i>`;

  snippetFluid = `
  <div sui-button
       sui-popup [suiPopupContent]="fluidPopup">
    Show fluid popup
  </div>
  <ng-template #fluidPopup>
    <div sui-grid suiDivided="divided" suiAlignment="center aligned" suiWidth="four">
      <div suiGridColumn>1</div>
      <div suiGridColumn>2</div>
      <div suiGridColumn>3</div>
      <div suiGridColumn>4</div>
    </div>
  </ng-template>`;

  snippetSize = `
  <i sui-icon suiCircular suiLink suiIconType="heart"
     sui-popup suiPopupSize="mini"
     suiPopupContent="Hello. This is a mini popup"></i>
  <i sui-icon suiCircular suiLink suiIconType="heart"
     sui-popup suiPopupSize="tiny"
     suiPopupContent="Hello. This is a tiny popup"></i>
  <i sui-icon suiCircular suiLink suiIconType="heart"
     sui-popup suiPopupSize="small"
     suiPopupContent="Hello. This is a small popup"></i>
  <i sui-icon suiCircular suiLink suiIconType="heart"
     sui-popup suiPopupSize="large"
     suiPopupContent="Hello. This is a large popup"></i>
  <i sui-icon suiCircular suiLink suiIconType="heart"
     sui-popup suiPopupSize="huge"
     suiPopupContent="Hello. This is a huge popup"></i>`;

  constructor(title: Title) {
    title.setTitle('Popup | Ngx Semantic');
  }
}
