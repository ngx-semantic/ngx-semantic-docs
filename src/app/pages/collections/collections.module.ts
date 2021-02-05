/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {FormComponent} from "./form/form.component";
import {GridComponent} from "./grid/grid.component";
import {MenuComponent} from "./menu/menu.component";
import {MessagesComponent} from "./messages/messages.component";
import {TableComponent} from "./table/table.component";
import {CommonModule} from "@angular/common";
import {CollectionsRoutingModule} from "./collections-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {NgxSemanticModule} from "ngx-semantic";

@NgModule({
  declarations: [
    BreadcrumbComponent,
    FormComponent,
    GridComponent,
    MenuComponent,
    MessagesComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxSemanticModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule {
}