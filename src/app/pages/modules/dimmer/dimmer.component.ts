import { AfterViewChecked, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetSimpleSrc from './snippets/simple.sample.html' with { loader: 'text' };
import snippetSharedTsSrc from './snippets/simple.sample.txt' with { loader: 'text' };
import snippetContentSrc from './snippets/content.sample.html' with { loader: 'text' };
import snippetPageSrc from './snippets/page.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/active.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetBlurringSrc from './snippets/blurring.sample.html' with { loader: 'text' };
import snippetBlurringInvertedSrc from './snippets/blurring-inverted.sample.html' with { loader: 'text' };
import snippetTopAlignedSrc from './snippets/top-alignment.sample.html' with { loader: 'text' };
import snippetBottomAlignedSrc from './snippets/bottom-alignment.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-dimmer',
    templateUrl: './dimmer.component.html',
    styles: [`
      button {
          margin-bottom: 1.2rem !important;
      }
  `],
    standalone: false
})
export class DimmerComponent {
  snippetSimple = snippetSimpleSrc;
  snippetSharedTs = snippetSharedTsSrc;
  snippetContent = snippetContentSrc;
  snippetPage = snippetPageSrc;
  snippetActive = snippetActiveSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetBlurring = snippetBlurringSrc;
  snippetBlurringInverted = snippetBlurringInvertedSrc;
  snippetTopAligned = snippetTopAlignedSrc;
  snippetBottomAligned = snippetBottomAlignedSrc;
  snippetInverted = snippetInvertedSrc;

  simpleDimmerVisible = false;
  contentDimmerVisible = false;
  pageDimmerVisible = false;
  blurringDimmerVisible = false;
  blurringDInvertedDimmerVisible = false;
  topAlignmentDimmerVisible = false;
  bottomAlignmentDimmerVisible = false;
  invertedDimmerVisible = false;












  constructor(title: Title) {
    title.setTitle('Dimmer | Ngx Semantic');
  }
}
