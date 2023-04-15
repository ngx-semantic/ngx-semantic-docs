/**
 * Created by bolorundurowb on 1/28/2021
 */
import {RouterModule, Routes} from "@angular/router";
import {CardsComponent} from "./card/cards.component";
import {NgModule} from "@angular/core";
import {StatisticsComponent} from "./statistic/statistics.component";
import {ItemsComponent} from "./item/items.component";

const routes: Routes = [
  {
    path: 'card',
    component: CardsComponent,
  },
  {
    path: 'item',
    component: ItemsComponent,
  },
  {
    path: 'statistic',
    component: StatisticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
