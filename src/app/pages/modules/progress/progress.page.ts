import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetIndicatingSrc from './snippets/indicating.sample.html' with { loader: 'text' };
import snippetIndicatingTsSrc from './snippets/indicating.sample.txt' with { loader: 'text' };
import snippetBarSrc from './snippets/bar.sample.html' with { loader: 'text' };
import snippetProgressSrc from './snippets/progress.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/active.sample.html' with { loader: 'text' };
import snippetSuccessSrc from './snippets/success.sample.html' with { loader: 'text' };
import snippetWarningSrc from './snippets/warning.sample.html' with { loader: 'text' };
import snippetErrorSrc from './snippets/error.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/attached.sample.html' with { loader: 'text' };
import snippetCardAttachedSrc from './snippets/card-attached.sample.html' with { loader: 'text' };
import snippetSizeSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetColourSrc from './snippets/colour.sample.html' with { loader: 'text' };
import snippetInvertedColourSrc from './snippets/inverted-colour.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-progress',
    templateUrl: 'progress.page.html',
    standalone: false
})
export class ProgressPage {
  snippetStandard = snippetStandardSrc;
  snippetIndicating = snippetIndicatingSrc;
  snippetIndicatingTs = snippetIndicatingTsSrc;
  snippetBar = snippetBarSrc;
  snippetProgress = snippetProgressSrc;
  snippetActive = snippetActiveSrc;
  snippetSuccess = snippetSuccessSrc;
  snippetWarning = snippetWarningSrc;
  snippetError = snippetErrorSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetInverted = snippetInvertedSrc;
  snippetAttached = snippetAttachedSrc;
  snippetCardAttached = snippetCardAttachedSrc;
  snippetSize = snippetSizeSrc;
  snippetColour = snippetColourSrc;
  snippetInvertedColour = snippetInvertedColourSrc;

















  standardValue = 31;
  indicatingValue = 40;

  constructor(title: Title) {
    title.setTitle('Progress | Ngx Semantic');
  }

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
