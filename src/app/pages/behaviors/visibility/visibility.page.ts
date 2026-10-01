import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetUsage from './snippets/usage.sample.html' with { loader: 'text' };
import snippetUsageTs from './snippets/usage.sample.txt' with { loader: 'text' };
import snippetFrequency from './snippets/frequency.sample.html' with { loader: 'text' };
import snippetFrequencyTs from './snippets/frequency.sample.txt' with { loader: 'text' };
import snippetPassed from './snippets/passed.sample.html' with { loader: 'text' };
import snippetPassedTs from './snippets/passed.sample.txt' with { loader: 'text' };
import snippetInfinite from './snippets/infinite.sample.html' with { loader: 'text' };
import snippetInfiniteTs from './snippets/infinite.sample.txt' with { loader: 'text' };
import snippetLazyImages from './snippets/lazy-images.sample.html' with { loader: 'text' };
import snippetLazyImagesTs from './snippets/lazy-images.sample.txt' with { loader: 'text' };
import snippetGradual from './snippets/gradual.sample.html' with { loader: 'text' };
import snippetFixed from './snippets/fixed.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-visibility',
  templateUrl: './visibility.page.html',
  styles: [`
    :host ::ng-deep .visibility-scroller {
      height: 22rem;
      overflow-y: auto;
      padding-right: 0.5rem;
    }
  `],
  standalone: false
})
export class VisibilityPage {
  snippetUsage = snippetUsage;
  snippetUsageTs = snippetUsageTs;
  snippetFrequency = snippetFrequency;
  snippetFrequencyTs = snippetFrequencyTs;
  snippetPassed = snippetPassed;
  snippetPassedTs = snippetPassedTs;
  snippetInfinite = snippetInfinite;
  snippetInfiniteTs = snippetInfiniteTs;
  snippetLazyImages = snippetLazyImages;
  snippetLazyImagesTs = snippetLazyImagesTs;
  snippetGradual = snippetGradual;
  snippetFixed = snippetFixed;

  constructor(title: Title) {
    title.setTitle('Visibility | Ngx Semantic');
  }
}
