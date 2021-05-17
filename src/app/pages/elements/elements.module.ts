/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {ListComponent} from './list/list.component';
import {FlagComponent} from './flag/flag.component';
import {RailComponent} from './rail/rail.component';
import {StepComponent} from './step/step.component';
import {SuiCardModule} from 'ngx-semantic/views/card';
import {InputComponent} from './input/input.component';
import {LabelComponent} from './label/label.component';
import {ImageComponent} from './image/image.component';
import {SharedModule} from '../../shared/shared.module';
import {SuiRailModule} from 'ngx-semantic/elements/rail';
import {SuiFlagModule} from 'ngx-semantic/elements/flag';
import {SuiListModule} from 'ngx-semantic/elements/list';
import {SuiIconModule} from 'ngx-semantic/elements/icon';
import {LoaderComponent} from './loader/loader.component';
import {RevealComponent} from './reveal/reveal.component';
import {HeaderComponent} from './header/header.component';
import {ButtonComponent} from './buttons/button.component';
import {SuiImageModule} from 'ngx-semantic/elements/image';
import {SuiLabelModule} from 'ngx-semantic/elements/label';
import {SuiInputModule} from 'ngx-semantic/elements/input';
import {SuiStepsModule} from 'ngx-semantic/elements/steps';
import {SuiGridModule} from 'ngx-semantic/collections/grid';
import {SuiDimmerModule} from 'ngx-semantic/modules/dimmer';
import {SuiSearchModule} from 'ngx-semantic/modules/search';
import {SuiFormModule} from 'ngx-semantic/collections/form';
import {SuiSelectModule} from 'ngx-semantic/modules/select';
import {SuiButtonModule} from 'ngx-semantic/elements/button';
import {SuiLoaderModule} from 'ngx-semantic/elements/loader';
import {SuiRevealModule} from 'ngx-semantic/elements/reveal';
import {SegmentComponent} from './segment/segment.component';
import {DividerComponent} from './divider/divider.component';
import {SuiHeaderModule} from 'ngx-semantic/elements/header';
import {SuiTableModule} from 'ngx-semantic/collections/table';
import {SuiSegmentModule} from 'ngx-semantic/elements/segment';
import {SuiDividerModule} from 'ngx-semantic/elements/divider';
import {SuiDropdownModule} from 'ngx-semantic/modules/dropdown';
import {ElementsRoutingModule} from './elements-routing.module';
import {SuiMessageModule} from 'ngx-semantic/collections/message';
import {ContainerComponent} from './container/container.component';
import {SuiContainerModule} from 'ngx-semantic/elements/container';
import {SuiPlaceholderModule} from 'ngx-semantic/elements/placeholder';
import {PlaceholderComponent} from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    FlagComponent,
    StepComponent,
    ListComponent,
    RailComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    LabelComponent,
    HeaderComponent,
    ButtonComponent,
    RevealComponent,
    LoaderComponent,
    DividerComponent,
    SegmentComponent,
    ContainerComponent,
    PlaceholderComponent,
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
    SuiRailModule,
    SuiButtonModule,
    SuiSelectModule,
    SuiHeaderModule,
    SuiDimmerModule,
    SuiLoaderModule,
    SuiLoaderModule,
    SuiDimmerModule,
    SuiRevealModule,
    SuiSearchModule,
    SuiMessageModule,
    SuiDividerModule,
    SuiDividerModule,
    SuiSegmentModule,
    SuiDropdownModule,
    SuiContainerModule,
    SuiPlaceholderModule,
    ElementsRoutingModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule {
}
