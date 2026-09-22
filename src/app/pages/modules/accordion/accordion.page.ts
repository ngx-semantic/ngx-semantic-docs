import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetStyledSrc from './snippets/styled.sample.html' with { loader: 'text' };
import snippetStyledFluidSrc from './snippets/styled-fluid.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-accordion',
    templateUrl: './accordion.page.html',
    standalone: false
})
export class AccordionPage {
  snippetStandard = snippetStandardSrc;
  snippetStyled = snippetStyledSrc;
  snippetStyledFluid = snippetStyledFluidSrc;
  snippetInverted = snippetInvertedSrc;





  constructor(title: Title) {
    title.setTitle('Accordion | Ngx Semantic');
  }
}
