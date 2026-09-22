import { Component } from '@angular/core';

export class TabSampleState {
  isDefinitionsActive = true;
  isApiActive: boolean;

  colours = ['red', 'orange', 'green', 'blue', 'violet'];

  tabColour = 'blue';
  isTabDisabled = false;
}

@Component({
  selector: 'doc-tab-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class TabBasicExampleComponent extends TabSampleState {
}

@Component({
  selector: 'doc-tab-pointing-menu-example',
  templateUrl: './snippets/pointing-menu.sample.html',
  standalone: false
})
export class TabPointingMenuExampleComponent extends TabSampleState {
}

@Component({
  selector: 'doc-tab-text-menu-example',
  templateUrl: './snippets/text-menu.sample.html',
  standalone: false
})
export class TabTextMenuExampleComponent extends TabSampleState {
}

@Component({
  selector: 'doc-tab-loading-example',
  templateUrl: './snippets/loading.sample.html',
  standalone: false
})
export class TabLoadingExampleComponent extends TabSampleState {
}

@Component({
  selector: 'doc-tab-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class TabDisabledExampleComponent extends TabSampleState {
}

@Component({
  selector: 'doc-tab-positioned-example',
  templateUrl: './snippets/positioned.sample.html',
  standalone: false
})
export class TabPositionedExampleComponent extends TabSampleState {
}

@Component({
  selector: 'doc-tab-coloured-example',
  templateUrl: './snippets/coloured.sample.html',
  standalone: false
})
export class TabColouredExampleComponent extends TabSampleState {
}
export const TAB_EXAMPLES = [
  TabBasicExampleComponent,
  TabPointingMenuExampleComponent,
  TabTextMenuExampleComponent,
  TabLoadingExampleComponent,
  TabDisabledExampleComponent,
  TabPositionedExampleComponent,
  TabColouredExampleComponent,
];
