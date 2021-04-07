/**
 * Created by bolor on 10/7/2020
 */

import {Component, Input, Output, EventEmitter, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import {DocPageContentDirective} from './doc-page-content.directive';

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
             (click)="switchToPage('definition')">
            Definitions
          </a>

          <a suiMenuItem
             [suiActive]="isApi()"
             (click)="switchToPage('api')">
            API
          </a>
        </div>
      </div>
    </div>

    <div class="main"
         sui-container>
      <ng-container *ngFor="let page of pages">
        <ng-container *ngIf="page.pageType === this.currentView">
          <ng-container [ngTemplateOutlet]="page.template"></ng-container>
        </ng-container>
      </ng-container>

    </div>
  `
})
export class DocPageComponent implements AfterContentInit {
  @ContentChildren(DocPageContentDirective) public pages: QueryList<DocPageContentDirective>;

  @Input() header: string = null;
  @Input() subHeader: string = null;
  @Output() pageChanged = new EventEmitter<string>();

  public currentView = 'definition';

  ngAfterContentInit() {
  }

  isApi(): boolean {
    return this.currentView === 'api';
  }

  isDefinitions(): boolean {
    return this.currentView === 'definition';
  }

  switchToPage(page): void {
    this.currentView = page;
  }
}
