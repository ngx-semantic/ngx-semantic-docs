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
  SuiButtonModule, SuiContainerModule, SuiDimmerModule, SuiDividerModule, SuiFlagModule, SuiFormModule, SuiGridModule,
  SuiHeaderModule, SuiIconModule, SuiImageModule, SuiInputModule,
  SuiLabelModule, SuiListModule, SuiLoaderModule,
  SuiMessageModule, SuiPlaceholderModule, SuiSegmentModule, SuiStepsModule,
  SuiTableModule
} from "ngx-semantic";

@NgModule({
  declarations: [
    FlagsComponent,
    StepsComponent,
    ListsComponent,
    RailsComponent,
    IconsComponent,
    LabelsComponent,
    InputsComponent,
    ButtonsComponent,
    DividerComponent,
    HeadersComponent,
    LoadersComponent,
    RevealsComponent,
    SegmentsComponent,
    ContainerComponent,
    PlaceholdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SuiIconModule,
    SuiGridModule,
    SuiFormModule,
    SuiFlagModule,
    SuiListModule,
    SuiLabelModule,
    SuiTableModule,
    SuiImageModule,
    SuiInputModule,
    SuiStepsModule,
    SuiButtonModule,
    SuiHeaderModule,
    SuiMessageModule,
    SuiDividerModule,
    SuiSegmentModule,
    SuiPlaceholderModule,
    SuiContainerModule,
    ElementsRoutingModule,
    SuiLoaderModule,
    SuiDimmerModule
  ]
})
export class ElementsModule {
}
