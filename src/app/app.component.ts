import {Component} from '@angular/core';

@Component({
  selector: 'doc-root',
  template: `
    <div class="ui visible sidebar inverted vertical menu">
      <div suiMenuItem>
        <div suiMenuHeader>
          Getting Started
        </div>
      </div>
      <div suiMenuItem>
        <div suiMenuHeader>Elements</div>
        <div suiSubMenu>
          <a suiMenuItem
             routerLink="elements/buttons"
             routerLinkActive="active">
            Buttons
          </a>
          <a suiMenuItem
             routerLink="elements/container"
             routerLinkActive="active">
            Container
          </a>
          <a suiMenuItem
             routerLink="elements/dividers"
             routerLinkActive="active">
            Dividers
          </a>
          <a suiMenuItem
             routerLink="elements/flags"
             routerLinkActive="active">
            Flags
          </a>
          <a suiMenuItem
             routerLink="elements/headers"
             routerLinkActive="active">
            Headers
          </a>
          <a suiMenuItem
             routerLink="elements/icons"
             routerLinkActive="active">
            Icons
          </a>
          <a suiMenuItem
             routerLink="elements/inputs"
             routerLinkActive="active">
            Inputs
          </a>
          <a suiMenuItem
             routerLink="elements/labels"
             routerLinkActive="active">
            Labels
          </a>
          <a suiMenuItem
             routerLink="elements/lists"
             routerLinkActive="active">
            Lists
          </a>
          <a suiMenuItem
             routerLink="elements/loaders"
             routerLinkActive="active">
            Loaders
          </a>
          <a suiMenuItem
             routerLink="elements/placeholders"
             routerLinkActive="active">
            Placeholders
          </a>
          <a suiMenuItem
             routerLink="elements/rails"
             routerLinkActive="active">
            Rails
          </a>
          <a suiMenuItem
             routerLink="elements/reveals"
             routerLinkActive="active">
            Reveals
          </a>
          <a suiMenuItem
             routerLink="elements/segments"
             routerLinkActive="active">
            Segments
          </a>
          <a suiMenuItem
             routerLink="elements/steps"
             routerLinkActive="active">
            Steps
          </a>
        </div>
      </div>
      <div suiMenuItem>
        <div suiMenuHeader>Collections</div>
        <div suiSubMenu>
          <a suiMenuItem
             routerLink="collections/breadcrumb"
             routerLinkActive="active">
            Breadcrumb
          </a>
          <a suiMenuItem
             routerLink="collections/form"
             routerLinkActive="active">
            Form
          </a>
          <a suiMenuItem
             routerLink="collections/grid"
             routerLinkActive="active">
            Grid
          </a>
          <a suiMenuItem
             routerLink="collections/menu"
             routerLinkActive="active">
            Menu
          </a>
          <a suiMenuItem
             routerLink="collections/messages"
             routerLinkActive="active">
            Messages
          </a>
          <a suiMenuItem
             routerLink="collections/table"
             routerLinkActive="active">
            Table
          </a>
        </div>
      </div>
      <div suiMenuItem>
        <div suiMenuHeader>Views</div>
        <div suiSubMenu>
          <a suiMenuItem
             routerLink="views/cards"
             routerLinkActive="active">
            Cards
          </a>
          <a suiMenuItem>
            Comments
          </a>
          <a suiMenuItem>
            Feeds
          </a>
          <a suiMenuItem>
            Items
          </a>
          <a suiMenuItem>
            Statistics
          </a>
          <a suiMenuItem>
            Advertisement
          </a>
        </div>
      </div>
      <div suiMenuItem>
        <div suiMenuHeader>Modules</div>
        <div suiSubMenu>
          <a suiMenuItem>
            Accordion
          </a>
          <a suiMenuItem>
            Checkbox
          </a>
          <a suiMenuItem>
            Dimmer
          </a>
          <a suiMenuItem>
            Dropdown
          </a>
          <a suiMenuItem>
            Embed
          </a>
          <a suiMenuItem>
            Modal
          </a>
          <a suiMenuItem>
            Rating
          </a>
          <a suiMenuItem>
            Search
          </a>
          <a suiMenuItem>
            Select
          </a>
          <a suiMenuItem>
            Sidebar
          </a>
          <a suiMenuItem>
            Popup
          </a>
          <a suiMenuItem>
            Progress
          </a>
          <a suiMenuItem>
            Tab
          </a>
        </div>
      </div>
    </div>
    <div class="pusher">
      <div class="page">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .page {
      margin-left: 15rem;
      padding: 2rem;
    }
  `]
})
export class AppComponent {
}
