import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetBasicSrc from './snippets/msg-std.sample.html' with { loader: 'text' };
import snippetListSrc from './snippets/msg-list.sample.html' with { loader: 'text' };
import snippetIcon1Src from './snippets/msg-icon.sample.html' with { loader: 'text' };
import snippetIcon2Src from './snippets/msg-icon2.sample.html' with { loader: 'text' };
import snippetDismissableSrc from './snippets/msg-dissmisable.sample.html' with { loader: 'text' };
import snippetHiddenSrc from './snippets/msg-hidden.sample.html' with { loader: 'text' };
import snippetVisibleSrc from './snippets/msg-visible.sample.html' with { loader: 'text' };
import snippetFloatingSrc from './snippets/msg-floating.sample.html' with { loader: 'text' };
import snippetCompactSrc from './snippets/msg-compact.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/msg-attached.sample.html' with { loader: 'text' };
import snippettWarningSrc from './snippets/msg-warning.sample.html' with { loader: 'text' };
import snippetInfoSrc from './snippets/msg-info.sample.html' with { loader: 'text' };
import snippetSuccessSrc from './snippets/msg-success.sample.html' with { loader: 'text' };
import snippetErrorSrc from './snippets/msg-error.sample.html' with { loader: 'text' };
import snippetColouredSrc from './snippets/msg-coloured.sample.html' with { loader: 'text' };
import snippetSizesSrc from './snippets/msg-sizes.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    standalone: false
})
export class MessagesComponent {
  snippetBasic = snippetBasicSrc;
  snippetList = snippetListSrc;
  snippetIcon1 = snippetIcon1Src;
  snippetIcon2 = snippetIcon2Src;
  snippetDismissable = snippetDismissableSrc;
  snippetHidden = snippetHiddenSrc;
  snippetVisible = snippetVisibleSrc;
  snippetFloating = snippetFloatingSrc;
  snippetCompact = snippetCompactSrc;
  snippetAttached = snippetAttachedSrc;
  snippettWarning = snippettWarningSrc;
  snippetInfo = snippetInfoSrc;
  snippetSuccess = snippetSuccessSrc;
  snippetError = snippetErrorSrc;
  snippetColoured = snippetColouredSrc;
  snippetSizes = snippetSizesSrc;

  isDefinitionsActive = true;
  isApiActive: boolean;
















  constructor(title: Title) {
    title.setTitle('Message | Ngx Semantic');
  }
}
