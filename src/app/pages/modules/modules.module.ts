/**
 * Created by bolorundurowb on 2/10/2021
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmbedComponent } from './embed/embed.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RatingComponent } from './rating/rating.component';
import { TabComponent } from './tab/tab.component';
import { DimmerComponent } from './dimmer/dimmer.component';

import { SuiLabelModule } from 'ngx-semantic/elements/label';
import { SuiHeaderModule } from 'ngx-semantic/elements/header';
import { SuiEmbedModule } from 'ngx-semantic/modules/embed';
import { SuiTableModule } from 'ngx-semantic/collections/table';
import { SuiRatingModule } from 'ngx-semantic/modules/rating';
import { SuiTabsModule } from 'ngx-semantic/modules/tabs';
import { SuiPlaceholderModule } from 'ngx-semantic/elements/placeholder';
import { SuiDimmerModule } from 'ngx-semantic/modules/dimmer';
import { SuiButtonModule } from 'ngx-semantic/elements/button';
import { SuiSegmentModule } from 'ngx-semantic/elements/segment';
import { SuiIconModule } from 'ngx-semantic/elements/icon';
import { SearchComponent } from './search/search.component';
import { SuiSearchModule } from 'ngx-semantic/modules/search';
import { AccordionPage } from './accordion/accordion.page';
import { CheckboxPage } from './checkbox/checkbox.page';
import { ProgressPage } from './progress/progress.page';
import { SuiProgressModule } from 'ngx-semantic/modules/progress';
import { SuiModalModule } from 'ngx-semantic/modules/modal';
import { SuiCheckboxModule } from 'ngx-semantic/modules/checkbox';
import { SuiAccordionModule } from 'ngx-semantic/modules/accordion';
import { SuiCardModule } from 'ngx-semantic/views/card';
import { SuiMessageModule } from 'ngx-semantic/collections/message';
import { PopupPage } from './popup/popup.page';
import { SuiPopupModule } from 'ngx-semantic/modules/popup';
import { SuiImageModule } from 'ngx-semantic/elements/image';
import { SuiGridModule } from 'ngx-semantic/collections/grid';
import { SelectPage } from './select/select.page';
import { SuiSelectModule } from 'ngx-semantic/modules/select';
import { ModalPage } from './modal/modal.page';

@NgModule({
  declarations: [
    TabComponent,
    EmbedComponent,
    RatingComponent,
    DimmerComponent,
    SearchComponent,
    ModalPage,
    AccordionPage,
    CheckboxPage,
    ProgressPage,
    PopupPage,
    SelectPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModulesRoutingModule,
    SharedModule,
    SuiLabelModule,
    SuiTableModule,
    SuiCardModule,
    SuiEmbedModule,
    SuiHeaderModule,
    SuiRatingModule,
    SuiTabsModule,
    SuiButtonModule,
    SuiDimmerModule,
    SuiIconModule,
    SuiGridModule,
    SuiImageModule,
    SuiModalModule,
    SuiPopupModule,
    SuiSearchModule,
    SuiSelectModule,
    SuiSegmentModule,
    SuiMessageModule,
    SuiProgressModule,
    SuiCheckboxModule,
    SuiAccordionModule,
    SuiPlaceholderModule,
  ]
})
export class ModulesModule {
}
