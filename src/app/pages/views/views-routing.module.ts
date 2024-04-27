/**
 * Created by bolorundurowb on 1/28/2021
 */
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './card/cards.component';
import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistic/statistics.component';
import { FeedPage } from './feed/feed.page';

const routes: Routes = [
  {
    path: 'card',
    component: CardsComponent,
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
