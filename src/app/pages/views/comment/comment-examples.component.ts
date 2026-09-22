import { Component } from '@angular/core';

@Component({
  selector: 'doc-comment-comments-example',
  templateUrl: './snippets/comments.sample.html',
  standalone: false
})
export class CommentCommentsExampleComponent {
}

@Component({
  selector: 'doc-comment-avatar-example',
  templateUrl: './snippets/avatar.sample.html',
  standalone: false
})
export class CommentAvatarExampleComponent {
}

@Component({
  selector: 'doc-comment-metadata-example',
  templateUrl: './snippets/metadata.sample.html',
  standalone: false
})
export class CommentMetadataExampleComponent {
}

@Component({
  selector: 'doc-comment-actions-example',
  templateUrl: './snippets/actions.sample.html',
  standalone: false
})
export class CommentActionsExampleComponent {
}

@Component({
  selector: 'doc-comment-reply-form-example',
  templateUrl: './snippets/reply-form.sample.html',
  standalone: false
})
export class CommentReplyFormExampleComponent {
}

@Component({
  selector: 'doc-comment-collapsed-example',
  templateUrl: './snippets/collapsed.sample.html',
  standalone: false
})
export class CommentCollapsedExampleComponent {
}

@Component({
  selector: 'doc-comment-threaded-example',
  templateUrl: './snippets/threaded.sample.html',
  standalone: false
})
export class CommentThreadedExampleComponent {
}

@Component({
  selector: 'doc-comment-minimal-example',
  templateUrl: './snippets/minimal.sample.html',
  standalone: false
})
export class CommentMinimalExampleComponent {
}

@Component({
  selector: 'doc-comment-size-small-example',
  templateUrl: './snippets/size-small.sample.html',
  standalone: false
})
export class CommentSizeSmallExampleComponent {
}

@Component({
  selector: 'doc-comment-size-large-example',
  templateUrl: './snippets/size-large.sample.html',
  standalone: false
})
export class CommentSizeLargeExampleComponent {
}
export const COMMENT_EXAMPLES = [
  CommentCommentsExampleComponent,
  CommentAvatarExampleComponent,
  CommentMetadataExampleComponent,
  CommentActionsExampleComponent,
  CommentReplyFormExampleComponent,
  CommentCollapsedExampleComponent,
  CommentThreadedExampleComponent,
  CommentMinimalExampleComponent,
  CommentSizeSmallExampleComponent,
  CommentSizeLargeExampleComponent,
];
