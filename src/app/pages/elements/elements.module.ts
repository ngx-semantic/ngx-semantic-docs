/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon/icon.page';
import {ListComponent} from './list/list.page';
import {FlagComponent} from './flag/flag.page';
import {RailComponent} from './rail/rail.page';
import {StepComponent} from './step/step.page';
import {SuiCardModule} from 'ngx-semantic/views/card';
import {InputComponent} from './input/input.page';
import {LabelComponent} from './label/label.page';
import {ImageComponent} from './image/image.page';
import {SharedModule} from '../../shared/shared.module';
import {SuiRailModule} from 'ngx-semantic/elements/rail';
import {SuiFlagModule} from 'ngx-semantic/elements/flag';
import {SuiListModule} from 'ngx-semantic/elements/list';
import {SuiIconModule} from 'ngx-semantic/elements/icon';
import {LoaderComponent} from './loader/loader.page';
import {RevealComponent} from './reveal/reveal.page';
import {HeaderComponent} from './header/header.page';
import {ButtonComponent} from './buttons/button.page';
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
import {SegmentComponent} from './segment/segment.page';
import {DividerComponent} from './divider/divider.page';
import {SuiHeaderModule} from 'ngx-semantic/elements/header';
import {SuiTableModule} from 'ngx-semantic/collections/table';
import {SuiSegmentModule} from 'ngx-semantic/elements/segment';
import {SuiDividerModule} from 'ngx-semantic/elements/divider';
import {SuiDropdownModule} from 'ngx-semantic/modules/dropdown';
import {ElementsRoutingModule} from './elements-routing.module';
import {SuiMessageModule} from 'ngx-semantic/collections/message';
import {ContainerComponent} from './container/container.page';
import {SuiContainerModule} from 'ngx-semantic/elements/container';
import {SuiPlaceholderModule} from 'ngx-semantic/elements/placeholder';
import {PlaceholderComponent} from './placeholder/placeholder.page';

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
    ElementsRoutingModule
  ]
})
export class ElementsModule {
}

