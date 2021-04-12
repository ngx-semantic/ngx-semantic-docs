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
import {RailComponent} from "./rail/rail.component";
import {RevealsComponent} from "./reveal/reveals.component";
import {SegmentsComponent} from "./segment/segments.component";
import {StepsComponent} from "./step/steps.component";
import {ElementsRoutingModule} from "./elements-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {SuiImageModule} from "ngx-semantic/elements/image";
import {SuiIconModule} from "ngx-semantic/elements/icon";
import {SuiCardModule} from "ngx-semantic/views/card";
import {SuiFormModule} from "ngx-semantic/collections/form";
import {SuiGridModule} from "ngx-semantic/collections/grid";
import {SuiFlagModule} from "ngx-semantic/elements/flag";
import {SuiListModule} from "ngx-semantic/elements/list";
import {SuiLabelModule} from "ngx-semantic/elements/label";
import {SuiTableModule} from "ngx-semantic/collections/table";
import {SuiInputModule} from "ngx-semantic/elements/input";
import {SuiStepsModule} from "ngx-semantic/elements/steps";
import {SuiButtonModule} from "ngx-semantic/elements/button";
import {SuiSelectModule} from "ngx-semantic/modules/select";
import {SuiHeaderModule} from "ngx-semantic/elements/header";
import {SuiMessageModule} from "ngx-semantic/collections/message";
import {SuiDividerModule} from "ngx-semantic/elements/divider";
import {SuiSegmentModule} from "ngx-semantic/elements/segment";
import {SuiDropdownModule} from "ngx-semantic/modules/dropdown";
import {SuiContainerModule} from "ngx-semantic/elements/container";
import {SuiPlaceholderModule} from "ngx-semantic/elements/placeholder";
import {SuiDimmerModule} from 'ngx-semantic/modules/dimmer';
import {SuiLoaderModule} from 'ngx-semantic/elements/loader';

@NgModule({
  declarations: [
    FlagsComponent,
    StepsComponent,
    ListsComponent,
    RailComponent,
    InputComponent,
    IconsComponent,
    LabelsComponent,
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
    FormsModule,
    CommonModule,
    SharedModule,
    SharedModule,
    SuiIconModule,
    SuiGridModule,
    SuiFormModule,
    SuiCardModule,
    SuiFlagModule,
    SuiListModule,
    SuiLabelModule,
    SuiTableModule,
    SuiImageModule,
    SuiInputModule,
    SuiStepsModule,
    SuiButtonModule,
    SuiSelectModule,
    SuiHeaderModule,
    SuiMessageModule,
    SuiDividerModule,
    SuiSegmentModule,
    SuiDropdownModule,
    SuiContainerModule,
    SuiPlaceholderModule,
    ElementsRoutingModule,
    SuiDimmerModule,
    SuiLoaderModule,
    ElementsRoutingModule,
    SuiLoaderModule,
    SuiDimmerModule
  ]
})
export class ElementsModule {
}
