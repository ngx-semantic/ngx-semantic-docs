import { Component } from '@angular/core';

export class ModalSampleState {
  isStandardModalVisible = false;
  isBasicModalVisible = false;
  isFullScreenModalVisible = false;
  isSizeModalVisible = false;
  isScrollingModalVisible = false;
  isClosableModalVisible = false;
  isMaskClosableModalVisible = false;

  dummyList = Array(10).fill(0).map((x, i) => i);
}

@Component({
  selector: 'doc-modal-standard-example',
  templateUrl: './snippets/standard.sample.html',
  standalone: false
})
export class ModalStandardExampleComponent extends ModalSampleState {
}

@Component({
  selector: 'doc-modal-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class ModalBasicExampleComponent extends ModalSampleState {
}

@Component({
  selector: 'doc-modal-full-screen-example',
  templateUrl: './snippets/full-screen.sample.html',
  standalone: false
})
export class ModalFullScreenExampleComponent extends ModalSampleState {
}

@Component({
  selector: 'doc-modal-size-example',
  templateUrl: './snippets/size.sample.html',
  standalone: false
})
export class ModalSizeExampleComponent extends ModalSampleState {
}

@Component({
  selector: 'doc-modal-scrolling-example',
  templateUrl: './snippets/scrolling.sample.html',
  standalone: false
})
export class ModalScrollingExampleComponent extends ModalSampleState {
}

@Component({
  selector: 'doc-modal-closable-example',
  templateUrl: './snippets/closable.sample.html',
  standalone: false
})
export class ModalClosableExampleComponent extends ModalSampleState {
}

@Component({
  selector: 'doc-modal-mask-closable-example',
  templateUrl: './snippets/mask-closable.sample.html',
  standalone: false
})
export class ModalMaskClosableExampleComponent extends ModalSampleState {
}
export const MODAL_EXAMPLES = [
  ModalStandardExampleComponent,
  ModalBasicExampleComponent,
  ModalFullScreenExampleComponent,
  ModalSizeExampleComponent,
  ModalScrollingExampleComponent,
  ModalClosableExampleComponent,
  ModalMaskClosableExampleComponent,
];
