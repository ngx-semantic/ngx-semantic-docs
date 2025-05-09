import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-statistics',
  templateUrl: './statistics.page.html',
})
export class StatisticsComponent {
  snippetBasic = `
  <div sui-statistic>
    <div suiStatValue>5,550</div>
    <div suiStatLabel>Downloads</div>
  </div>`;

  snippetBasicAlternate = `
  <div sui-statistic>
    <div suiStatLabel>Views</div>
    <div suiStatValue>40,509</div>
  </div>`;

  snippetGroup = `
  <div sui-statistics>
    <div sui-statistic>
      <div suiStatValue>22</div>
      <div suiStatLabel>Faves</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>31,200</div>
      <div suiStatLabel>Views</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>22</div>
      <div suiStatLabel>members</div>
    </div>
  </div>`;

  snippetValue = `
  <div sui-statistics>
    <div sui-statistic>
      <div suiStatValue>22</div>
      <div suiStatLabel>Saves</div>
    </div>
    <div sui-statistic>
      <div suiStatValue suiText>Three<br> Thousand</div>
      <div suiStatLabel>Signups</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>
        <i sui-icon suiIconType="plane"></i>
        5
      </div>
      <div suiStatLabel>Flights</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>
        <img sui-image suiCircular suiInline src="https://semantic-ui.com/images/avatar/small/joe.jpg" />
        42
      </div>
      <div suiStatLabel>Team Members</div>
    </div>
  </div>`;

  snippetLabel = `
  <div sui-statistic>
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>`;

  snippetHorizontal = `
  <div sui-statistic suiHorizontal>
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>`;

  snippetHorizontalGroup = `
  <div sui-statistics suiHorizontal>
    <div sui-statistic>
      <div suiStatValue>2,204</div>
      <div suiStatLabel>Views</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>3,322</div>
      <div suiStatLabel>Downloads</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>22</div>
      <div suiStatLabel>Tasks</div>
    </div>
  </div>`;

  snippetColoured = `
  <div sui-statistics>
    <div sui-statistic suiColour="red">
      <div suiStatValue>27</div>
      <div suiStatLabel>Red</div>
    </div>
    <div sui-statistic suiColour="orange">
      <div suiStatValue>8</div>
      <div suiStatLabel>Orange</div>
    </div>
    <div sui-statistic suiColour="yellow">
      <div suiStatValue>28</div>
      <div suiStatLabel>Yellow</div>
    </div>
    <div sui-statistic suiColour="olive">
      <div suiStatValue>7</div>
      <div suiStatLabel>Olive</div>
    </div>
    <div sui-statistic suiColour="green">
      <div suiStatValue>14</div>
      <div suiStatLabel>Green</div>
    </div>
    <div sui-statistic suiColour="teal">
      <div suiStatValue>82</div>
      <div suiStatLabel>Teal</div>
    </div>
    <div sui-statistic suiColour="blue">
      <div suiStatValue>1</div>
      <div suiStatLabel>Blue</div>
    </div>
    <div sui-statistic suiColour="violet">
      <div suiStatValue>22</div>
      <div suiStatLabel>Violet</div>
    </div>
    <div sui-statistic suiColour="purple">
      <div suiStatValue>23</div>
      <div suiStatLabel>Purple</div>
    </div>
    <div sui-statistic suiColour="pink">
      <div suiStatValue>15</div>
      <div suiStatLabel>Pink</div>
    </div>
    <div sui-statistic suiColour="brown">
      <div suiStatValue>36</div>
      <div suiStatLabel>Brown</div>
    </div>
    <div sui-statistic suiColour="grey">
      <div suiStatValue>49</div>
      <div suiStatLabel>Grey</div>
    </div>
  </div>`;

  snippetInverted = `
  <div sui-segment suiInverted>
    <div sui-statistic suiInverted>
      <div suiStatValue>54</div>
      <div suiStatLabel>Inverted</div>
    </div>
    <div sui-statistic suiInverted suiColour="red">
      <div suiStatValue>27</div>
      <div suiStatLabel>Red</div>
    </div>
    <div sui-statistic suiInverted suiColour="orange">
      <div suiStatValue>8</div>
      <div suiStatLabel>Orange</div>
    </div>
    <div sui-statistic suiInverted suiColour="yellow">
      <div suiStatValue>28</div>
      <div suiStatLabel>Yellow</div>
    </div>
    <div sui-statistic suiInverted suiColour="olive">
      <div suiStatValue>7</div>
      <div suiStatLabel>Olive</div>
    </div>
    <div sui-statistic suiInverted suiColour="green">
      <div suiStatValue>14</div>
      <div suiStatLabel>Green</div>
    </div>
    <div sui-statistic suiInverted suiColour="teal">
      <div suiStatValue>82</div>
      <div suiStatLabel>Teal</div>
    </div>
    <div sui-statistic suiInverted suiColour="blue">
      <div suiStatValue>1</div>
      <div suiStatLabel>Blue</div>
    </div>
    <div sui-statistic suiInverted suiColour="violet">
      <div suiStatValue>22</div>
      <div suiStatLabel>Violet</div>
    </div>
    <div sui-statistic suiInverted suiColour="purple">
      <div suiStatValue>23</div>
      <div suiStatLabel>Purple</div>
    </div>
    <div sui-statistic suiInverted suiColour="pink">
      <div suiStatValue>15</div>
      <div suiStatLabel>Pink</div>
    </div>
    <div sui-statistic suiInverted suiColour="brown">
      <div suiStatValue>36</div>
      <div suiStatLabel>Brown</div>
    </div>
    <div sui-statistic suiInverted suiColour="grey">
      <div suiStatValue>49</div>
      <div suiStatLabel>Grey</div>
    </div>
  </div>`;

  snippetEvenlyDivided = `
  <div sui-statistics suiWidth="four">
    <div sui-statistic>
      <div suiStatValue>22</div>
      <div suiStatLabel>Saves</div>
    </div>
    <div sui-statistic>
      <div suiStatValue suiText>Three<br> Thousand</div>
      <div suiStatLabel>Signups</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>
        <i sui-icon suiIconType="plane"></i>
        5
      </div>
      <div suiStatLabel>Flights</div>
    </div>
    <div sui-statistic>
      <div suiStatValue>
        <img sui-image suiCircular suiInline src="https://semantic-ui.com/images/avatar/small/joe.jpg"/>
        42
      </div>
      <div suiStatLabel>Team Members</div>
    </div>
  </div>`;

  snippetFloated = `
  <div sui-segment>
    <div sui-statistic suiFloated="right">
      <div suiStatValue>2,204</div>
      <div suiStatLabel>Views</div>
    </div>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
    <div sui-statistic suiFloated="left">
      <div suiStatValue>2,204</div>
      <div suiStatLabel>Views</div>
    </div>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
    <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
  </div>`;

  snippetSizes = `
  <div sui-statistic suiSize="mini">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic suiSize="tiny">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic suiSize="small">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic>
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic suiSize="large">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic suiSize="huge">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>`;

  snippetHorizontalSizes = `
  <div sui-statistic  suiHorizontal suiSize="mini">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic  suiHorizontal suiSize="tiny">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic  suiHorizontal suiSize="small">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic  suiHorizontal>
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic  suiHorizontal suiSize="large">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>
  <div sui-statistic  suiHorizontal suiSize="huge">
    <div suiStatValue>2,204</div>
    <div suiStatLabel>Views</div>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Statistic | Ngx Semantic');
  }
}

