import {Component, Input} from '@angular/core';

export type DocWireframeType = 'paragraph' | 'short-paragraph';

@Component({
  selector: 'doc-wireframe',
  template: `
    <img src="assets/images/wireframes/{{type}}.png">
  `,
  styles: [`
    img {
      width: 100%;
      border-style: none;
    }
  `]
})
export class DocWireframeComponent {
  @Input() type: DocWireframeType;
}
