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

  constructor(title: Title) {
    title.setTitle('Item | Ngx Semantic');
  }
}
