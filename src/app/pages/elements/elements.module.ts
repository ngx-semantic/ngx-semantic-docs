/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {ButtonsComponent} from "./buttons/buttons.component";
import {ContainerComponent} from "./container/container.component";
import {DividerComponent} from "./divider/divider.component";
import {FlagsComponent} from "./flags/flags.component";
import {HeadersComponent} from "./headers/headers.component";
import {IconsComponent} from "./icons/icons.component";
import {InputsComponent} from "./inputs/inputs.component";
import {LabelsComponent} from "./labels/labels.component";
import {ListsComponent} from "./lists/lists.component";
import {LoadersComponent} from "./loaders/loaders.component";
import {PlaceholdersComponent} from "./placeholders/placeholders.component";
import {RailsComponent} from "./rails/rails.component";
import {RevealsComponent} from "./reveals/reveals.component";
import {SegmentsComponent} from "./segments/segments.component";
import {StepsComponent} from "./steps/steps.component";
import {CommonModule} from "@angular/common";
import {ElementsRoutingModule} from "./elements-routing.module";

@NgModule({
  declarations: [
    ButtonsComponent,
    ContainerComponent,
    DividerComponent,
    FlagsComponent,
    HeadersComponent,
    IconsComponent,
    InputsComponent,
    LabelsComponent,
    ListsComponent,
    LoadersComponent,
    PlaceholdersComponent,
    RailsComponent,
    RevealsComponent,
    SegmentsComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule {
}
