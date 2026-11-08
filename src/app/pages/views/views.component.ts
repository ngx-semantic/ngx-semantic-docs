/**
 * Created by bolor on 8/18/2020
 */

import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'doc-views',
    template: `
    <router-outlet></router-outlet>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ViewsComponent {
}
