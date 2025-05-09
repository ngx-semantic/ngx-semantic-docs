/**
 * Created by bolorundurowb on 1/28/2021
 */

import { NgModule } from '@angular/core';
import { CardsComponent } from './card/cards.page';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StatisticsComponent } from './statistic/statistics.page';
import { FeedPage } from './feed/feed.page';
import { SuiFeedModule } from 'ngx-semantic/views/feed';
import { AdvertisementPage } from './advertisement/advertisement.page';
import { SuiHeaderModule } from 'ngx-semantic/elements/header';
import { SuiTableModule } from 'ngx-semantic/collections/table';
import { SuiLabelModule } from 'ngx-semantic/elements/label';
import { SuiIconModule } from 'ngx-semantic/elements/icon';
import { SuiCardModule } from 'ngx-semantic/views/card';
import { SuiStatisticModule } from 'ngx-semantic/views/statistics';
import { SuiImageModule } from 'ngx-semantic/elements/image';
import { SuiSegmentModule } from 'ngx-semantic/elements/segment';
import { SuiMessageModule } from 'ngx-semantic/collections/message';
import { SuiAdvertisementModule } from 'ngx-semantic/views/advertisement';
import { ItemPage } from './item/item.page';
import { SuiItemsModule } from 'ngx-semantic/views/items';
import { SuiAccordionModule } from 'ngx-semantic/modules/accordion';
import { SuiButtonModule } from 'ngx-semantic/elements/button';

@NgModule({
  declarations: [
    AdvertisementPage,
    CardsComponent,
    FeedPage,
    StatisticsComponent,
    ItemPage,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ViewsRoutingModule,
    SuiFeedModule,
    SuiButtonModule,
    SuiHeaderModule,
    SuiTableModule,
    SuiLabelModule,
    SuiIconModule,
    SuiCardModule,
    SuiItemsModule,
    SuiImageModule,
    SuiMessageModule,
    SuiSegmentModule,
    SuiStatisticModule,
    SuiAdvertisementModule,
  ]
})
export class ViewsModule {
}

