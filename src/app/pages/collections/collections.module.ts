/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FormComponent} from "./form/form.component";
import {GridComponent} from "./grid/grid.component";
import {MenuComponent} from "./menu/menu.component";
import {TableComponent} from "./table/table.component";
import {SharedModule} from "../../shared/shared.module";
import {MessagesComponent} from "./messages/messages.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {CollectionsRoutingModule} from "./collections-routing.module";

import {SuiFormModule} from "ngx-semantic/collections/form";
import {SuiMessageModule} from "ngx-semantic/collections/message";
import {SuiHeaderModule} from "ngx-semantic/elements/header";
import {SuiIconModule} from "ngx-semantic/elements/icon";
import {SuiBreadcrumbModule} from "ngx-semantic/collections/breadcrumb";

@NgModule({
  declarations: [
    FormComponent,
    GridComponent,
    MenuComponent,
    TableComponent,
    MessagesComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SuiFormModule,
    SuiIconModule,
    SuiHeaderModule,
    SuiMessageModule,
    CollectionsRoutingModule,
    SuiBreadcrumbModule
  ]
})
export class CollectionsModule {
}
