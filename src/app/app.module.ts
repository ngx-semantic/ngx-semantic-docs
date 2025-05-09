import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {SuiIconModule} from 'ngx-semantic/elements/icon';
import {SuiImageModule} from 'ngx-semantic/elements/image';
import {SuiMenuModule} from 'ngx-semantic/collections/menu';
import {SuiSidebarModule} from 'ngx-semantic/modules/sidebar';
import { ElementsComponent } from './pages/elements/elements.page';
import { CollectionsComponent } from './pages/collections/collections.page';
import { ViewsComponent } from './pages/views/views.page';
import { GeneralComponent } from './pages/general/general.page';
import { ModulesComponent } from './pages/modules/modules.page';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    ViewsComponent,
    CollectionsComponent,
    GeneralComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    SuiMenuModule,
    SuiImageModule,
    SuiIconModule,
    SuiSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
