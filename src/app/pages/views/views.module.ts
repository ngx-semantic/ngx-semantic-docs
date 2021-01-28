/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CardsComponent} from "./cards/cards.component";
import {CommonModule} from "@angular/common";
import {ViewsRoutingModule} from "./views-routing.module";

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule {
}
