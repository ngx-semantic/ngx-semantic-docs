import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetTitledSrc from './snippets/titled.sample.html' with { loader: 'text' };
import snippetHtmlSrc from './snippets/html.sample.html' with { loader: 'text' };
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetWidthSrc from './snippets/width.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetSizeSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetFlowingSrc from './snippets/flowing.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetPositionSrc from './snippets/position.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-popup',
    templateUrl: 'popup.page.html',
    standalone: false
})
export class PopupPage {
  snippetStandard = snippetStandardSrc;
  snippetTitled = snippetTitledSrc;
  snippetHtml = snippetHtmlSrc;
  snippetBasic = snippetBasicSrc;
  snippetWidth = snippetWidthSrc;
  snippetFluid = snippetFluidSrc;
  snippetSize = snippetSizeSrc;
  snippetFlowing = snippetFlowingSrc;
  snippetInverted = snippetInvertedSrc;
  snippetPosition = snippetPositionSrc;











  constructor(title: Title) {
    title.setTitle('Popup | Ngx Semantic');
  }
}
