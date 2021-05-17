import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-image',
  templateUrl: './image.component.html',
  styles: [`
    .image-sizes img {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  `]
})
export class ImageComponent extends BasePageComponent {
  snippetBasic = `
  <img sui-image
     suiSize="small"
     src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetBasicInnerImg = `
  <div sui-image
       suiSize="small">
    <img src="https://semantic-ui.com/images/wireframe/image.png">
  </div>`;

  snippetBasicInnerSvg = `
  <div sui-image
       suiSize="small">
    <svg width="150" height="150">
      <image xlink:href="https://semantic-ui.com/images/wireframe/image.png" x="0" y="0" width="100%" height="100%"></image>
    </svg>
  </div>`;

  snippetImageLink = `
  <a sui-image
     suiSize="medium"
     href="https://google.com">
    <img src="https://semantic-ui.com/images/wireframe/image-text.png">
  </a>`;

  snippetHidden = `
  <img sui-image
     suiHidden
     src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetDisabled = `
  <img sui-image
     disabled
     suiSize="medium"
     src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetAvatar = `
  <img sui-image
       suiAvatar
       src="https://semantic-ui.com/images/wireframe/square-image.png">
  <span>Username</span>`;

  snippetBordered = `
  <img sui-image
     suiBordered
     suiSize="medium"
     src="https://semantic-ui.com/images/wireframe/white-image.png">`;

  snippetFluid = `
  <img sui-image
     suiFluid
     src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetRounded = `
  <img sui-image
     suiRounded
     suiSize="medium"
     src="https://semantic-ui.com/images/wireframe/square-image.png">`;

  snippetCircular = `
  <img sui-image
     suiCircular
     suiSize="medium"
     src="https://semantic-ui.com/images/wireframe/square-image.png">`;

  snippetAlignment = `
  <img sui-image
       suiSize="tiny"
       suiAlignment="top aligned"
       src="https://semantic-ui.com/images/wireframe/square-image.png">
  <span>Top Aligned</span>
  <div sui-divider></div>
  <img sui-image
       suiSize="tiny"
       suiAlignment="middle aligned"
       src="https://semantic-ui.com/images/wireframe/square-image.png">
  <span>Middle Aligned</span>
  <div sui-divider></div>
  <img sui-image
       suiSize="tiny"
       suiAlignment="bottom aligned"
       src="https://semantic-ui.com/images/wireframe/square-image.png">
  <span>Bottom Aligned</span>`;

  snippetCentered = `
  <div sui-segment>
    <img sui-image
         suiCentered
         suiSize="medium"
         src="https://semantic-ui.com/images/wireframe/image.png">
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem
      aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo.
      Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
      phaedrum, vim vivendum maiestatis in.</p>
    <img sui-image
         suiCentered
         suiSize="small"
         src="https://semantic-ui.com/images/wireframe/text-image.png">
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no
      illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te
      eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum
      postulant per id.</p>
  </div>`;

  snippetSpaced = `
  <div sui-segment>
    <p>
      Te eum doming eirmod, nominati pertinacia <img sui-image suiSize="mini" suiSpaced="spaced"
                                                     src="https://semantic-ui.com/images/wireframe/image.png">
      argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur
      at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim
      dolorum definiebas an. Mei ex natum rebum iisque.</p>
  </div>`;

  snippetSpacedAlt = `
  <p><img sui-image suiSize="mini" suiSpaced="right spaced"
          src="https://semantic-ui.com/images/wireframe/image.png">Audiam quaerendum eu sea, pro omittam
    definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
  </p>
  <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum
    aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per
    id.<img sui-image suiSize="mini" suiSpaced="left spaced"
            src="https://semantic-ui.com/images/wireframe/image.png"></p>`;

  snippetFloated = `
  <div sui-segment>
    <img sui-image suiSize="small" suiFloated="left floated" src="https://semantic-ui.com/images/wireframe/text-image.png">
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem
      aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <img sui-image suiSize="small" suiFloated="right floated" src="https://semantic-ui.com/images/wireframe/text-image.png">
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo.
      Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
      phaedrum, vim vivendum maiestatis in.</p>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no
      illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te
      eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum
      postulant per id.</p>
  </div>`;

  snippetSize = `
  <img sui-image suiSize="mini" src="https://semantic-ui.com/images/wireframe/image.png">
  <img sui-image suiSize="tiny" src="https://semantic-ui.com/images/wireframe/image.png">
  <img sui-image suiSize="small" src="https://semantic-ui.com/images/wireframe/image.png">
  <img sui-image suiSize="medium" src="https://semantic-ui.com/images/wireframe/image.png">
  <img sui-image suiSize="large" src="https://semantic-ui.com/images/wireframe/image.png">
  <img sui-image suiSize="big" src="https://semantic-ui.com/images/wireframe/image.png">
  <img sui-image suiSize="huge" src="https://semantic-ui.com/images/wireframe/image.png">
  <img sui-image suiSize="massive" src="https://semantic-ui.com/images/wireframe/image.png">`;

  snippetGroupSize = `
  <div sui-images
       suiSize="tiny">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
  </div>`;

  snippetGroupSizeAlt = `
  <div sui-images
       suiSize="small">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
    <img sui-image src="https://semantic-ui.com/images/wireframe/image.png">
  </div>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Image | Ngx Semantic');
  }
}
