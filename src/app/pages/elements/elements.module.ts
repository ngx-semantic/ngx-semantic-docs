/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ButtonsComponent} from "./buttons/buttons.component";
import {ContainerComponent} from "./container/container.component";
import {DividerComponent} from "./divider/divider.component";
import {FlagComponent} from "./flag/flag.component";
import {HeaderComponent} from "./header/header.component";
import {IconComponent} from "./icon/icon.component";
import {InputComponent} from "./input/input.component";
import {LabelComponent} from "./label/label.component";
import {ListComponent} from "./list/list.component";
import {LoaderComponent} from "./loader/loader.component";
import {PlaceholdersComponent} from "./placeholder/placeholders.component";
import {RailComponent} from "./rail/rail.component";
import {RevealComponent} from "./reveal/reveal.component";
import {SegmentsComponent} from "./segment/segments.component";
import {StepComponent} from "./step/step.component";
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
import {SuiRailModule} from 'ngx-semantic/elements/rail';
import {SuiRevealModule} from 'ngx-semantic/elements/reveal';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    FlagComponent,
    StepComponent,
    ListComponent,
    RailComponent,
    InputComponent,
    IconComponent,
    LabelComponent,
    ButtonsComponent,
    DividerComponent,
    HeaderComponent,
    LoaderComponent,
    RevealComponent,
    SegmentsComponent,
    ContainerComponent,
    PlaceholdersComponent,
    ImageComponent
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
    SuiDimmerModule,
    SuiRailModule,
    SuiRevealModule
  ]
})
export class ElementsModule {
}
