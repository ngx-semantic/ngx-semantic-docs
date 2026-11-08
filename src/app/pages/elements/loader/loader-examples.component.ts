import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'doc-loader-basic-example',
  templateUrl: './snippets/basic.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderBasicExampleComponent {
}

@Component({
  selector: 'doc-loader-text-example',
  templateUrl: './snippets/text.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderTextExampleComponent {
}

@Component({
  selector: 'doc-loader-text-inverted-example',
  templateUrl: './snippets/text-inverted.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderTextInvertedExampleComponent {
}

@Component({
  selector: 'doc-loader-indeterminate-example',
  templateUrl: './snippets/indeterminate.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderIndeterminateExampleComponent {
}

@Component({
  selector: 'doc-loader-active-example',
  templateUrl: './snippets/active.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderActiveExampleComponent {
}

@Component({
  selector: 'doc-loader-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderDisabledExampleComponent {
}

@Component({
  selector: 'doc-loader-inline-example',
  templateUrl: './snippets/inline.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderInlineExampleComponent {
}

@Component({
  selector: 'doc-loader-inline-centered-example',
  templateUrl: './snippets/inline-centered.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderInlineCenteredExampleComponent {
}

@Component({
  selector: 'doc-loader-size-example',
  templateUrl: './snippets/size.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderSizeExampleComponent {
}

@Component({
  selector: 'doc-loader-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderInvertedExampleComponent {
}

@Component({
  selector: 'doc-loader-inverted-dimmer-example',
  templateUrl: './snippets/inverted-dimmer.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class LoaderInvertedDimmerExampleComponent {
}
export const LOADER_EXAMPLES = [
  LoaderBasicExampleComponent,
  LoaderTextExampleComponent,
  LoaderTextInvertedExampleComponent,
  LoaderIndeterminateExampleComponent,
  LoaderActiveExampleComponent,
  LoaderDisabledExampleComponent,
  LoaderInlineExampleComponent,
  LoaderInlineCenteredExampleComponent,
  LoaderSizeExampleComponent,
  LoaderInvertedExampleComponent,
  LoaderInvertedDimmerExampleComponent,
];
