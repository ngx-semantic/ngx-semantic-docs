import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'doc-accordion-standard-example',
  templateUrl: './snippets/standard.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AccordionStandardExampleComponent {
}

@Component({
  selector: 'doc-accordion-styled-example',
  templateUrl: './snippets/styled.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AccordionStyledExampleComponent {
}

@Component({
  selector: 'doc-accordion-styled-fluid-example',
  templateUrl: './snippets/styled-fluid.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AccordionStyledFluidExampleComponent {
}

@Component({
  selector: 'doc-accordion-inverted-example',
  templateUrl: './snippets/inverted.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AccordionInvertedExampleComponent {
}
export const ACCORDION_EXAMPLES = [
  AccordionStandardExampleComponent,
  AccordionStyledExampleComponent,
  AccordionStyledFluidExampleComponent,
  AccordionInvertedExampleComponent,
];
