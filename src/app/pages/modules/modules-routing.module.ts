/**
 * Created by bolorundurowb on 2/10/2021
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmbedComponent} from "./embed/embed.component";
import {RatingComponent} from "./rating/rating.component";

const routes: Routes = [
  {
    path: 'embed',
    component: EmbedComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {
}