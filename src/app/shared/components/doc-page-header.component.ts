/**
 * Created by bolor on 10/7/2020
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: 'doc-page-header',
  template: `
    <div class="ui masthead vertical segment">
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
             suiActive="true">
            Definitions
          </a>
          <a suiMenuItem>
            API
          </a>
        </div>
      </div>
    </div>
  `
})
export class DocPageHeaderComponent {
  @Input() header: string = null;
  @Input() subHeader: string = null;
}
