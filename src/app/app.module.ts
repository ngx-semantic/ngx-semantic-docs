import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxSemanticModule} from 'ngx-semantic';
import {QuickStartComponent} from './pages/general/home/quick-start.component';
import {ButtonsComponent} from './pages/elements/buttons/buttons.component';
import {ElementsComponent} from './pages/elements/elements.component';
import {FlagsComponent} from './pages/elements/flags/flags.component';
import {DividerComponent} from './pages/elements/divider/divider.component';
import {HeadersComponent} from './pages/elements/headers/headers.component';
import {IconsComponent} from './pages/elements/icons/icons.component';
import {InputsComponent} from './pages/elements/inputs/inputs.component';
import {LabelsComponent} from './pages/elements/labels/labels.component';
import {ListsComponent} from './pages/elements/lists/lists.component';
import {LoadersComponent} from './pages/elements/loaders/loaders.component';
import {PlaceholdersComponent} from './pages/elements/placeholders/placeholders.component';
import {RailsComponent} from './pages/elements/rails/rails.component';
import {RevealsComponent} from './pages/elements/reveals/reveals.component';
import {SegmentsComponent} from './pages/elements/segments/segments.component';
import {CollectionsComponent} from './pages/collections/collections.component';
import {ViewsComponent} from './pages/views/views.component';
import {CardsComponent} from './pages/views/cards/cards.component';
import {CodeSampleComponent} from './components/code-sample.component';
import {StepsComponent} from './pages/elements/steps/steps.component';
import {DocPageHeaderComponent} from "./components/doc-page-header.component";
import {ContainerComponent} from './pages/elements/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ElementsComponent,
    QuickStartComponent,
    DividerComponent,
    FlagsComponent,
    HeadersComponent,
    IconsComponent,
    InputsComponent,
    LabelsComponent,
    ListsComponent,
    LoadersComponent,
    PlaceholdersComponent,
    ViewsComponent,
    RailsComponent,
    CardsComponent,
    RevealsComponent,
    SegmentsComponent,
    CodeSampleComponent,
    CollectionsComponent,
    ViewsComponent,
    CardsComponent,
    StepsComponent,
    DocPageHeaderComponent,
    ContainerComponent,
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
