/**
 * Created by bolorundurowb on 1/28/2021
 */
import {RouterModule, Routes} from "@angular/router";
import {CardsComponent} from "./cards/cards.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'cards',
    component: CardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
