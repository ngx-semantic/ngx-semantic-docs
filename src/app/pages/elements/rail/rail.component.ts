import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-rail',
  templateUrl: './rail.component.html',
  styles: [`
    .container {
      min-height: 300px;
      width: 960px;
    }
  `]
})
export class RailComponent extends BasePageComponent {
  snippetBasic = `
  <div sui-grid
       suiCentered
       suiWidth="three">
    <div suiGridColumn>
      <div sui-segment>
        <doc-wireframe type="paragraph"></doc-wireframe>

        <div sui-rail
             suiLocation="left">
          <div sui-segment>
            Left Rail Content
          </div>
        </div>
        <div sui-rail
             suiLocation="right">
          <div sui-segment>
            Right Rail Content
          </div>
        </div>
      </div>
    </div>
  </div>`;

  snippetInternal = `
  <div sui-segment
       sui-container>
    <div sui-rail
         suiInternal
         suiLocation="left">
      <div sui-segment>
        Left Rail Content
      </div>
    </div>
    <div sui-rail
         suiInternal
         suiLocation="right">
      <div sui-segment>
        Right Rail Content
      </div>
    </div>
  </div>`;

  snippetDividing = `
  <div sui-grid
       suiCentered
       suiWidth="three">
    <div suiGridColumn>
      <div sui-segment>
        <doc-wireframe type="paragraph"></doc-wireframe>

        <div sui-rail
             suiDividing
             suiLocation="left">
          <div sui-segment>
            Left Rail Content
          </div>
        </div>
        <div sui-rail
             suiDividing
             suiLocation="right">
          <div sui-segment>
            Right Rail Content
          </div>
        </div>
      </div>
    </div>
  </div>`;

  snippetAttached = `
  <div sui-grid
       suiCentered
       suiWidth="three">
    <div suiGridColumn>
      <div sui-segment>
        <doc-wireframe type="paragraph"></doc-wireframe>

        <div sui-rail
             suiAttached
             suiLocation="left">
          <div sui-segment>
            Left Rail Content
          </div>
        </div>
        <div sui-rail
             suiAttached
             suiLocation="right">
          <div sui-segment>
            Right Rail Content
          </div>
        </div>
      </div>
    </div>
  </div>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Rail | Ngx Semantic');
  }
}
