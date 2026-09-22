import { Component } from '@angular/core';

@Component({
  selector: 'doc-rail-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class RailBasicExampleComponent {
}

@Component({
  selector: 'doc-rail-internal-example',
  templateUrl: './snippets/internal.sample.html',
  standalone: false
})
export class RailInternalExampleComponent {
}

@Component({
  selector: 'doc-rail-dividing-example',
  templateUrl: './snippets/dividing.sample.html',
  standalone: false
})
export class RailDividingExampleComponent {
}

@Component({
  selector: 'doc-rail-attached-example',
  templateUrl: './snippets/attached.sample.html',
  standalone: false
})
export class RailAttachedExampleComponent {
}
export const RAIL_EXAMPLES = [
  RailBasicExampleComponent,
  RailInternalExampleComponent,
  RailDividingExampleComponent,
  RailAttachedExampleComponent,
];
