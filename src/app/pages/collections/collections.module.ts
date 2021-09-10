/**
 * Created by bolorundurowb on 1/28/2021
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormComponent} from './form/form.component';
import {GridComponent} from './grid/grid.component';
import {MenuComponent} from './menu/menu.component';
import {TableComponent} from './table/table.component';
import {SharedModule} from '../../shared/shared.module';
import {SuiIconModule} from 'ngx-semantic/elements/icon';
import {SuiLabelModule} from 'ngx-semantic/elements/label';
import {SuiFormModule} from 'ngx-semantic/collections/form';
import {SuiSelectModule} from 'ngx-semantic/modules/select';
import {SuiGridModule} from 'ngx-semantic/collections/grid';
import {SuiButtonModule} from 'ngx-semantic/elements/button';
import {SuiHeaderModule} from 'ngx-semantic/elements/header';
import {SuiTableModule} from 'ngx-semantic/collections/table';
import {SuiSegmentModule} from 'ngx-semantic/elements/segment';
import {SuiCheckboxModule} from 'ngx-semantic/modules/checkbox';
import {MessagesComponent} from './messages/messages.component';
import {SuiMessageModule} from 'ngx-semantic/collections/message';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {CollectionsRoutingModule} from './collections-routing.module';
import {SuiBreadcrumbModule} from 'ngx-semantic/collections/breadcrumb';

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
    SuiGridModule,
    SuiTableModule,
    SuiLabelModule,
    SuiButtonModule,
    SuiHeaderModule,
    SuiSelectModule,
    SuiSegmentModule,
    SuiMessageModule,
    SuiCheckboxModule,
    SuiBreadcrumbModule,
    CollectionsRoutingModule,
  ]
})
export class CollectionsModule {
}
