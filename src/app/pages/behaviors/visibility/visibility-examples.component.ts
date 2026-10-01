import { Component } from '@angular/core';
import { SuiVisibilityCalculations } from 'ngx-semantic/modules/visibility';

export class VisibilitySampleState {
  calculations: SuiVisibilityCalculations | null = null;
  keys: (keyof SuiVisibilityCalculations)[] = [
    'pixelsPassed', 'percentagePassed', 'fits', 'width', 'height', 'direction',
    'onScreen', 'offScreen', 'passing', 'topVisible', 'bottomVisible', 'topPassed', 'bottomPassed'
  ];

  once = true;
  continuous = false;
  events: string[] = [];

  items: string[] = ['paragraph', 'short-paragraph', 'paragraph', 'short-paragraph'];
  loading = false;
  loads = 0;
  maxLoads = 5;

  people = ['elliot', 'helen', 'jenny', 'joe', 'justen', 'laura', 'matt', 'stevie'];
  loaded = 0;

  shade = 0;
  fixed = false;

  log(event: string): void {
    this.events = [event, ...this.events].slice(0, 10);
  }

  loadMore(): void {
    if (this.loading || this.loads >= this.maxLoads) {
      return;
    }
    this.loading = true;
    // simulate a request for more content
    setTimeout(() => {
      this.items = [...this.items, 'paragraph', 'short-paragraph', 'paragraph'];
      this.loads++;
      this.loading = false;
    }, 800);
  }
}

@Component({
  selector: 'doc-visibility-usage-example',
  templateUrl: './snippets/usage.sample.html',
  standalone: false
})
export class VisibilityUsageExampleComponent extends VisibilitySampleState {
}

@Component({
  selector: 'doc-visibility-frequency-example',
  templateUrl: './snippets/frequency.sample.html',
  standalone: false
})
export class VisibilityFrequencyExampleComponent extends VisibilitySampleState {
}

@Component({
  selector: 'doc-visibility-passed-example',
  templateUrl: './snippets/passed.sample.html',
  standalone: false
})
export class VisibilityPassedExampleComponent extends VisibilitySampleState {
}

@Component({
  selector: 'doc-visibility-infinite-example',
  templateUrl: './snippets/infinite.sample.html',
  standalone: false
})
export class VisibilityInfiniteExampleComponent extends VisibilitySampleState {
}

@Component({
  selector: 'doc-visibility-lazy-images-example',
  templateUrl: './snippets/lazy-images.sample.html',
  standalone: false
})
export class VisibilityLazyImagesExampleComponent extends VisibilitySampleState {
}

@Component({
  selector: 'doc-visibility-gradual-example',
  templateUrl: './snippets/gradual.sample.html',
  standalone: false
})
export class VisibilityGradualExampleComponent extends VisibilitySampleState {
}

export const VISIBILITY_EXAMPLES = [
  VisibilityUsageExampleComponent,
  VisibilityFrequencyExampleComponent,
  VisibilityPassedExampleComponent,
  VisibilityInfiniteExampleComponent,
  VisibilityLazyImagesExampleComponent,
  VisibilityGradualExampleComponent,
];
