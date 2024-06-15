import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-item',
  templateUrl: 'item.page.html'
})
export class ItemPage {
  snippetStandard = `
  <div sui-items>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Header</a>
        <div suiItemMeta>
          <span>Description</span>
        </div>
        <div suiItemDescription>
          <p></p>
        </div>
        <div suiItemExtra>
          Additional Details
        </div>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Header</a>
        <div suiItemMeta>
          <span>Description</span>
        </div>
        <div suiItemDescription>
          <p></p>
        </div>
        <div suiItemExtra>
          Additional Details
        </div>
      </div>
    </div>
  </div>`;

  snippetImageContent = `
  <div sui-items suiDivided>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
    </div>
  </div>`;

  snippetContent = `
  <div sui-items suiDivided>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        Content A
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        Content B
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        Content C
      </div>
    </div>
  </div>`;

  snippetHeader = `
  <div sui-items suiDivided>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>12 Years a Slave</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>My Neighbour Totoro</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>Watchmen</a>
      </div>
    </div>
  </div>`;

  snippetMetadata = `
  <div sui-items suiDivided>
    <div sui-item>
      <div sui-image suiSize="small">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Arrowhead Valley Camp</a>
        <div suiItemMeta>
          <span>$1200</span>
          <span>1 Month</span>
        </div>
        <div suiItemDescription>
          <p></p>
        </div>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="small">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Buck's Homebrew Stayaway</a>
        <div suiItemMeta>
          <span>$1000</span>
          <span>2 Weeks</span>
        </div>
        <div suiItemDescription>
          <p></p>
        </div>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="small">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Astrology Camp</a>
        <div suiItemMeta>
          <span>$1600</span>
          <span>6 Weeks</span>
        </div>
        <div suiItemDescription>
          <p></p>
        </div>
      </div>
    </div>
  </div>`;

  snippetLink = `
  <div sui-items>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/stevie.jpg"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Stevie Feliciano</a>
        <div suiItemDescription>
          <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
        </div>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/veronika.jpg"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Veronika Ossi</a>
        <div suiItemDescription>
          <p>Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.</p>
        </div>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/jenny.jpg"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Jenny Hess</a>
        <div suiItemDescription>
          <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
        </div>
      </div>
    </div>
  </div>`;

  snippetDescription = `
  <div sui-items>
    <div sui-item>
      <div sui-image suiSize="small">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Cute Dog</a>
        <div suiItemDescription>
          <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </div>
      </div>
    </div>
  </div>`;

  snippetExtraContent = `
  <div sui-items>
    <div sui-item>
      <div suiItemContent>
        <a suiItemHeader>Cute Dog</a>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/paragraph.png"/>
        </div>
        <div suiItemExtra>
          <i sui-icon suiIconType="green check"></i>
          121 Votes
        </div>
      </div>
    </div>
  </div>`;

  snippetRating = `
  <div sui-items>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/jenny.jpg"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>
          <i sui-icon suiIconType="like"></i>
          Veronika Ossi
        </a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/justen.jpg"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>
          <i sui-icon suiIconType="favorite"></i>
          Justen Kitsune
        </a>
      </div>
    </div>
  </div>`;

  snippetUnstackable = `
  <div sui-items suiUnstackable>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Header</a>
        <div suiItemMeta>
          <span>Description</span>
        </div>
        <div suiItemDescription>
          <p></p>
        </div>
        <div suiItemExtra>
          Additional Details
        </div>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Header</a>
        <div suiItemMeta>
          <span>Description</span>
        </div>
        <div suiItemDescription>
          <p></p>
        </div>
        <div suiItemExtra>
          Additional Details
        </div>
      </div>
    </div>
  </div>`;

  snippetDivided = `
  <div sui-items suiDivided>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>12 Years a Slave</a>
        <div suiItemMeta>
          <span>Union Square 14</span>
        </div>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
        <div suiItemExtra>
          <div sui-label>IMAX</div>
          <div sui-label><i sui-icon suiIconType="globe"></i> Additional Languages</div>
        </div>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>My Neighbor Totoro</a>
        <div suiItemMeta>
          <span>IFC Cinema</span>
        </div>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
        <div suiItemExtra>
          <div sui-button suiEmphasis="primary" suiFloated="right floated">
            Buy tickets
            <i sui-icon suiIconType="right chevron"></i>
          </div>
          <div sui-label>Limited</div>
        </div>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Watchmen</a>
        <div suiItemMeta>
          <span>IFC</span>
        </div>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
        <div suiItemExtra>
          <div sui-button suiEmphasis="primary" suiFloated="right floated">
            Buy tickets
            <i sui-icon suiIconType="right chevron"></i>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  snippetRelaxed = `
  <div sui-items suiRelaxed="relaxed">
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>12 Years a Slave</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>My Neighbor Totoro</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>Watchmen</a>
      </div>
    </div>
  </div>`;

  snippetVeryRelaxed = `
  <div sui-items suiRelaxed="very relaxed">
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>12 Years a Slave</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>My Neighbor Totoro</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>Watchmen</a>
      </div>
    </div>
  </div>`;

  snippetLinkItem = `
  <div sui-items suiLink>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/stevie.jpg"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Stevie Feliciano</a>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/veronika.jpg"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Veronika Ossi</a>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="tiny">
        <img src="https://semantic-ui.com/images/avatar/large/jenny.jpg"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Jenny Hess</a>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
      </div>
    </div>
  </div>`;

  snippetVerticalAlignment = `
  <div sui-items>
    <div sui-item>
      <div sui-image suiSize="small">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent>
        <a suiItemHeader>Top Aligned</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="small">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="middle aligned">
        <a suiItemHeader>Middle Aligned</a>
      </div>
    </div>
    <div sui-item>
      <div sui-image suiSize="small">
        <img src="/assets/images/wireframes/image.png"/>
      </div>
      <div suiItemContent suiAlignment="bottom aligned">
        <a suiItemHeader>Bottom Aligned</a>
      </div>
    </div>
  </div>`;

  snippetFloatedContent = `
  <div sui-items>
    <div sui-item>
      <div suiItemImage>
      <img src="/assets/images/wireframes/image.png"/>
    </div>
      <div suiItemContent>
        <a suiItemHeader>Content A</a>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
        <div suiItemExtra>
          <div sui-button suiFloated="right floated">
            Action
          </div>
        </div>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
      <img src="/assets/images/wireframes/image.png"/>
    </div>
      <div suiItemContent>
        <a suiItemHeader>Content B</a>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
        <div suiItemExtra>
          <div sui-button suiFloated="right floated">
            Action
          </div>
        </div>
      </div>
    </div>
    <div sui-item>
      <div suiItemImage>
      <img src="/assets/images/wireframes/image.png"/>
    </div>
      <div suiItemContent>
        <a suiItemHeader>Content C</a>
        <div suiItemDescription>
          <img src="/assets/images/wireframes/short-paragraph.png"/>
        </div>
        <div suiItemExtra>
          <div sui-button suiFloated="right floated">
            Action
          </div>
        </div>
      </div>
    </div>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Item | Ngx Semantic');
  }
}
