/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CardsComponent} from "./card/cards.component";
import {CommonModule} from "@angular/common";
import {ViewsRoutingModule} from "./views-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {NgxSemanticModule} from "ngx-semantic";
import {StatisticsComponent} from './statistic/statistics.component';
import {ItemsComponent} from "./item/items.component";

@NgModule({
  declarations: [
    CardsComponent,
    ItemsComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxSemanticModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule {
}
