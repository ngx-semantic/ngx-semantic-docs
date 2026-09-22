import {Component, AfterViewChecked} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetFadeSrc from './snippets/fade.sample.html' with { loader: 'text' };
import snippetFadeAltSrc from './snippets/fade-alt.sample.html' with { loader: 'text' };
import snippetMoveSrc from './snippets/move.sample.html' with { loader: 'text' };
import snippetMoveRightSrc from './snippets/move-right.sample.html' with { loader: 'text' };
import snippetMoveUpSrc from './snippets/move-up.sample.html' with { loader: 'text' };
import snippetMoveDownSrc from './snippets/move-down.sample.html' with { loader: 'text' };
import snippetRotateSrc from './snippets/rotate.sample.html' with { loader: 'text' };
import snippetRotateLeftSrc from './snippets/rotate-left.sample.html' with { loader: 'text' };
import snippetVisibleContentSrc from './snippets/visible-content.sample.html' with { loader: 'text' };
import snippetHiddenContentSrc from './snippets/hidden-content.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/active.sample.html' with { loader: 'text' };
import snippetInstantSrc from './snippets/instant.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-reveals',
    templateUrl: './reveal.component.html',
    standalone: false
})
export class RevealComponent {
  snippetFade = snippetFadeSrc;
  snippetFadeAlt = snippetFadeAltSrc;
  snippetMove = snippetMoveSrc;
  snippetMoveRight = snippetMoveRightSrc;
  snippetMoveUp = snippetMoveUpSrc;
  snippetMoveDown = snippetMoveDownSrc;
  snippetRotate = snippetRotateSrc;
  snippetRotateLeft = snippetRotateLeftSrc;
  snippetVisibleContent = snippetVisibleContentSrc;
  snippetHiddenContent = snippetHiddenContentSrc;
  snippetActive = snippetActiveSrc;
  snippetInstant = snippetInstantSrc;
  snippetDisabled = snippetDisabledSrc;














  constructor(title: Title) {
    title.setTitle('Reveal | Ngx Semantic');
  }
}
