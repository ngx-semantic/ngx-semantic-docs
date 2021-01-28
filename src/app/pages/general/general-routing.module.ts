/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuickStartComponent} from "./quick-start/quick-start.component";

const routes: Routes = [{
  path: '/',
  component: QuickStartComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {
}
