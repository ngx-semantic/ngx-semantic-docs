/**
 * Created by bolorundurowb on 2/10/2021
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'doc-modules',
    template: `
    <router-outlet></router-outlet>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ModulesComponent {
}
