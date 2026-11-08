import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'doc-root',
    templateUrl: './app.component.html',
    styles: [`
    .page {
      margin-left: 15rem;
      padding: 2rem 2rem 2rem 6rem;
    }
  `],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
}
