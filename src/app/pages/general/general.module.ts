/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {QuickStartComponent} from "./quick-start/quick-start.component";
import {CommonModule} from "@angular/common";
import {GeneralRoutingModule} from "./general-routing.module";
import {SuiHeaderModule} from "ngx-semantic";

@NgModule({
  declarations: [
    QuickStartComponent
  ],
  imports: [
    CommonModule,
    SuiHeaderModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule {
}
