import {Directive, Input, TemplateRef} from '@angular/core';

export type DocPageType = 'api' | 'definition';

@Directive({
  selector: '[docPageContent]'
})
export class DocPageContentDirective {
  @Input('docPageContent') pageType: DocPageType;

  constructor(public template: TemplateRef<any>) {
  }
}
