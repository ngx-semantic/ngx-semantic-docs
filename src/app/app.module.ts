import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxSemanticModule} from 'ngx-semantic';
import {QuickStartComponent} from './pages/general/home/quick-start.component';
import {ElementsComponent} from './pages/elements/elements.component';
import {CollectionsComponent} from './pages/collections/collections.component';
import {ViewsComponent} from './pages/views/views.component';
import {CodeSampleComponent} from './components/code-sample.component';
import {DocPageHeaderComponent} from "./components/doc-page-header.component";

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    QuickStartComponent,
    ViewsComponent,
    CodeSampleComponent,
    CollectionsComponent,
    DocPageHeaderComponent,
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
