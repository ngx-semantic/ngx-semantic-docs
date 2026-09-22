import { Component } from '@angular/core';

export class ProgressSampleState {
  standardValue = 31;
  indicatingValue = 40;

  addToStandard(value: number): void {
    let computedValue = this.standardValue + value;

    if (computedValue > 100) {
      computedValue = 100;
    } else if (computedValue < 0) {
      computedValue = 0;
    }

    this.standardValue = computedValue;
  }

  addToIndicating(value: number): void {
    let computedValue = this.indicatingValue + value;

    if (computedValue > 100) {
      computedValue = 100;
    } else if (computedValue < 0) {
      computedValue = 0;
    }

    this.indicatingValue = computedValue;
  }
}

@Component({
  selector: 'doc-progress-standard-example',
  templateUrl: './snippets/standard.sample.html',
  standalone: false
})
export class ProgressStandardExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-indicating-example',
  templateUrl: './snippets/indicating.sample.html',
  standalone: false
})
export class ProgressIndicatingExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-bar-example',
  templateUrl: './snippets/bar.sample.html',
  standalone: false
})
export class ProgressBarExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-progress-example',
  templateUrl: './snippets/progress.sample.html',
  standalone: false
})
export class ProgressProgressExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-label-example',
  templateUrl: './snippets/label.sample.html',
  standalone: false
})
export class ProgressLabelExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-active-example',
  templateUrl: './snippets/active.sample.html',
  standalone: false
})
export class ProgressActiveExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-success-example',
  templateUrl: './snippets/success.sample.html',
  standalone: false
})
export class ProgressSuccessExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-warning-example',
  templateUrl: './snippets/warning.sample.html',
  standalone: false
})
export class ProgressWarningExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-error-example',
  templateUrl: './snippets/error.sample.html',
  standalone: false
})
export class ProgressErrorExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class ProgressDisabledExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  standalone: false
})
export class ProgressInvertedExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-attached-example',
  templateUrl: './snippets/attached.sample.html',
  standalone: false
})
export class ProgressAttachedExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-card-attached-example',
  templateUrl: './snippets/card-attached.sample.html',
  standalone: false
})
export class ProgressCardAttachedExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-size-example',
  templateUrl: './snippets/size.sample.html',
  standalone: false
})
export class ProgressSizeExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-colour-example',
  templateUrl: './snippets/colour.sample.html',
  standalone: false
})
export class ProgressColourExampleComponent extends ProgressSampleState {
}

@Component({
  selector: 'doc-progress-inverted-colour-example',
  templateUrl: './snippets/inverted-colour.sample.html',
  standalone: false
})
export class ProgressInvertedColourExampleComponent extends ProgressSampleState {
}
export const PROGRESS_EXAMPLES = [
  ProgressStandardExampleComponent,
  ProgressIndicatingExampleComponent,
  ProgressBarExampleComponent,
  ProgressProgressExampleComponent,
  ProgressLabelExampleComponent,
  ProgressActiveExampleComponent,
  ProgressSuccessExampleComponent,
  ProgressWarningExampleComponent,
  ProgressErrorExampleComponent,
  ProgressDisabledExampleComponent,
  ProgressInvertedExampleComponent,
  ProgressAttachedExampleComponent,
  ProgressCardAttachedExampleComponent,
  ProgressSizeExampleComponent,
  ProgressColourExampleComponent,
  ProgressInvertedColourExampleComponent,
];
