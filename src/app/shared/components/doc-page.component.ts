/**
 * Created by bolor on 10/7/2020
 */

import {Component, ContentChild, Input} from "@angular/core";
import {DocDefinitionComponent} from "./doc-definition.component";

@Component({
  selector: 'doc-page',
  template: `
    <div class="masthead"
         sui-segment
         suiVertical="true">
      <div sui-container>
        <div sui-grid>
          <div suiGridColumn
               suiWidth="eight">
            <h1 sui-header>
              {{header}}
              <div sui-sub-header>
                {{subHeader}}
              </div>
            </h1>
          </div>
          <div suiGridColumn
               suiWidth="eight">
            <div class="ui right floated main menu">
              <a class="bug popup icon item" title="Submit Bug Report"
                 href="https://github.com/ngx-semantic/ngx-semantic/issues">
                <i sui-icon
                   suiIconType="bug"></i>
              </a>

              <a class="github popup icon item" title="View project on GitHub"
                 href="https://github.com/ngx-semantic/ngx-semantic">
                <i sui-icon
                   suiIconType="alternate github"></i>
              </a>

              <a class="github popup icon item" title="View on Semantic UI"
                 href="https://github.com/ngx-semantic/ngx-semantic">
                <i sui-icon
                   suiIconType="book"></i>
              </a>
            </div>
          </div>
        </div>

        <div sui-divider
             suiHidden="true"></div>

        <div sui-menu
             suiWidth="two"
             style="margin-top: 2rem; margin-bottom: 1.3rem;">
          <a suiMenuItem
             [suiActive]="isDefinitions()"
             (click)="switchToDefinitions()">
            Definitions
          </a>

          <a suiMenuItem
             [suiActive]="isApi()"
             (click)="switchToApi()">
            API
          </a>
        </div>
      </div>
    </div>
    
    <div sui-container
         class="main">
      <ng-container *ngIf="isDefinitions()">
        <div>hello</div>
      </ng-container>
      <ng-container *ngIf="isApi()">
        <div>hello</div>
      </ng-container>
    </div>
  `
})
export class DocPageComponent {
  @ContentChild(DocDefinitionComponent)
  @Input() header: string = null;
  @Input() subHeader: string = null;

  private definitions = 'definitions';
  private api = 'api';

  currentView = this.definitions;

  isApi(): boolean {
    return this.currentView === this.api;
  }

  switchToApi(): void {
    this.currentView = this.api;
  }

  isDefinitions(): boolean {
    return this.currentView === this.definitions;
  }

  switchToDefinitions(): void {
    this.currentView = this.definitions;
  }
}
