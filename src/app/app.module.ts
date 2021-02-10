import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SuiIconModule, SuiImageModule, SuiMenuModule, SuiSidebarModule} from 'ngx-semantic';
import {ElementsComponent} from './pages/elements/elements.component';
import {CollectionsComponent} from './pages/collections/collections.component';
import {ViewsComponent} from './pages/views/views.component';
import {GeneralComponent} from "./pages/general/general.component";
import {SharedModule} from "./shared/shared.module";
import {ModulesComponent} from "./pages/modules/modules.component";

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
