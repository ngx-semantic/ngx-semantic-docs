/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ButtonsComponent} from "./buttons/buttons.component";
import {ContainerComponent} from "./container/container.component";
import {DividerComponent} from "./divider/divider.component";
import {FlagsComponent} from "./flag/flags.component";
import {HeadersComponent} from "./header/headers.component";
import {IconsComponent} from "./icons/icons.component";
import {InputComponent} from "./input/input.component";
import {LabelsComponent} from "./label/labels.component";
import {ListsComponent} from "./list/lists.component";
import {LoadersComponent} from "./loader/loaders.component";
import {PlaceholdersComponent} from "./placeholder/placeholders.component";
import {RailsComponent} from "./rail/rails.component";
import {RevealsComponent} from "./reveal/reveals.component";
import {SegmentsComponent} from "./segment/segments.component";
import {StepsComponent} from "./step/steps.component";
import {ElementsRoutingModule} from "./elements-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {
  SuiButtonModule,
  SuiCardModule,
  SuiContainerModule,
  SuiDividerModule,
  SuiDropdownModule,
  SuiFlagModule,
  SuiFormModule,
  SuiGridModule,
  SuiHeaderModule,
  SuiIconModule,
  SuiImageModule,
  SuiInputModule,
  SuiLabelModule,
  SuiListModule,
  SuiMessageModule,
  SuiPlaceholderModule,
  SuiSegmentModule, SuiSelectModule,
  SuiStepsModule,
  SuiTableModule
} from "ngx-semantic";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FlagsComponent,
    StepsComponent,
    ListsComponent,
    RailsComponent,
    IconsComponent,
    LabelsComponent,
    InputComponent,
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
    SuiCardModule,
    FormsModule,
    SuiDropdownModule,
    SuiSelectModule
  ]
})
export class ElementsModule {
}
