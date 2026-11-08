import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'doc-feed-basic-example',
  templateUrl: './snippets/basic.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedBasicExampleComponent {
}

@Component({
  selector: 'doc-feed-image-label-example',
  templateUrl: './snippets/image-label.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedImageLabelExampleComponent {
}

@Component({
  selector: 'doc-feed-icon-label-example',
  templateUrl: './snippets/icon-label.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedIconLabelExampleComponent {
}

@Component({
  selector: 'doc-feed-header-date-example',
  templateUrl: './snippets/header-date.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedHeaderDateExampleComponent {
}

@Component({
  selector: 'doc-feed-subscript-date-example',
  templateUrl: './snippets/subscript-date.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedSubscriptDateExampleComponent {
}

@Component({
  selector: 'doc-feed-additional-information-example',
  templateUrl: './snippets/additional-information.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedAdditionalInformationExampleComponent {
}

@Component({
  selector: 'doc-feed-size-small-example',
  templateUrl: './snippets/size-small.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedSizeSmallExampleComponent {
}

@Component({
  selector: 'doc-feed-size-large-example',
  templateUrl: './snippets/size-large.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class FeedSizeLargeExampleComponent {
}
export const FEED_EXAMPLES = [
  FeedBasicExampleComponent,
  FeedImageLabelExampleComponent,
  FeedIconLabelExampleComponent,
  FeedHeaderDateExampleComponent,
  FeedSubscriptDateExampleComponent,
  FeedAdditionalInformationExampleComponent,
  FeedSizeSmallExampleComponent,
  FeedSizeLargeExampleComponent,
];
