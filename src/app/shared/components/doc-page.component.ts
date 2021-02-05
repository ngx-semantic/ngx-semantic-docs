/**
 * Created by bolor on 10/7/2020
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'doc-page',
  template: `
    <div class="masthead"
         sui-segment
         suiVertical>
      <div sui-container>
        <div sui-grid>
          <div suiGridColumn
               suiWidth="eight">
            <h1 sui-header>
              {{header}}
              <div suiSubHeader>
                {{subHeader}}
              </div>
            </h1>
          </div>
          <div suiGridColumn
               suiWidth="eight">
            <div class="right floated main"
                 sui-menu>
              <a suiMenuItem
                 sui-popup
                 suiPopupPlacement="bottom center"
                 suiPopupContent="Submit Bug Report"
                 target="_blank"
                 href="https://github.com/ngx-semantic/ngx-semantic/issues">
                <i sui-icon
                   suiIconType="bug"></i>
              </a>

              <a suiMenuItem
                 sui-popup
                 suiPopupPlacement="bottom center"
                 suiPopupContent="View project on GitHub"
                 target="_blank"
                 href="https://github.com/ngx-semantic/ngx-semantic">
                <i sui-icon
                   suiIconType="alternate github"></i>
              </a>

              <a suiMenuItem
                 sui-popup
                 suiPopupPlacement="bottom center"
                 suiPopupContent="View on Semantic UI"
                 target="_blank"
                 href="https://github.com/ngx-semantic/ngx-semantic">
                <i sui-icon
                   suiIconType="book"></i>
              </a>
            </div>
          </div>
        </div>

        <div sui-divider
             suiHidden></div>

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

    <div class="main"
         sui-container>
      <ng-content></ng-content>
    </div>
  `
})
export class DocPageComponent {
  @Input() header: string = null;
  @Input() subHeader: string = null;
  @Output() pageChanged = new EventEmitter<string>();

  private definitions = 'definitions';
  private api = 'api';
  private currentView = this.definitions;

  isApi(): boolean {
    return this.currentView === this.api;
  }

  switchToApi(): void {
    this.currentView = this.api;
    this.pageChanged.emit(this.currentView);
  }

  isDefinitions(): boolean {
    return this.currentView === this.definitions;
  }

  switchToDefinitions(): void {
    this.currentView = this.definitions;
    this.pageChanged.emit(this.currentView);
  }
}
