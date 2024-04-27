import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-feed',
  templateUrl: 'feed.page.html',
})
export class FeedPage {
  snippetBasic = `
  <div sui-feed>
    <div suiFeedEvent
         suiLabelImageUrl="/assets/images/elliot.jpg">
      <div suiFeedSummary>
        <a suiFeedUser>
          Elliot Fu
        </a> added you as a friend
        <div suiFeedDate>
          1 Hour Ago
        </div>
      </div>
      <div suiFeedMeta>
        <a suiFeedLike>
          <i sui-icon suiIconType="like"></i> 4 Likes
        </a>
      </div>
    </div>

    <div suiFeedEvent
         suiLabelImageUrl="/assets/images/helen.jpg">
      <div suiFeedSummary>
        <a>Helen Troy</a> added <a>2 new illustrations</a>
        <div suiFeedDate>
          4 days ago
        </div>
      </div>
      <div suiFeedExtra
           suiExtraType="images">
        <a><img src="/assets/images/wireframes/image.png"></a>
        <a><img src="/assets/images/wireframes/image.png"></a>
      </div>
      <div suiFeedMeta>
        <a suiFeedLike>
          <i sui-icon suiIconType="like"></i> 1 Like
        </a>
      </div>
    </div>

    <div suiFeedEvent
         suiLabelImageUrl="/assets/images/jenny.jpg">
      <div suiFeedSummary>
        <a suiFeedUser>
          Jenny Hess
        </a> added you as a friend
        <div suiFeedDate>
          2 Days Ago
        </div>
      </div>
      <div suiFeedMeta>
        <a suiFeedLike>
          <i sui-icon suiIconType="like"></i> 8 Likes
        </a>
      </div>
    </div>

    <div suiFeedEvent
         suiLabelImageUrl="/assets/images/joe.jpg">
      <div suiFeedSummary>
        <a>Joe Henderson</a> posted on his page
        <div suiFeedDate>
          3 days ago
        </div>
      </div>
      <div suiFeedExtra
           suiExtraType="text">
        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting
        all over again. Even if we don't run extra laps that day, we surely will come back for more of the same
        another day soon.
      </div>
      <div suiFeedMeta>
        <a suiFeedLike>
          <i sui-icon suiIconType="like"></i> 5 Likes
        </a>
      </div>
    </div>

    <div suiFeedEvent
         suiLabelImageUrl="/assets/images/justen.jpg">
      <div suiFeedSummary>
        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
        <div suiFeedDate>
          4 days ago
        </div>
      </div>
      <div suiFeedExtra
           suiExtraType="images">
        <a><img src="/assets/images/wireframes/image.png"></a>
        <a><img src="/assets/images/wireframes/image.png"></a>
      </div>
      <div suiFeedMeta>
        <a suiFeedLike>
          <i sui-icon suiIconType="like"></i> 41 Likes
        </a>
      </div>
    </div>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Feed | Ngx Semantic');
  }
}
