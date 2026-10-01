import { Component } from '@angular/core';

export interface TableSamplePerson {
  name: string;
  age: number;
  job: string;
}

export class TableSampleState {
  people: TableSamplePerson[] = [
    { name: 'John', age: 15, job: 'Student' },
    { name: 'Jamie', age: 42, job: 'Engineer' },
    { name: 'Jill', age: 29, job: 'Designer' },
    { name: 'Ahmed', age: 34, job: 'Accountant' }
  ];
  sortColumn: keyof TableSamplePerson | null = null;
  sortDirection: 'ascending' | 'descending' = 'ascending';

  sort(column: keyof TableSamplePerson): void {
    this.sortDirection = this.sortColumn === column && this.sortDirection === 'ascending' ? 'descending' : 'ascending';
    this.sortColumn = column;
    const factor = this.sortDirection === 'ascending' ? 1 : -1;
    this.people = [...this.people].sort((a, b) => (a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0) * factor);
  }

  sortedBy(column: keyof TableSamplePerson): 'ascending' | 'descending' | null {
    return this.sortColumn === column ? this.sortDirection : null;
  }
}

@Component({
  selector: 'doc-table-table-example',
  templateUrl: './snippets/table.sample.html',
  standalone: false
})
export class TableTableExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-definition-example',
  templateUrl: './snippets/definition.sample.html',
  standalone: false
})
export class TableDefinitionExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-structured-example',
  templateUrl: './snippets/structured.sample.html',
  standalone: false
})
export class TableStructuredExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-positive-negative-example',
  templateUrl: './snippets/positive-negative.sample.html',
  standalone: false
})
export class TablePositiveNegativeExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-error-example',
  templateUrl: './snippets/error.sample.html',
  standalone: false
})
export class TableErrorExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-warning-example',
  templateUrl: './snippets/warning.sample.html',
  standalone: false
})
export class TableWarningExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-active-example',
  templateUrl: './snippets/active.sample.html',
  standalone: false
})
export class TableActiveExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class TableDisabledExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-single-line-example',
  templateUrl: './snippets/single-line.sample.html',
  standalone: false
})
export class TableSingleLineExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-fixed-example',
  templateUrl: './snippets/fixed.sample.html',
  standalone: false
})
export class TableFixedExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-stacking-example',
  templateUrl: './snippets/stacking.sample.html',
  standalone: false
})
export class TableStackingExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-selectable-row-example',
  templateUrl: './snippets/selectable-row.sample.html',
  standalone: false
})
export class TableSelectableRowExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-selectable-cell-example',
  templateUrl: './snippets/selectable-cell.sample.html',
  standalone: false
})
export class TableSelectableCellExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-vertical-alignment-example',
  templateUrl: './snippets/vertical-alignment.sample.html',
  standalone: false
})
export class TableVerticalAlignmentExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-text-alignment-example',
  templateUrl: './snippets/text-alignment.sample.html',
  standalone: false
})
export class TableTextAlignmentExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-striped-example',
  templateUrl: './snippets/striped.sample.html',
  standalone: false
})
export class TableStripedExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-celled-example',
  templateUrl: './snippets/celled.sample.html',
  standalone: false
})
export class TableCelledExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class TableBasicExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-collapsing-cell-example',
  templateUrl: './snippets/collapsing-cell.sample.html',
  standalone: false
})
export class TableCollapsingCellExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-column-width-example',
  templateUrl: './snippets/column-width.sample.html',
  standalone: false
})
export class TableColumnWidthExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-column-count-example',
  templateUrl: './snippets/column-count.sample.html',
  standalone: false
})
export class TableColumnCountExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-collapsing-example',
  templateUrl: './snippets/collapsing.sample.html',
  standalone: false
})
export class TableCollapsingExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-colored-example',
  templateUrl: './snippets/colored.sample.html',
  standalone: false
})
export class TableColoredExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  standalone: false
})
export class TableInvertedExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-sortable-example',
  templateUrl: './snippets/sortable.sample.html',
  standalone: false
})
export class TableSortableExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-full-width-example',
  templateUrl: './snippets/full-width.sample.html',
  standalone: false
})
export class TableFullWidthExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-padded-example',
  templateUrl: './snippets/padded.sample.html',
  standalone: false
})
export class TablePaddedExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-compact-example',
  templateUrl: './snippets/compact.sample.html',
  standalone: false
})
export class TableCompactExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-size-example',
  templateUrl: './snippets/size.sample.html',
  standalone: false
})
export class TableSizeExampleComponent extends TableSampleState {
}

@Component({
  selector: 'doc-table-attached-example',
  templateUrl: './snippets/attached.sample.html',
  standalone: false
})
export class TableAttachedExampleComponent extends TableSampleState {
}

export const TABLE_EXAMPLES = [
  TableTableExampleComponent,
  TableDefinitionExampleComponent,
  TableStructuredExampleComponent,
  TablePositiveNegativeExampleComponent,
  TableErrorExampleComponent,
  TableWarningExampleComponent,
  TableActiveExampleComponent,
  TableDisabledExampleComponent,
  TableSingleLineExampleComponent,
  TableFixedExampleComponent,
  TableStackingExampleComponent,
  TableSelectableRowExampleComponent,
  TableSelectableCellExampleComponent,
  TableVerticalAlignmentExampleComponent,
  TableTextAlignmentExampleComponent,
  TableStripedExampleComponent,
  TableCelledExampleComponent,
  TableBasicExampleComponent,
  TableCollapsingCellExampleComponent,
  TableColumnWidthExampleComponent,
  TableColumnCountExampleComponent,
  TableCollapsingExampleComponent,
  TableColoredExampleComponent,
  TableInvertedExampleComponent,
  TableSortableExampleComponent,
  TableFullWidthExampleComponent,
  TablePaddedExampleComponent,
  TableCompactExampleComponent,
  TableSizeExampleComponent,
  TableAttachedExampleComponent,
];
