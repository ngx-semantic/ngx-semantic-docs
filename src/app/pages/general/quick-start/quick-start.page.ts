import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'doc-home',
  templateUrl: './quick-start.page.html',
  styleUrls: [ './quick-start.page.scss' ]
})
export class QuickStartComponent {
  snippetCssLink = `  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />`;

  snippetNpmInstaller = `  npm install @angular/cdk
  npm install ngx-semantic`;

  snippetYarnInstaller = `  yarn add @angular/cdk
  yarn add ngx-semantic`;

  snippetAllImport = `  import { NgxSemanticModule } from 'ngx-semantic';
  ...

  @NgModule({
    declarations: [ AppComponent, ... ],
    imports: [ NgxSemanticModule, ... ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule { }`;

  snippetIndividualImport = `  import { SuiSegmentModule, SuiLabelModule, SuiIconModule } from 'ngx-semantic';
  ...

  @NgModule({
    declarations: [ AppComponent, ... ],
    imports: [ SuiSegmentModule, SuiLabelModule, SuiIconModule, ... ],
    bootstrap: [ AppComponent ]
  })
  export class AppModule { }`;

  constructor(title: Title) {
    title.setTitle('Quick Start | Ngx Semantic');
  }
}


