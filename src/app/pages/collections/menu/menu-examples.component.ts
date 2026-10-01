import { Component } from '@angular/core';

export class MenuSampleState {
  activeItem = 'home';

  select(item: string): void {
    this.activeItem = item;
  }
}

@Component({
  selector: 'doc-menu-menu-example',
  templateUrl: './snippets/menu.sample.html',
  standalone: false
})
export class MenuMenuExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-menu-evenly-example',
  templateUrl: './snippets/menu-evenly.sample.html',
  standalone: false
})
export class MenuMenuEvenlyExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-secondary-example',
  templateUrl: './snippets/secondary.sample.html',
  standalone: false
})
export class MenuSecondaryExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-pointing-example',
  templateUrl: './snippets/pointing.sample.html',
  standalone: false
})
export class MenuPointingExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-secondary-pointing-example',
  templateUrl: './snippets/secondary-pointing.sample.html',
  standalone: false
})
export class MenuSecondaryPointingExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-tabular-example',
  templateUrl: './snippets/tabular.sample.html',
  standalone: false
})
export class MenuTabularExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-tabular-attached-example',
  templateUrl: './snippets/tabular-attached.sample.html',
  standalone: false
})
export class MenuTabularAttachedExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-text-example',
  templateUrl: './snippets/text.sample.html',
  standalone: false
})
export class MenuTextExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-vertical-example',
  templateUrl: './snippets/vertical.sample.html',
  standalone: false
})
export class MenuVerticalExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-vertical-secondary-example',
  templateUrl: './snippets/vertical-secondary.sample.html',
  standalone: false
})
export class MenuVerticalSecondaryExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-pagination-example',
  templateUrl: './snippets/pagination.sample.html',
  standalone: false
})
export class MenuPaginationExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-header-example',
  templateUrl: './snippets/header.sample.html',
  standalone: false
})
export class MenuHeaderExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-text-content-example',
  templateUrl: './snippets/text-content.sample.html',
  standalone: false
})
export class MenuTextContentExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-input-example',
  templateUrl: './snippets/input.sample.html',
  standalone: false
})
export class MenuInputExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-button-example',
  templateUrl: './snippets/button.sample.html',
  standalone: false
})
export class MenuButtonExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-link-item-example',
  templateUrl: './snippets/link-item.sample.html',
  standalone: false
})
export class MenuLinkItemExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-dropdown-item-example',
  templateUrl: './snippets/dropdown-item.sample.html',
  standalone: false
})
export class MenuDropdownItemExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-sub-menu-example',
  templateUrl: './snippets/sub-menu.sample.html',
  standalone: false
})
export class MenuSubMenuExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-hover-example',
  templateUrl: './snippets/hover.sample.html',
  standalone: false
})
export class MenuHoverExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-active-example',
  templateUrl: './snippets/active.sample.html',
  standalone: false
})
export class MenuActiveExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class MenuDisabledExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-stackable-example',
  templateUrl: './snippets/stackable.sample.html',
  standalone: false
})
export class MenuStackableExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  standalone: false
})
export class MenuInvertedExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-colored-example',
  templateUrl: './snippets/colored.sample.html',
  standalone: false
})
export class MenuColoredExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-colored-menu-example',
  templateUrl: './snippets/colored-menu.sample.html',
  standalone: false
})
export class MenuColoredMenuExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-icons-example',
  templateUrl: './snippets/icons.sample.html',
  standalone: false
})
export class MenuIconsExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-labeled-icon-example',
  templateUrl: './snippets/labeled-icon.sample.html',
  standalone: false
})
export class MenuLabeledIconExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-fluid-example',
  templateUrl: './snippets/fluid.sample.html',
  standalone: false
})
export class MenuFluidExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-compact-example',
  templateUrl: './snippets/compact.sample.html',
  standalone: false
})
export class MenuCompactExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-evenly-divided-example',
  templateUrl: './snippets/evenly-divided.sample.html',
  standalone: false
})
export class MenuEvenlyDividedExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-attached-example',
  templateUrl: './snippets/attached.sample.html',
  standalone: false
})
export class MenuAttachedExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-size-example',
  templateUrl: './snippets/size.sample.html',
  standalone: false
})
export class MenuSizeExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-fitted-example',
  templateUrl: './snippets/fitted.sample.html',
  standalone: false
})
export class MenuFittedExampleComponent extends MenuSampleState {
}

@Component({
  selector: 'doc-menu-borderless-example',
  templateUrl: './snippets/borderless.sample.html',
  standalone: false
})
export class MenuBorderlessExampleComponent extends MenuSampleState {
}

export const MENU_EXAMPLES = [
  MenuMenuExampleComponent,
  MenuMenuEvenlyExampleComponent,
  MenuSecondaryExampleComponent,
  MenuPointingExampleComponent,
  MenuSecondaryPointingExampleComponent,
  MenuTabularExampleComponent,
  MenuTabularAttachedExampleComponent,
  MenuTextExampleComponent,
  MenuVerticalExampleComponent,
  MenuVerticalSecondaryExampleComponent,
  MenuPaginationExampleComponent,
  MenuHeaderExampleComponent,
  MenuTextContentExampleComponent,
  MenuInputExampleComponent,
  MenuButtonExampleComponent,
  MenuLinkItemExampleComponent,
  MenuDropdownItemExampleComponent,
  MenuSubMenuExampleComponent,
  MenuHoverExampleComponent,
  MenuActiveExampleComponent,
  MenuDisabledExampleComponent,
  MenuStackableExampleComponent,
  MenuInvertedExampleComponent,
  MenuColoredExampleComponent,
  MenuColoredMenuExampleComponent,
  MenuIconsExampleComponent,
  MenuLabeledIconExampleComponent,
  MenuFluidExampleComponent,
  MenuCompactExampleComponent,
  MenuEvenlyDividedExampleComponent,
  MenuAttachedExampleComponent,
  MenuSizeExampleComponent,
  MenuFittedExampleComponent,
  MenuBorderlessExampleComponent,
];
