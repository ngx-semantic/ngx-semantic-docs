/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {QuickStartComponent} from "./quick-start/quick-start.component";
import {GeneralRoutingModule} from "./general-routing.module";

import {SuiHeaderModule} from "ngx-semantic/elements/header";
import { ContributingComponent } from './contributing/contributing.component';

@NgModule({
  declarations: [
    QuickStartComponent,
    ContributingComponent
  ],
  imports: [
    CommonModule,
    SuiHeaderModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule {
}
