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

  snippetIndeterminate = `
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiIndeterminate
           suiText>
        Preparing Files
      </div>
    </ng-template>
  </div>`;

  snippetActive = `
  <div sui-segment>
    <div sui-loader
         suiActive></div>
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  snippetDisabled = `
  <div sui-segment>
    <div sui-loader
         disabled></div>
    <doc-wireframe type="short-paragraph"></doc-wireframe>
  </div>`;

  snippetInline = `
  <div sui-loader
       suiActive
       suiInline="normal">
  </div>`;

  snippetInlineCentered = `
  <div sui-loader
       suiActive
       suiInline="centered">
  </div>`;

  snippetSizes = `
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="mini">
        Loading
      </div>
    </ng-template>
  </div>
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="tiny">
        Loading
      </div>
    </ng-template>
  </div>
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="small">
        Loading
      </div>
    </ng-template>
  </div>
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="medium">
        Loading
      </div>
    </ng-template>
  </div>
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <doc-wireframe type="short-paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="large">
        Loading
      </div>
    </ng-template>
  </div>
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="big">
        Loading
      </div>
    </ng-template>
  </div>
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="huge">
        Loading
      </div>
    </ng-template>
  </div>
  <div sui-segment
       sui-dimmer
       dimmed="true">
    <doc-wireframe type="paragraph"></doc-wireframe>
    <ng-template suiDimmerContent>
      <div sui-loader
           suiText
           suiSize="massive">
        Loading
      </div>
    </ng-template>
  </div>`;

  snippetInverted = `
  <div sui-segment
       suiInverted>
    <div sui-loader
         suiActive
         suiInverted>
    </div>
    <br>
    <br>
    <br>
    <br>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Loaders | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
