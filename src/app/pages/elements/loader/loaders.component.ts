import {AfterViewChecked, Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements AfterViewChecked {
  snippetBasic = `
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader></div>
    </ng-template>
  </div>`;

  snippetText = `
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText>
        Loading
      </div>
    </ng-template>
  </div>`;

  snippetTextInverted = `
  <div sui-segment
       sui-dimmer
       suiDimmerInverted
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText>
        Loading
      </div>
    </ng-template>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Loaders | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
