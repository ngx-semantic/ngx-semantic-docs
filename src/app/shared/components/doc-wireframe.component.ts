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
        margin-top: 0.5rem;
        margin-bottom: 0.4rem;
    }
  `]
})
export class DocWireframeComponent {
  @Input() type: DocWireframeType;
}
