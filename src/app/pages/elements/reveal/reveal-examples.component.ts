import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'doc-reveal-fade-example',
  templateUrl: './snippets/fade.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealFadeExampleComponent {
}

@Component({
  selector: 'doc-reveal-fade-alt-example',
  templateUrl: './snippets/fade-alt.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealFadeAltExampleComponent {
}

@Component({
  selector: 'doc-reveal-move-example',
  templateUrl: './snippets/move.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealMoveExampleComponent {
}

@Component({
  selector: 'doc-reveal-move-right-example',
  templateUrl: './snippets/move-right.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealMoveRightExampleComponent {
}

@Component({
  selector: 'doc-reveal-move-up-example',
  templateUrl: './snippets/move-up.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealMoveUpExampleComponent {
}

@Component({
  selector: 'doc-reveal-move-down-example',
  templateUrl: './snippets/move-down.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealMoveDownExampleComponent {
}

@Component({
  selector: 'doc-reveal-rotate-example',
  templateUrl: './snippets/rotate.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealRotateExampleComponent {
}

@Component({
  selector: 'doc-reveal-rotate-left-example',
  templateUrl: './snippets/rotate-left.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealRotateLeftExampleComponent {
}

@Component({
  selector: 'doc-reveal-visible-content-example',
  templateUrl: './snippets/visible-content.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealVisibleContentExampleComponent {
}

@Component({
  selector: 'doc-reveal-hidden-content-example',
  templateUrl: './snippets/hidden-content.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealHiddenContentExampleComponent {
}

@Component({
  selector: 'doc-reveal-active-example',
  templateUrl: './snippets/active.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealActiveExampleComponent {
}

@Component({
  selector: 'doc-reveal-instant-example',
  templateUrl: './snippets/instant.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealInstantExampleComponent {
}

@Component({
  selector: 'doc-reveal-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class RevealDisabledExampleComponent {
}
export const REVEAL_EXAMPLES = [
  RevealFadeExampleComponent,
  RevealFadeAltExampleComponent,
  RevealMoveExampleComponent,
  RevealMoveRightExampleComponent,
  RevealMoveUpExampleComponent,
  RevealMoveDownExampleComponent,
  RevealRotateExampleComponent,
  RevealRotateLeftExampleComponent,
  RevealVisibleContentExampleComponent,
  RevealHiddenContentExampleComponent,
  RevealActiveExampleComponent,
  RevealInstantExampleComponent,
  RevealDisabledExampleComponent,
];
