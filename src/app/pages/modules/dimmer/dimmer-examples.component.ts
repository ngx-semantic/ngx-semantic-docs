import { Component } from '@angular/core';

export class DimmerSampleState {
  simpleDimmerVisible = false;
  contentDimmerVisible = false;
  pageDimmerVisible = false;
  blurringDimmerVisible = false;
  blurringDInvertedDimmerVisible = false;
  topAlignmentDimmerVisible = false;
  bottomAlignmentDimmerVisible = false;
  invertedDimmerVisible = false;
}

@Component({
  selector: 'doc-dimmer-simple-example',
  templateUrl: './snippets/simple.sample.html',
  standalone: false
})
export class DimmerSimpleExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-content-example',
  templateUrl: './snippets/content.sample.html',
  standalone: false
})
export class DimmerContentExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-page-example',
  templateUrl: './snippets/page.sample.html',
  standalone: false
})
export class DimmerPageExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-active-example',
  templateUrl: './snippets/active.sample.html',
  standalone: false
})
export class DimmerActiveExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class DimmerDisabledExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-blurring-example',
  templateUrl: './snippets/blurring.sample.html',
  standalone: false
})
export class DimmerBlurringExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-blurring-inverted-example',
  templateUrl: './snippets/blurring-inverted.sample.html',
  standalone: false
})
export class DimmerBlurringInvertedExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-top-alignment-example',
  templateUrl: './snippets/top-alignment.sample.html',
  standalone: false
})
export class DimmerTopAlignmentExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-bottom-alignment-example',
  templateUrl: './snippets/bottom-alignment.sample.html',
  standalone: false
})
export class DimmerBottomAlignmentExampleComponent extends DimmerSampleState {
}

@Component({
  selector: 'doc-dimmer-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  standalone: false
})
export class DimmerInvertedExampleComponent extends DimmerSampleState {
}
export const DIMMER_EXAMPLES = [
  DimmerSimpleExampleComponent,
  DimmerContentExampleComponent,
  DimmerPageExampleComponent,
  DimmerActiveExampleComponent,
  DimmerDisabledExampleComponent,
  DimmerBlurringExampleComponent,
  DimmerBlurringInvertedExampleComponent,
  DimmerTopAlignmentExampleComponent,
  DimmerBottomAlignmentExampleComponent,
  DimmerInvertedExampleComponent,
];
