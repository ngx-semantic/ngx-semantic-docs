import { Component, ChangeDetectionStrategy } from '@angular/core';

export class MessagesSampleState {
  isDefinitionsActive = true;
  isApiActive: boolean;
}

@Component({
  selector: 'doc-messages-msg-std-example',
  templateUrl: './snippets/msg-std.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgStdExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-list-example',
  templateUrl: './snippets/msg-list.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgListExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-icon-example',
  templateUrl: './snippets/msg-icon.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgIconExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-icon2-example',
  templateUrl: './snippets/msg-icon2.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgIcon2ExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-dissmisable-example',
  templateUrl: './snippets/msg-dissmisable.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgDissmisableExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-hidden-example',
  templateUrl: './snippets/msg-hidden.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgHiddenExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-visible-example',
  templateUrl: './snippets/msg-visible.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgVisibleExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-floating-example',
  templateUrl: './snippets/msg-floating.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgFloatingExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-compact-example',
  templateUrl: './snippets/msg-compact.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgCompactExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-attached-example',
  templateUrl: './snippets/msg-attached.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgAttachedExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-warning-example',
  templateUrl: './snippets/msg-warning.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgWarningExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-info-example',
  templateUrl: './snippets/msg-info.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgInfoExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-success-example',
  templateUrl: './snippets/msg-success.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgSuccessExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-error-example',
  templateUrl: './snippets/msg-error.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgErrorExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-coloured-example',
  templateUrl: './snippets/msg-coloured.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgColouredExampleComponent extends MessagesSampleState {
}

@Component({
  selector: 'doc-messages-msg-sizes-example',
  templateUrl: './snippets/msg-sizes.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class MessagesMsgSizesExampleComponent extends MessagesSampleState {
}
export const MESSAGES_EXAMPLES = [
  MessagesMsgStdExampleComponent,
  MessagesMsgListExampleComponent,
  MessagesMsgIconExampleComponent,
  MessagesMsgIcon2ExampleComponent,
  MessagesMsgDissmisableExampleComponent,
  MessagesMsgHiddenExampleComponent,
  MessagesMsgVisibleExampleComponent,
  MessagesMsgFloatingExampleComponent,
  MessagesMsgCompactExampleComponent,
  MessagesMsgAttachedExampleComponent,
  MessagesMsgWarningExampleComponent,
  MessagesMsgInfoExampleComponent,
  MessagesMsgSuccessExampleComponent,
  MessagesMsgErrorExampleComponent,
  MessagesMsgColouredExampleComponent,
  MessagesMsgSizesExampleComponent,
];
