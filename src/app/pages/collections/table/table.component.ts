import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetTableSrc from './snippets/table.sample.html' with { loader: 'text' };
import snippetDefinitionSrc from './snippets/definition.sample.html' with { loader: 'text' };
import snippetStructuredSrc from './snippets/structured.sample.html' with { loader: 'text' };
import snippetPositiveNegativeSrc from './snippets/positive-negative.sample.html' with { loader: 'text' };
import snippetErrorSrc from './snippets/error.sample.html' with { loader: 'text' };
import snippetWarningSrc from './snippets/warning.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/active.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetSingleLineSrc from './snippets/single-line.sample.html' with { loader: 'text' };
import snippetFixedSrc from './snippets/fixed.sample.html' with { loader: 'text' };
import snippetStackingSrc from './snippets/stacking.sample.html' with { loader: 'text' };
import snippetSelectableRowSrc from './snippets/selectable-row.sample.html' with { loader: 'text' };
import snippetSelectableCellSrc from './snippets/selectable-cell.sample.html' with { loader: 'text' };
import snippetVerticalAlignmentSrc from './snippets/vertical-alignment.sample.html' with { loader: 'text' };
import snippetTextAlignmentSrc from './snippets/text-alignment.sample.html' with { loader: 'text' };
import snippetStripedSrc from './snippets/striped.sample.html' with { loader: 'text' };
import snippetCelledSrc from './snippets/celled.sample.html' with { loader: 'text' };
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetCollapsingCellSrc from './snippets/collapsing-cell.sample.html' with { loader: 'text' };
import snippetColumnWidthSrc from './snippets/column-width.sample.html' with { loader: 'text' };
import snippetColumnCountSrc from './snippets/column-count.sample.html' with { loader: 'text' };
import snippetCollapsingSrc from './snippets/collapsing.sample.html' with { loader: 'text' };
import snippetColoredSrc from './snippets/colored.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetSortableSrc from './snippets/sortable.sample.html' with { loader: 'text' };
import snippetSortableTsSrc from './snippets/sortable.sample.txt' with { loader: 'text' };
import snippetFullWidthSrc from './snippets/full-width.sample.html' with { loader: 'text' };
import snippetPaddedSrc from './snippets/padded.sample.html' with { loader: 'text' };
import snippetCompactSrc from './snippets/compact.sample.html' with { loader: 'text' };
import snippetSizeSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/attached.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: false
})
export class TableComponent {
  snippetTable = snippetTableSrc;
  snippetDefinition = snippetDefinitionSrc;
  snippetStructured = snippetStructuredSrc;
  snippetPositiveNegative = snippetPositiveNegativeSrc;
  snippetError = snippetErrorSrc;
  snippetWarning = snippetWarningSrc;
  snippetActive = snippetActiveSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetSingleLine = snippetSingleLineSrc;
  snippetFixed = snippetFixedSrc;
  snippetStacking = snippetStackingSrc;
  snippetSelectableRow = snippetSelectableRowSrc;
  snippetSelectableCell = snippetSelectableCellSrc;
  snippetVerticalAlignment = snippetVerticalAlignmentSrc;
  snippetTextAlignment = snippetTextAlignmentSrc;
  snippetStriped = snippetStripedSrc;
  snippetCelled = snippetCelledSrc;
  snippetBasic = snippetBasicSrc;
  snippetCollapsingCell = snippetCollapsingCellSrc;
  snippetColumnWidth = snippetColumnWidthSrc;
  snippetColumnCount = snippetColumnCountSrc;
  snippetCollapsing = snippetCollapsingSrc;
  snippetColored = snippetColoredSrc;
  snippetInverted = snippetInvertedSrc;
  snippetSortable = snippetSortableSrc;
  snippetSortableTs = snippetSortableTsSrc;
  snippetFullWidth = snippetFullWidthSrc;
  snippetPadded = snippetPaddedSrc;
  snippetCompact = snippetCompactSrc;
  snippetSize = snippetSizeSrc;
  snippetAttached = snippetAttachedSrc;

  constructor(title: Title) {
    title.setTitle('Table | Ngx Semantic');
  }
}
