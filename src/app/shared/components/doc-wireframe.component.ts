import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

export type DocWireframeType = 'paragraph' | 'short-paragraph' | 'image';

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
  `],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DocWireframeComponent {
  @Input() type: DocWireframeType;
}
