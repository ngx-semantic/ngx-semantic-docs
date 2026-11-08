import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetFlag from './snippets/flag.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-flags',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FlagComponent {
  snippetFlag = snippetFlag;

  constructor(title: Title) {
    title.setTitle('Flag | Ngx Semantic');
  }
}
