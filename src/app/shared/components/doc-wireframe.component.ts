import {Component, Input} from '@angular/core';

export type DocWireframeType = 'paragraph' | 'short-paragraph';

@Component({
  selector: 'doc-wireframe',
  template: `
    <img src="assets/images/wireframes/{{type}}.png">
  `
})
export class DocWireframeComponent {
  @Input() type: DocWireframeType;
}
