import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetStandardTsSrc from './snippets/standard.sample.txt' with { loader: 'text' };
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetBasicTsSrc from './snippets/basic.sample.txt' with { loader: 'text' };
import snippetFullScreenSrc from './snippets/full-screen.sample.html' with { loader: 'text' };
import snippetFullScreenTsSrc from './snippets/full-screen.sample.txt' with { loader: 'text' };
import snippetSizeSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetSizeTsSrc from './snippets/size.sample.txt' with { loader: 'text' };
import snippetScrollingSrc from './snippets/scrolling.sample.html' with { loader: 'text' };
import snippetScrollingTsSrc from './snippets/scrolling.sample.txt' with { loader: 'text' };
import snippetClosableSrc from './snippets/closable.sample.html' with { loader: 'text' };
import snippetClosableTsSrc from './snippets/closable.sample.txt' with { loader: 'text' };
import snippetMaskClosableSrc from './snippets/mask-closable.sample.html' with { loader: 'text' };
import snippetMaskClosableTsSrc from './snippets/mask-closable.sample.txt' with { loader: 'text' };

@Component({
    selector: 'doc-modal',
    templateUrl: './modal.page.html',
    styles: [],
    standalone: false
})
export class ModalPage {
  snippetStandard = snippetStandardSrc;
  snippetStandardTs = snippetStandardTsSrc;
  snippetBasic = snippetBasicSrc;
  snippetBasicTs = snippetBasicTsSrc;
  snippetFullScreen = snippetFullScreenSrc;
  snippetFullScreenTs = snippetFullScreenTsSrc;
  snippetSize = snippetSizeSrc;
  snippetSizeTs = snippetSizeTsSrc;
  snippetScrolling = snippetScrollingSrc;
  snippetScrollingTs = snippetScrollingTsSrc;
  snippetClosable = snippetClosableSrc;
  snippetClosableTs = snippetClosableTsSrc;
  snippetMaskClosable = snippetMaskClosableSrc;
  snippetMaskClosableTs = snippetMaskClosableTsSrc;

  isStandardModalVisible = false;
  isBasicModalVisible = false;
  isFullScreenModalVisible = false;
  isSizeModalVisible = false;
  isScrollingModalVisible = false;
  isClosableModalVisible = false;
  isMaskClosableModalVisible = false;

  dummyList = Array(10).fill(0).map((x, i) => i);















  constructor(title: Title) {
    title.setTitle('Modal | Ngx Semantic');
  }
}
