import { Component } from '@angular/core';

export class StickySampleState {
  stuck = false;
}

@Component({
  selector: 'doc-sticky-sticky-example',
  templateUrl: './snippets/sticky.sample.html',
  standalone: false
})
export class StickyStickyExampleComponent extends StickySampleState {
}

@Component({
  selector: 'doc-sticky-pushing-example',
  templateUrl: './snippets/pushing.sample.html',
  standalone: false
})
export class StickyPushingExampleComponent extends StickySampleState {
}

@Component({
  selector: 'doc-sticky-offset-example',
  templateUrl: './snippets/offset.sample.html',
  standalone: false
})
export class StickyOffsetExampleComponent extends StickySampleState {
}

@Component({
  selector: 'doc-sticky-events-example',
  templateUrl: './snippets/events.sample.html',
  standalone: false
})
export class StickyEventsExampleComponent extends StickySampleState {
}

@Component({
  selector: 'doc-sticky-scroll-context-example',
  templateUrl: './snippets/scroll-context.sample.html',
  standalone: false
})
export class StickyScrollContextExampleComponent extends StickySampleState {
}

export const STICKY_EXAMPLES = [
  StickyStickyExampleComponent,
  StickyPushingExampleComponent,
  StickyOffsetExampleComponent,
  StickyEventsExampleComponent,
  StickyScrollContextExampleComponent,
];
