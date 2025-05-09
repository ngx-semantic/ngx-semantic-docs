/**
 * Created by bolorundurowb on 1/28/2021
 */
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './card/cards.page';
import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistic/statistics.page';
import { FeedPage } from './feed/feed.page';
import { AdvertisementPage } from './advertisement/advertisement.page';
import { ItemPage } from './item/item.page';

const routes: Routes = [
  {
    path: 'advertisement',
    component: AdvertisementPage,
  },
  {
    path: 'card',
    component: CardsComponent,
  },
  {
    path: 'item',
    component: ItemPage,
  },
  {
    path: 'feed',
    component: FeedPage,
  },
  {
    path: 'statistic',
    component: StatisticsComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ViewsRoutingModule {
}

