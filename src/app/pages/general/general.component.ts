/**
 * Created by bolorundurowb on 1/28/2021
 */

import {Component, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: 'doc-general',
    template: `
    <router-outlet></router-outlet>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class GeneralComponent {
}
