import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetTextSrc from './snippets/text.sample.html' with { loader: 'text' };
import snippetTextInvertedSrc from './snippets/text-inverted.sample.html' with { loader: 'text' };
import snippetIndeterminateSrc from './snippets/indeterminate.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/active.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetInlineSrc from './snippets/inline.sample.html' with { loader: 'text' };
import snippetInlineCenteredSrc from './snippets/inline-centered.sample.html' with { loader: 'text' };
import snippetSizesSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetInvertedDimmerSrc from './snippets/inverted-dimmer.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-loaders',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    standalone: false
})
export class LoaderComponent {
  snippetBasic = snippetBasicSrc;
  snippetText = snippetTextSrc;
  snippetTextInverted = snippetTextInvertedSrc;
  snippetIndeterminate = snippetIndeterminateSrc;
  snippetActive = snippetActiveSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetInline = snippetInlineSrc;
  snippetInlineCentered = snippetInlineCenteredSrc;
  snippetSizes = snippetSizesSrc;
  snippetInverted = snippetInvertedSrc;
  snippetInvertedDimmer = snippetInvertedDimmerSrc;












  constructor(title: Title) {
    title.setTitle('Loader | Ngx Semantic');
  }
}
