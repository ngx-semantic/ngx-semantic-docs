/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
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
import {SuiTableModule} from 'ngx-semantic/collections/table';
import {SuiLabelModule} from 'ngx-semantic/elements/label';
import {SuiCheckboxModule} from 'ngx-semantic/modules/checkbox';
import {SuiButtonModule} from 'ngx-semantic/elements/button';
import {SuiSegmentModule} from 'ngx-semantic/elements/segment';
import {SuiSelectModule} from 'ngx-semantic/modules/select';
import {SuiGridModule} from 'ngx-semantic/collections/grid';
import {SuiMenuModule} from 'ngx-semantic/collections/menu';
import {SuiInputModule} from 'ngx-semantic/elements/input';
import {SuiDropdownModule} from 'ngx-semantic/modules/dropdown';

import { FORM_EXAMPLES } from './form/form-examples.component';

import { BREADCRUMB_EXAMPLES } from './breadcrumb/breadcrumb-examples.component';

import { MESSAGES_EXAMPLES } from './messages/messages-examples.component';

import { GRID_EXAMPLES } from './grid/grid-examples.component';

import { MENU_EXAMPLES } from './menu/menu-examples.component';

@NgModule({
  declarations: [
    ...MESSAGES_EXAMPLES,
    ...BREADCRUMB_EXAMPLES,
    ...FORM_EXAMPLES,
    ...GRID_EXAMPLES,
    ...MENU_EXAMPLES,
    FormComponent,
    GridComponent,
    MenuComponent,
    TableComponent,
    MessagesComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
    SuiSelectModule,
    SuiGridModule,
    SuiMenuModule,
    SuiInputModule,
    SuiDropdownModule
  ]
})
export class CollectionsModule {
}
