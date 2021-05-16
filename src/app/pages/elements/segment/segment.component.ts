import {Component} from '@angular/core';
import {BasePageComponent} from '../../../shared/components/base-page.component';
import {HighlightService} from '../../../shared/services/highlight.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'doc-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent extends BasePageComponent {
  snippetBasic = `
  <div sui-segment>
    <p></p>
  </div>`;

  snippetPlaceholder = `
  <div sui-segment
       suiPlaceholder>
    <div sui-header
         suiIcon>
      <i sui-icon
         suiOutline
         suiIconType="pdf file"></i>
      No documents are listed for this customer.
    </div>
    <div sui-button
         suiEmphasis="primary">
      Add Document
    </div>
  </div>`;

  snippetPlaceholderAlt = `
  <div sui-segment
       suiPlaceholder>
    <div sui-header
         suiIcon>
      <i sui-icon
         suiOutline
         suiIconType="pdf file"></i>
      No documents are listed for this customer.
    </div>
    <div suiSegmentInline>
      <div sui-button
           suiEmphasis="primary">
        Clear Query
      </div>
      <div sui-button>
        Add Document
      </div>
    </div>
  </div>`;

  snippetPlaceholderAltToo = `
  <div sui-segment
       suiPlaceholder>
    <div sui-grid
         suiStackable
         suiWidth="two"
         suiAlignment="center aligned">
      <div sui-divider suiDirection="vertical">Or</div>
      <div suiGridRow
           suiAlignment="center aligned">
        <div suiGridColumn>
          <div sui-header
               suiIcon>
            <i sui-icon
               suiIconType="search"></i>
            Find Country
          </div>
          <div suiFormField>
            <sui-search
                suiShowIcon
                suiPlaceholder="Search countries..."></sui-search>
          </div>
        </div>
        <div suiGridColumn>
          <div sui-header
               suiIcon>
            <i sui-icon
               suiIconType="world"></i>
            Add New Country
          </div>
          <div sui-button>
            Create
          </div>
        </div>
      </div>
    </div>
  </div>`;

  snippetRaised = `
  <div sui-segment
       suiRaised>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </div>`;

  snippetStacked = `
  <div sui-segment
       suiStacked="stacked">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </div>`;

  snippetTallStacked = `
  <div sui-segment
       suiStacked="tall stacked">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </div>`;

  snippetPiled = `
  <div sui-segment
       suiPiled>
    <h4 sui-header>A header</h4>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem
      aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo.
      Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
      phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no
      illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te
      eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum
      postulant per id.</p>
  </div>`;

  snippetVertical = `
  <div sui-segment
       suiVertical>
    <p></p>
  </div>
  <div sui-segment
       suiVertical>
    <p></p>
  </div>
  <div sui-segment
       suiVertical>
    <p></p>
  </div>`;

  snippetSegments = `
  <div sui-segments>
    <div sui-segment>
      <p>Top</p>
    </div>
    <div sui-segment>
      <p>Middle</p>
    </div>
    <div sui-segment>
      <p>Middle</p>
    </div>
    <div sui-segment>
      <p>Middle</p>
    </div>
    <div sui-segment>
      <p>Bottomp>
    </div>
  </div>`;

  snippetColouredSegments = `
  <div sui-segments>
    <div sui-segment>
      <p>Top</p>
    </div>
    <div sui-segment
         suiColour="red">
      <p>Middle</p>
    </div>
    <div sui-segment
         suiColour="blue">
      <p>Middle</p>
    </div>
    <div sui-segment
         suiColour="green">
      <p>Middle</p>
    </div>
    <div sui-segment
         suiColour="yellow">
      <p>Bottom</p>
    </div>
  </div>`;

  snippetSecondary = `
  <div sui-segments>
    <div sui-segment>
      <p>Top</p>
    </div>
    <div sui-segment
         suiSecondary>
      <p>Secondary Content</p>
    </div>
  </div>`;

  snippetNested = `
  <div sui-segments>
    <div sui-segment>
      <p>Top</p>
    </div>
    <div sui-segments>
      <div sui-segment>
        <p>Nested Top</p>
      </div>
      <div sui-segment>
        <p>Nested Middle</p>
      </div>
      <div sui-segment>
        <p>Nested Bottom</p>
      </div>
    </div>
    <div sui-segment>
      <p>Middle</p>
    </div>
    <div sui-segments
         suiHorizontal>
      <div sui-segment>
        <p>Top</p>
      </div>
      <div sui-segment>
        <p>Middle</p>
      </div>
      <div sui-segment>
        <p>Bottom</p>
      </div>
    </div>
    <div sui-segment>
      <p>Bottom</p>
    </div>
  </div>`;

  snippetHorizontal = `  
  <div sui-segments
       suiHorizontal>
    <div sui-segment>
      <p></p>
    </div>
    <div sui-segment>
      <p></p>
    </div>
    <div sui-segment>
      <p></p>
    </div>
  </div>`;

  snippetRaisedGroup = `  
  <div sui-segments
       suiRaised>
    <div sui-segment>
      <p>Top</p>
    </div>
    <div sui-segment>
      <p>Middle</p>
    </div>
    <div sui-segment>
      <p>Bottom</p>
    </div>
  </div>`;

  snippetStackedGroup = `  
  <div sui-segments
       suiStacked>
    <div sui-segment>
      <p>Top</p>
    </div>
    <div sui-segment>
      <p>Middle</p>
    </div>
    <div sui-segment>
      <p>Bottom</p>
    </div>
  </div>`;

  snippetPiledGroup = `  
  <div sui-segments
       suiPiled>
    <div sui-segment>
      <p>Top</p>
    </div>
    <div sui-segment>
      <p>Middle</p>
    </div>
    <div sui-segment>
      <p>Bottom</p>
    </div>
  </div>`;

  snippetDisabled = `  
  <div sui-segment
       disabled>
    <p></p>
  </div>`;

  snippetLoading = `  
  <div sui-segment
       suiLoading>
    <p></p>
    <p></p>
  </div>`;

  snippetInverted = `  
  <div sui-segment
       suiInverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </div>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Segment | Ngx Semantic');
  }
}
