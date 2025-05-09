/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FormComponent} from './form/form.page';
import {GridComponent} from './grid/grid.page';
import {MenuComponent} from './menu/menu.page';
import {TableComponent} from './table/table.page';
import {SharedModule} from "../../shared/shared.module";
import {MessagesComponent} from './messages/messages.page';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.page';
import {CollectionsRoutingModule} from "./collections-routing.module";

import {SuiFormModule} from "ngx-semantic/collections/form";
import {SuiMessageModule} from "ngx-semantic/collections/message";
import {SuiHeaderModule} from "ngx-semantic/elements/header";
import {SuiIconModule} from "ngx-semantic/elements/icon";
import {SuiBreadcrumbModule} from "ngx-semantic/collections/breadcrumb";
import {SuiTableModule} from 'ngx-semantic/collections/table';
import {SuiLabelModule} from 'ngx-semantic/elements/label';
import {SuiCheckboxModule} from 'ngx-semantic/modules/checkbox';
import {SuiButtonModule} from 'ngx-semantic/elements/button';
import {SuiSegmentModule} from 'ngx-semantic/elements/segment';
import {SuiSelectModule} from 'ngx-semantic/modules/select';

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
    SuiBreadcrumbModule,
    SuiTableModule,
    SuiLabelModule,
    SuiCheckboxModule,
    SuiButtonModule,
    SuiSegmentModule,
    SuiSelectModule
  ]
})
export class CollectionsModule {
}

