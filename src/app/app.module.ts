import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from './app-routing.module';
import {SuiIconModule} from "ngx-semantic/elements/icon";
import {SuiImageModule} from "ngx-semantic/elements/image";
import {SuiMenuModule} from "ngx-semantic/collections/menu";
import {ViewsComponent} from './pages/views/views.component';
import {SuiSidebarModule} from "ngx-semantic/modules/sidebar";
import {ModulesComponent} from "./pages/modules/modules.component";
import {GeneralComponent} from "./pages/general/general.component";
import {ElementsComponent} from './pages/elements/elements.component';
import {CollectionsComponent} from './pages/collections/collections.component';

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
