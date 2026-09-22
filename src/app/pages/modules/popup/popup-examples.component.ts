import { Component } from '@angular/core';

@Component({
  selector: 'doc-popup-standard-example',
  templateUrl: './snippets/standard.sample.html',
  standalone: false
})
export class PopupStandardExampleComponent {
}

@Component({
  selector: 'doc-popup-titled-example',
  templateUrl: './snippets/titled.sample.html',
  standalone: false
})
export class PopupTitledExampleComponent {
}

@Component({
  selector: 'doc-popup-html-example',
  templateUrl: './snippets/html.sample.html',
  standalone: false
})
export class PopupHtmlExampleComponent {
}

@Component({
  selector: 'doc-popup-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class PopupBasicExampleComponent {
}

@Component({
  selector: 'doc-popup-width-example',
  templateUrl: './snippets/width.sample.html',
  standalone: false
})
export class PopupWidthExampleComponent {
}

@Component({
  selector: 'doc-popup-fluid-example',
  templateUrl: './snippets/fluid.sample.html',
  standalone: false
})
export class PopupFluidExampleComponent {
}

@Component({
  selector: 'doc-popup-size-example',
  templateUrl: './snippets/size.sample.html',
  standalone: false
})
export class PopupSizeExampleComponent {
}

@Component({
  selector: 'doc-popup-flowing-example',
  templateUrl: './snippets/flowing.sample.html',
  standalone: false
})
export class PopupFlowingExampleComponent {
}

@Component({
  selector: 'doc-popup-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  standalone: false
})
export class PopupInvertedExampleComponent {
}

@Component({
  selector: 'doc-popup-position-example',
  templateUrl: './snippets/position.sample.html',
  standalone: false
})
export class PopupPositionExampleComponent {
}
export const POPUP_EXAMPLES = [
  PopupStandardExampleComponent,
  PopupTitledExampleComponent,
  PopupHtmlExampleComponent,
  PopupBasicExampleComponent,
  PopupWidthExampleComponent,
  PopupFluidExampleComponent,
  PopupSizeExampleComponent,
  PopupFlowingExampleComponent,
  PopupInvertedExampleComponent,
  PopupPositionExampleComponent,
];
