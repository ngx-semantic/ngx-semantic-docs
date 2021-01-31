/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CodeSampleComponent} from "./components/code-sample.component";
import {DocPageComponent} from "./components/doc-page.component";
import {
  SuiContainerModule,
  SuiDividerModule,
  SuiGridModule, SuiHeaderModule,
  SuiIconModule,
  SuiLabelModule, SuiMenuModule,
  SuiSegmentModule
} from "ngx-semantic";

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
    SuiHeaderModule
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
