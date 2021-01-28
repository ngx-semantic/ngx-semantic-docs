import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxSemanticModule} from 'ngx-semantic';
import {ElementsComponent} from './pages/elements/elements.component';
import {CollectionsComponent} from './pages/collections/collections.component';
import {ViewsComponent} from './pages/views/views.component';
import {CodeSampleComponent} from './components/code-sample.component';
import {DocPageHeaderComponent} from "./components/doc-page-header.component";
import {GeneralComponent} from "./pages/general/general.component";

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    ViewsComponent,
    CollectionsComponent,
    GeneralComponent,
    CodeSampleComponent,
    DocPageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
