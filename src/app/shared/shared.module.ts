/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SuiIconModule} from "ngx-semantic/elements/icon";
import {SuiPopupModule} from "ngx-semantic/modules/popup";
import {SuiLabelModule} from "ngx-semantic/elements/label";
import {SuiGridModule} from "ngx-semantic/collections/grid";
import {SuiMenuModule} from "ngx-semantic/collections/menu";
import {SuiHeaderModule} from "ngx-semantic/elements/header";
import {SuiDividerModule} from "ngx-semantic/elements/divider";
import {SuiSegmentModule} from "ngx-semantic/elements/segment";
import {SuiContainerModule} from "ngx-semantic/elements/container";

import {DocPageComponent} from "./components/doc-page.component";
import {CodeSampleComponent} from "./components/code-sample.component";

@NgModule({
  imports: [
    CommonModule,
    SuiSegmentModule,
    SuiLabelModule,
    SuiIconModule,
    SuiContainerModule,
    SuiGridModule,
    SuiDividerModule,
    SuiMenuModule,
    SuiHeaderModule,
    SuiPopupModule
  ],
  declarations: [
    CodeSampleComponent,
    DocPageComponent
  ],
  exports: [
    CodeSampleComponent,
    DocPageComponent
  ]
})
export class SharedModule {
}
