import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'doc-behaviors',
  template: `
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class BehaviorsComponent {
}
