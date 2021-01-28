/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {QuickStartComponent} from "./home/quick-start.component";
import {CommonModule} from "@angular/common";
import {GeneralRoutingModule} from "./general-routing.module";

@NgModule({
  declarations: [
    QuickStartComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule {
}
