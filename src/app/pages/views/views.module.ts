/**
 * Created by bolorundurowb on 1/28/2021
 */

import { NgModule } from '@angular/core';
import { CardsComponent } from './card/cards.component';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StatisticsComponent } from './statistic/statistics.component';
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
    SuiHeaderModule,
    SuiTableModule,
    SuiLabelModule,
    SuiIconModule,
    SuiCardModule,
    SuiImageModule,
    SuiMessageModule,
    SuiSegmentModule,
    SuiStatisticModule,
    SuiAdvertisementModule,
  ]
})
export class ViewsModule {
}
