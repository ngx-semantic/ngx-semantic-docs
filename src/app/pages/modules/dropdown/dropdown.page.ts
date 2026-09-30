import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetDropdownSrc from './snippets/dropdown.sample.html' with { loader: 'text' };
import snippetInlineSrc from './snippets/inline.sample.html' with { loader: 'text' };
import snippetPointingSrc from './snippets/pointing.sample.html' with { loader: 'text' };
import snippetFloatingSrc from './snippets/floating.sample.html' with { loader: 'text' };
import snippetSimpleSrc from './snippets/simple.sample.html' with { loader: 'text' };
import snippetHeaderSrc from './snippets/header.sample.html' with { loader: 'text' };
import snippetDividerSrc from './snippets/divider.sample.html' with { loader: 'text' };
import snippetIconSrc from './snippets/icon.sample.html' with { loader: 'text' };
import snippetDescriptionSrc from './snippets/description.sample.html' with { loader: 'text' };
import snippetLabelSrc from './snippets/label.sample.html' with { loader: 'text' };
import snippetMessageSrc from './snippets/message.sample.html' with { loader: 'text' };
import snippetFloatedSrc from './snippets/floated.sample.html' with { loader: 'text' };
import snippetInputSrc from './snippets/input.sample.html' with { loader: 'text' };
import snippetImageSrc from './snippets/image.sample.html' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetErrorSrc from './snippets/error.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetScrollingSrc from './snippets/scrolling.sample.html' with { loader: 'text' };
import snippetCompactSrc from './snippets/compact.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetMenuDirectionSrc from './snippets/menu-direction.sample.html' with { loader: 'text' };
import snippetMultipleLevelsSrc from './snippets/multiple-levels.sample.html' with { loader: 'text' };
import snippetButtonGroupSrc from './snippets/button-group.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-dropdown',
  templateUrl: 'dropdown.page.html',
  standalone: false
})
export class DropdownPage {
  snippetDropdown = snippetDropdownSrc;
  snippetInline = snippetInlineSrc;
  snippetPointing = snippetPointingSrc;
  snippetFloating = snippetFloatingSrc;
  snippetSimple = snippetSimpleSrc;
  snippetHeader = snippetHeaderSrc;
  snippetDivider = snippetDividerSrc;
  snippetIcon = snippetIconSrc;
  snippetDescription = snippetDescriptionSrc;
  snippetLabel = snippetLabelSrc;
  snippetMessage = snippetMessageSrc;
  snippetFloated = snippetFloatedSrc;
  snippetInput = snippetInputSrc;
  snippetImage = snippetImageSrc;
  snippetLoading = snippetLoadingSrc;
  snippetError = snippetErrorSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetScrolling = snippetScrollingSrc;
  snippetCompact = snippetCompactSrc;
  snippetFluid = snippetFluidSrc;
  snippetMenuDirection = snippetMenuDirectionSrc;
  snippetMultipleLevels = snippetMultipleLevelsSrc;
  snippetButtonGroup = snippetButtonGroupSrc;

  constructor(title: Title) {
    title.setTitle('Dropdown | Ngx Semantic');
  }
}
