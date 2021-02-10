/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
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
import {ElementsRoutingModule} from "./elements-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {
  SuiButtonModule, SuiContainerModule, SuiDividerModule, SuiFlagModule, SuiFormModule, SuiGridModule,
  SuiHeaderModule, SuiIconModule, SuiImageModule, SuiInputModule,
  SuiLabelModule, SuiListModule,
  SuiMessageModule, SuiPlaceholderModule, SuiSegmentModule, SuiStepsModule,
  SuiTableModule
} from "ngx-semantic";

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
    SharedModule,
    ElementsRoutingModule,
    SuiLabelModule,
    SuiHeaderModule,
    SuiTableModule,
    SuiButtonModule,
    SuiMessageModule,
    SuiIconModule,
    SuiSegmentModule,
    SuiPlaceholderModule,
    SuiDividerModule,
    SuiContainerModule,
    SuiGridModule,
    SuiFormModule,
    SuiInputModule,
    SuiFlagModule,
    SuiImageModule,
    SuiListModule,
    SuiStepsModule
  ]
})
export class ElementsModule {
}
