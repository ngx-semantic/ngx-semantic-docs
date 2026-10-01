import { Component } from '@angular/core';

import { SuiSidebarAnimation, SuiSidebarPosition, SuiSidebarWidth } from 'ngx-semantic/modules/sidebar';

export class SidebarSampleState {
  visible = false;
  direction: SuiSidebarPosition = 'left';
  animation: SuiSidebarAnimation = 'overlay';
  width: SuiSidebarWidth = null;

  show(direction: SuiSidebarPosition, animation: SuiSidebarAnimation = 'overlay'): void {
    this.direction = direction;
    this.animation = animation;
    this.visible = true;
  }

  get isVertical(): boolean {
    return this.direction === 'left' || this.direction === 'right';
  }
}

@Component({
  selector: 'doc-sidebar-sidebar-example',
  templateUrl: './snippets/sidebar.sample.html',
  standalone: false
})
export class SidebarSidebarExampleComponent extends SidebarSampleState {
}

@Component({
  selector: 'doc-sidebar-visible-example',
  templateUrl: './snippets/visible.sample.html',
  standalone: false
})
export class SidebarVisibleExampleComponent extends SidebarSampleState {
}

@Component({
  selector: 'doc-sidebar-dimmed-example',
  templateUrl: './snippets/dimmed.sample.html',
  standalone: false
})
export class SidebarDimmedExampleComponent extends SidebarSampleState {
}

@Component({
  selector: 'doc-sidebar-direction-example',
  templateUrl: './snippets/direction.sample.html',
  standalone: false
})
export class SidebarDirectionExampleComponent extends SidebarSampleState {
}

@Component({
  selector: 'doc-sidebar-width-example',
  templateUrl: './snippets/width.sample.html',
  standalone: false
})
export class SidebarWidthExampleComponent extends SidebarSampleState {
}

@Component({
  selector: 'doc-sidebar-transitions-example',
  templateUrl: './snippets/transitions.sample.html',
  standalone: false
})
export class SidebarTransitionsExampleComponent extends SidebarSampleState {
}

@Component({
  selector: 'doc-sidebar-page-example',
  templateUrl: './snippets/page.sample.html',
  standalone: false
})
export class SidebarPageExampleComponent extends SidebarSampleState {
}

export const SIDEBAR_EXAMPLES = [
  SidebarSidebarExampleComponent,
  SidebarVisibleExampleComponent,
  SidebarDimmedExampleComponent,
  SidebarDirectionExampleComponent,
  SidebarWidthExampleComponent,
  SidebarTransitionsExampleComponent,
  SidebarPageExampleComponent,
];
