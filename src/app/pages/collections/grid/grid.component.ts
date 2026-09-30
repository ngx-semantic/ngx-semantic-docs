import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetGridSrc from './snippets/grid.sample.html' with { loader: 'text' };
import snippetDividedSrc from './snippets/divided.sample.html' with { loader: 'text' };
import snippetVerticallyDividedSrc from './snippets/vertically-divided.sample.html' with { loader: 'text' };
import snippetCelledSrc from './snippets/celled.sample.html' with { loader: 'text' };
import snippetInternallyCelledSrc from './snippets/internally-celled.sample.html' with { loader: 'text' };
import snippetRowsSrc from './snippets/rows.sample.html' with { loader: 'text' };
import snippetColumnsSrc from './snippets/columns.sample.html' with { loader: 'text' };
import snippetFloatedSrc from './snippets/floated.sample.html' with { loader: 'text' };
import snippetColumnWidthSrc from './snippets/column-width.sample.html' with { loader: 'text' };
import snippetColumnCountSrc from './snippets/column-count.sample.html' with { loader: 'text' };
import snippetEqualWidthSrc from './snippets/equal-width.sample.html' with { loader: 'text' };
import snippetStretchedSrc from './snippets/stretched.sample.html' with { loader: 'text' };
import snippetPaddedSrc from './snippets/padded.sample.html' with { loader: 'text' };
import snippetRelaxedSrc from './snippets/relaxed.sample.html' with { loader: 'text' };
import snippetColoredSrc from './snippets/colored.sample.html' with { loader: 'text' };
import snippetCenteredSrc from './snippets/centered.sample.html' with { loader: 'text' };
import snippetTextAlignmentSrc from './snippets/text-alignment.sample.html' with { loader: 'text' };
import snippetVerticalAlignmentSrc from './snippets/vertical-alignment.sample.html' with { loader: 'text' };
import snippetDoublingSrc from './snippets/doubling.sample.html' with { loader: 'text' };
import snippetStackableSrc from './snippets/stackable.sample.html' with { loader: 'text' };
import snippetReversedSrc from './snippets/reversed.sample.html' with { loader: 'text' };
import snippetDeviceVisibilitySrc from './snippets/device-visibility.sample.html' with { loader: 'text' };
import snippetResponsiveWidthSrc from './snippets/responsive-width.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  standalone: false
})
export class GridComponent {
  snippetGrid = snippetGridSrc;
  snippetDivided = snippetDividedSrc;
  snippetVerticallyDivided = snippetVerticallyDividedSrc;
  snippetCelled = snippetCelledSrc;
  snippetInternallyCelled = snippetInternallyCelledSrc;
  snippetRows = snippetRowsSrc;
  snippetColumns = snippetColumnsSrc;
  snippetFloated = snippetFloatedSrc;
  snippetColumnWidth = snippetColumnWidthSrc;
  snippetColumnCount = snippetColumnCountSrc;
  snippetEqualWidth = snippetEqualWidthSrc;
  snippetStretched = snippetStretchedSrc;
  snippetPadded = snippetPaddedSrc;
  snippetRelaxed = snippetRelaxedSrc;
  snippetColored = snippetColoredSrc;
  snippetCentered = snippetCenteredSrc;
  snippetTextAlignment = snippetTextAlignmentSrc;
  snippetVerticalAlignment = snippetVerticalAlignmentSrc;
  snippetDoubling = snippetDoublingSrc;
  snippetStackable = snippetStackableSrc;
  snippetReversed = snippetReversedSrc;
  snippetDeviceVisibility = snippetDeviceVisibilitySrc;
  snippetResponsiveWidth = snippetResponsiveWidthSrc;

  constructor(title: Title) {
    title.setTitle('Grid | Ngx Semantic');
  }
}
