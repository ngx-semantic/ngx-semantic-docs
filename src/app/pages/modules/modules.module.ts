/**
 * Created by bolorundurowb on 2/10/2021
 */

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
import { ModalComponent } from './modal/modal.component';
import { NgxSemanticModule } from 'ngx-semantic';
import { AccordionPage } from './accordion/accordion.page';
import { CheckboxPage } from './checkbox/checkbox.page';
import { ProgressPage } from './progress/progress.page';
import { SuiProgressModule } from 'ngx-semantic/modules/progress';
import { SuiModalModule } from 'ngx-semantic/modules/modal';
import { SuiCheckboxModule } from 'ngx-semantic/modules/checkbox';
import { SuiAccordionModule } from 'ngx-semantic/modules/accordion';
import { SuiCardModule } from 'ngx-semantic/views/card';

@NgModule({
  declarations: [
    TabComponent,
    EmbedComponent,
    RatingComponent,
    DimmerComponent,
    SearchComponent,
    ModalComponent,
    AccordionPage,
    CheckboxPage,
    ProgressPage,
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
    SuiPlaceholderModule,
    SuiButtonModule,
    SuiDimmerModule,
    SuiSegmentModule,
    SuiIconModule,
    SuiSearchModule,
    SuiProgressModule,
    SuiModalModule,
    SuiCheckboxModule,
    SuiAccordionModule,
  ]
})
export class ModulesModule {
}
