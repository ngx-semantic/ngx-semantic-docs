/**
 * Created by bolor on 10/7/2020
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";

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
              <a class="bug popup icon item"
                 data-tooltip="Submit Bug Report"
                 target="_blank"
                 href="https://github.com/ngx-semantic/ngx-semantic/issues">
                <i sui-icon
                   suiIconType="bug"></i>
              </a>

              <a class="github popup icon item"
                 data-tooltip="View project on GitHub"
                 target="_blank"
                 href="https://github.com/ngx-semantic/ngx-semantic">
                <i sui-icon
                   suiIconType="alternate github"></i>
              </a>

              <a class="github popup icon item"
                 data-tooltip="View on Semantic UI"
                 target="_blank"
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
