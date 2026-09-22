import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetCommentsSrc from './snippets/comments.sample.html' with { loader: 'text' };
import snippetAvatarSrc from './snippets/avatar.sample.html' with { loader: 'text' };
import snippetMetadataSrc from './snippets/metadata.sample.html' with { loader: 'text' };
import snippetActionsSrc from './snippets/actions.sample.html' with { loader: 'text' };
import snippetReplyFormSrc from './snippets/reply-form.sample.html' with { loader: 'text' };
import snippetCollapsedSrc from './snippets/collapsed.sample.html' with { loader: 'text' };
import snippetThreadedSrc from './snippets/threaded.sample.html' with { loader: 'text' };
import snippetMinimalSrc from './snippets/minimal.sample.html' with { loader: 'text' };
import snippetSizeSmallSrc from './snippets/size-small.sample.html' with { loader: 'text' };
import snippetSizeLargeSrc from './snippets/size-large.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-comment',
  templateUrl: 'comment.page.html',
  standalone: false
})
export class CommentPage {
  snippetComments = snippetCommentsSrc;
  snippetAvatar = snippetAvatarSrc;
  snippetMetadata = snippetMetadataSrc;
  snippetActions = snippetActionsSrc;
  snippetReplyForm = snippetReplyFormSrc;
  snippetCollapsed = snippetCollapsedSrc;
  snippetThreaded = snippetThreadedSrc;
  snippetMinimal = snippetMinimalSrc;
  snippetSizeSmall = snippetSizeSmallSrc;
  snippetSizeLarge = snippetSizeLargeSrc;











  constructor(title: Title) {
    title.setTitle('Comment | Ngx Semantic');
  }
}
