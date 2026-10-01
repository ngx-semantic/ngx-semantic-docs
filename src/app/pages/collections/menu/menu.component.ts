import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetMenuSrc from './snippets/menu.sample.html' with { loader: 'text' };
import snippetMenuEvenlySrc from './snippets/menu-evenly.sample.html' with { loader: 'text' };
import snippetMenuEvenlyTsSrc from './snippets/menu-evenly.sample.txt' with { loader: 'text' };
import snippetSecondarySrc from './snippets/secondary.sample.html' with { loader: 'text' };
import snippetSecondaryTsSrc from './snippets/secondary.sample.txt' with { loader: 'text' };
import snippetPointingSrc from './snippets/pointing.sample.html' with { loader: 'text' };
import snippetPointingTsSrc from './snippets/pointing.sample.txt' with { loader: 'text' };
import snippetSecondaryPointingSrc from './snippets/secondary-pointing.sample.html' with { loader: 'text' };
import snippetSecondaryPointingTsSrc from './snippets/secondary-pointing.sample.txt' with { loader: 'text' };
import snippetTabularSrc from './snippets/tabular.sample.html' with { loader: 'text' };
import snippetTabularTsSrc from './snippets/tabular.sample.txt' with { loader: 'text' };
import snippetTabularAttachedSrc from './snippets/tabular-attached.sample.html' with { loader: 'text' };
import snippetTabularAttachedTsSrc from './snippets/tabular-attached.sample.txt' with { loader: 'text' };
import snippetTextSrc from './snippets/text.sample.html' with { loader: 'text' };
import snippetTextTsSrc from './snippets/text.sample.txt' with { loader: 'text' };
import snippetVerticalSrc from './snippets/vertical.sample.html' with { loader: 'text' };
import snippetVerticalSecondarySrc from './snippets/vertical-secondary.sample.html' with { loader: 'text' };
import snippetVerticalSecondaryTsSrc from './snippets/vertical-secondary.sample.txt' with { loader: 'text' };
import snippetPaginationSrc from './snippets/pagination.sample.html' with { loader: 'text' };
import snippetHeaderSrc from './snippets/header.sample.html' with { loader: 'text' };
import snippetTextContentSrc from './snippets/text-content.sample.html' with { loader: 'text' };
import snippetInputSrc from './snippets/input.sample.html' with { loader: 'text' };
import snippetButtonSrc from './snippets/button.sample.html' with { loader: 'text' };
import snippetLinkItemSrc from './snippets/link-item.sample.html' with { loader: 'text' };
import snippetDropdownItemSrc from './snippets/dropdown-item.sample.html' with { loader: 'text' };
import snippetSubMenuSrc from './snippets/sub-menu.sample.html' with { loader: 'text' };
import snippetHoverSrc from './snippets/hover.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/active.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetStackableSrc from './snippets/stackable.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetInvertedTsSrc from './snippets/inverted.sample.txt' with { loader: 'text' };
import snippetColoredSrc from './snippets/colored.sample.html' with { loader: 'text' };
import snippetColoredTsSrc from './snippets/colored.sample.txt' with { loader: 'text' };
import snippetColoredMenuSrc from './snippets/colored-menu.sample.html' with { loader: 'text' };
import snippetColoredMenuTsSrc from './snippets/colored-menu.sample.txt' with { loader: 'text' };
import snippetIconsSrc from './snippets/icons.sample.html' with { loader: 'text' };
import snippetLabeledIconSrc from './snippets/labeled-icon.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetCompactSrc from './snippets/compact.sample.html' with { loader: 'text' };
import snippetEvenlyDividedSrc from './snippets/evenly-divided.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/attached.sample.html' with { loader: 'text' };
import snippetSizeSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetFittedSrc from './snippets/fitted.sample.html' with { loader: 'text' };
import snippetBorderlessSrc from './snippets/borderless.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false
})
export class MenuComponent {
  snippetMenu = snippetMenuSrc;
  snippetMenuEvenly = snippetMenuEvenlySrc;
  snippetMenuEvenlyTs = snippetMenuEvenlyTsSrc;
  snippetSecondary = snippetSecondarySrc;
  snippetSecondaryTs = snippetSecondaryTsSrc;
  snippetPointing = snippetPointingSrc;
  snippetPointingTs = snippetPointingTsSrc;
  snippetSecondaryPointing = snippetSecondaryPointingSrc;
  snippetSecondaryPointingTs = snippetSecondaryPointingTsSrc;
  snippetTabular = snippetTabularSrc;
  snippetTabularTs = snippetTabularTsSrc;
  snippetTabularAttached = snippetTabularAttachedSrc;
  snippetTabularAttachedTs = snippetTabularAttachedTsSrc;
  snippetText = snippetTextSrc;
  snippetTextTs = snippetTextTsSrc;
  snippetVertical = snippetVerticalSrc;
  snippetVerticalSecondary = snippetVerticalSecondarySrc;
  snippetVerticalSecondaryTs = snippetVerticalSecondaryTsSrc;
  snippetPagination = snippetPaginationSrc;
  snippetHeader = snippetHeaderSrc;
  snippetTextContent = snippetTextContentSrc;
  snippetInput = snippetInputSrc;
  snippetButton = snippetButtonSrc;
  snippetLinkItem = snippetLinkItemSrc;
  snippetDropdownItem = snippetDropdownItemSrc;
  snippetSubMenu = snippetSubMenuSrc;
  snippetHover = snippetHoverSrc;
  snippetActive = snippetActiveSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetStackable = snippetStackableSrc;
  snippetInverted = snippetInvertedSrc;
  snippetInvertedTs = snippetInvertedTsSrc;
  snippetColored = snippetColoredSrc;
  snippetColoredTs = snippetColoredTsSrc;
  snippetColoredMenu = snippetColoredMenuSrc;
  snippetColoredMenuTs = snippetColoredMenuTsSrc;
  snippetIcons = snippetIconsSrc;
  snippetLabeledIcon = snippetLabeledIconSrc;
  snippetFluid = snippetFluidSrc;
  snippetCompact = snippetCompactSrc;
  snippetEvenlyDivided = snippetEvenlyDividedSrc;
  snippetAttached = snippetAttachedSrc;
  snippetSize = snippetSizeSrc;
  snippetFitted = snippetFittedSrc;
  snippetBorderless = snippetBorderlessSrc;

  constructor(title: Title) {
    title.setTitle('Menu | Ngx Semantic');
  }
}
