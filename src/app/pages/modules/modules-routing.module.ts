/**
 * Created by bolorundurowb on 2/10/2021
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DimmerComponent} from "./dimmer/dimmer.component";
import {EmbedComponent} from "./embed/embed.component";
import {RatingComponent} from "./rating/rating.component";
import {SearchComponent} from './search/search.component';
import {TabComponent} from "./tab/tab.component";

const routes: Routes = [
  {
    path: 'embed',
    component: EmbedComponent
  },
  {
    path: 'dimmer',
    component: DimmerComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'tab',
    component: TabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {
}
