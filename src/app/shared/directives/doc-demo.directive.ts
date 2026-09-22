import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[docDemo]',
  standalone: false
})
export class DocDemoDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}
