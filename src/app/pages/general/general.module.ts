/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {QuickStartComponent} from './quick-start/quick-start.page';
import {GeneralRoutingModule} from "./general-routing.module";

import {SuiHeaderModule} from "ngx-semantic/elements/header";
import { ContributingComponent } from './contributing/contributing.page';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@NgModule({
  declarations: [
    QuickStartComponent,
    ContributingComponent
  ],
  imports: [
    CommonModule,
    SuiHeaderModule,
    GeneralRoutingModule,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers
  ]
})
export class GeneralModule {
}

