import {Component} from '@angular/core';

@Component({
  selector: 'doc-root',
  template: `
    <div class="ui visible sidebar inverted vertical menu">
      <div suiMenuItem>
        <div class="header">
          Getting Started
        </div>
      </div>
      <div suiMenuItem>
        <div class="header">Elements</div>
        <div class="menu">
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
        <div class="header">Collections</div>
        <div class="menu">
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
        <div class="header">Views</div>
        <div class="menu">
          <a suiMenuItem
             routerLink="views/cards"
             routerLinkActive="active">
            Cards
          </a>
          <a suiMenuItem
             routerLink="/"
             routerLinkActive="active">
            Comments
          </a>
          <a suiMenuItem
             routerLink="/"
             routerLinkActive="active">
            Feeds
          </a>
          <a suiMenuItem
             routerLink="/"
             routerLinkActive="active">
            Items
          </a>
          <a suiMenuItem
             routerLink="/"
             routerLinkActive="active">
            Statistics
          </a>
          <a suiMenuItem
             routerLink="/"
             routerLinkActive="active">
            Advertisement
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
