import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-comment',
  templateUrl: 'comment.page.html',
  standalone: false
})
export class CommentPage {
  snippetComments = `
  <div sui-comments>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/justen.jpg" alt="Matt">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Matt</a>
        <div suiCommentMetadata>
          <span class="date">Today at 5:42PM</span>
        </div>
        <div suiCommentText>How artistic!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/elliot.jpg" alt="Elliot Fu">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Elliot Fu</a>
        <div suiCommentMetadata>
          <span class="date">Yesterday at 12:30AM</span>
        </div>
        <div suiCommentText>This has been very useful for my research. Thanks as well!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/jenny.jpg" alt="Jenny Hess">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Jenny Hess</a>
        <div suiCommentMetadata>
          <span class="date">Just now</span>
        </div>
        <div suiCommentText>Elliot you are always so right :)</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/joe.jpg" alt="Joe Henderson">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Joe Henderson</a>
        <div suiCommentMetadata>
          <span class="date">5 days ago</span>
        </div>
        <div suiCommentText>Dude, this is awesome. Thanks so much</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  snippetAvatar = `
  <div sui-comments>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/elliot.jpg" alt="Elliot Fu">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Elliot Fu</a>
        <div suiCommentMetadata>
          <span class="date">Yesterday at 12:30AM</span>
        </div>
        <div suiCommentText>This has been very useful for my research. Thanks as well!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  snippetMetadata = `
  <div sui-comments>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/helen.jpg" alt="Stevie Feliciano">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Stevie Feliciano</a>
        <div suiCommentMetadata>
          <span class="date">2 days ago</span>
          <span class="rating">
            <i sui-icon suiIconType="star"></i> 5 Faves
          </span>
        </div>
        <div suiCommentText>Hey guys, I hope this example comment is helping you read this documentation.</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  snippetActions = `
  <div sui-comments>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/laura.jpg" alt="Tom Lukic">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Tom Lukic</a>
        <div suiCommentText>This will be great for business reports. I will definitely download this.</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
          <a>Save</a>
          <a>Hide</a>
          <a>
            <i sui-icon suiIconType="expand"></i> Full-screen
          </a>
        </div>
      </div>
    </div>
  </div>`;

  snippetReplyForm = `
  <div sui-comments>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/justen.jpg" alt="Steve Jobes">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Steve Jobes</a>
        <div suiCommentMetadata>
          <span class="date">2 days ago</span>
        </div>
        <div suiCommentText>Revolutionary!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
        <form suiCommentReply class="ui form">
          <div class="field">
            <textarea rows="3" placeholder="Add a reply..."></textarea>
          </div>
          <button sui-button type="button">Add Reply</button>
        </form>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/joe.jpg" alt="Joe Henderson">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Joe Henderson</a>
        <div suiCommentMetadata>
          <span class="date">1 day ago</span>
        </div>
        <div suiCommentText>
          The hours, minutes and seconds stand as visible reminders that your effort put them all there.
          Preserve until your next run, when the watch lets you see how Impermanent your efforts are.
        </div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/helen.jpg" alt="Christian Rocha">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Christian Rocha</a>
        <div suiCommentMetadata>
          <span class="date">2 days ago</span>
        </div>
        <div suiCommentText>I re-tweeted this.</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>
  <form suiCommentReply class="ui form">
    <div class="field">
      <textarea rows="3" placeholder="Add a comment..."></textarea>
    </div>
    <button sui-button type="button">Add Comment</button>
  </form>`;

  snippetCollapsed = `
  <div sui-comments suiCollapsed>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/helen.jpg" alt="Christian Rocha">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Christian Rocha</a>
        <div suiCommentMetadata>
          <span class="date">2 days ago</span>
        </div>
        <div suiCommentText>
          I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket?
        </div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/elliot.jpg" alt="Elliot Fu">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Elliot Fu</a>
        <div suiCommentMetadata>
          <span class="date">1 day ago</span>
        </div>
        <div suiCommentText>No, it wont</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/jenny.jpg" alt="Jenny Hess">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Jenny Hess</a>
        <div suiCommentMetadata>
          <span class="date">20 minutes ago</span>
        </div>
        <div suiCommentText>Maybe it would.</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  snippetThreaded = `
  <div sui-comments suiThreaded>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/justen.jpg" alt="Matt">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Matt</a>
        <div suiCommentMetadata>
          <span class="date">Today at 5:42PM</span>
        </div>
        <div suiCommentText>How artistic!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
      <div class="comments">
        <div sui-comment>
          <a suiCommentAvatar>
            <img src="/assets/images/elliot.jpg" alt="Elliot Fu">
          </a>
          <div suiCommentContent>
            <a suiCommentAuthor>Elliot Fu</a>
            <div suiCommentMetadata>
              <span class="date">Yesterday at 12:30AM</span>
            </div>
            <div suiCommentText>This has been very useful for my research. Thanks as well!</div>
            <div suiCommentActions>
              <a class="reply">Reply</a>
            </div>
          </div>
          <div class="comments">
            <div sui-comment>
              <a suiCommentAvatar>
                <img src="/assets/images/jenny.jpg" alt="Jenny Hess">
              </a>
              <div suiCommentContent>
                <a suiCommentAuthor>Jenny Hess</a>
                <div suiCommentMetadata>
                  <span class="date">Just now</span>
                </div>
                <div suiCommentText>Elliot you are always so right :)</div>
                <div suiCommentActions>
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/joe.jpg" alt="Joe Henderson">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Joe Henderson</a>
        <div suiCommentMetadata>
          <span class="date">5 days ago</span>
        </div>
        <div suiCommentText>Dude, this is awesome. Thanks so much</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  snippetMinimal = `
  <div sui-comments suiMinimal>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/justen.jpg" alt="Matt">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Matt</a>
        <div suiCommentMetadata>
          <span class="date">Today at 5:42PM</span>
        </div>
        <div suiCommentText>How artistic!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/elliot.jpg" alt="Elliot Fu">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Elliot Fu</a>
        <div suiCommentMetadata>
          <span class="date">Yesterday at 12:30AM</span>
        </div>
        <div suiCommentText>This has been very useful for my research. Thanks as well!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/jenny.jpg" alt="Jenny Hess">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Jenny Hess</a>
        <div suiCommentMetadata>
          <span class="date">Just now</span>
        </div>
        <div suiCommentText>Elliot you are always so right :)</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/joe.jpg" alt="Joe Henderson">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Joe Henderson</a>
        <div suiCommentMetadata>
          <span class="date">5 days ago</span>
        </div>
        <div suiCommentText>Dude, this is awesome. Thanks so much</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  snippetSizeSmall = `
  <div sui-comments suiSize="small">
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/justen.jpg" alt="Matt">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Matt</a>
        <div suiCommentMetadata>
          <span class="date">Today at 5:42PM</span>
        </div>
        <div suiCommentText>How artistic!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/elliot.jpg" alt="Elliot Fu">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Elliot Fu</a>
        <div suiCommentMetadata>
          <span class="date">Yesterday at 12:30AM</span>
        </div>
        <div suiCommentText>This has been very useful for my research. Thanks as well!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/jenny.jpg" alt="Jenny Hess">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Jenny Hess</a>
        <div suiCommentMetadata>
          <span class="date">Just now</span>
        </div>
        <div suiCommentText>Elliot you are always so right :)</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/joe.jpg" alt="Joe Henderson">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Joe Henderson</a>
        <div suiCommentMetadata>
          <span class="date">5 days ago</span>
        </div>
        <div suiCommentText>Dude, this is awesome. Thanks so much</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  snippetSizeLarge = `
  <div sui-comments suiSize="large">
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/justen.jpg" alt="Matt">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Matt</a>
        <div suiCommentMetadata>
          <span class="date">Today at 5:42PM</span>
        </div>
        <div suiCommentText>How artistic!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/elliot.jpg" alt="Elliot Fu">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Elliot Fu</a>
        <div suiCommentMetadata>
          <span class="date">Yesterday at 12:30AM</span>
        </div>
        <div suiCommentText>This has been very useful for my research. Thanks as well!</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/jenny.jpg" alt="Jenny Hess">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Jenny Hess</a>
        <div suiCommentMetadata>
          <span class="date">Just now</span>
        </div>
        <div suiCommentText>Elliot you are always so right :)</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
    <div sui-comment>
      <a suiCommentAvatar>
        <img src="/assets/images/joe.jpg" alt="Joe Henderson">
      </a>
      <div suiCommentContent>
        <a suiCommentAuthor>Joe Henderson</a>
        <div suiCommentMetadata>
          <span class="date">5 days ago</span>
        </div>
        <div suiCommentText>Dude, this is awesome. Thanks so much</div>
        <div suiCommentActions>
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Comment | Ngx Semantic');
  }
}
