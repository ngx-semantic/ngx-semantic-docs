/**
 * Created by bolor on 4/19/2020
 */

import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'doc-collections',
    template: `
    <router-outlet></router-outlet>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CollectionsComponent {
}
