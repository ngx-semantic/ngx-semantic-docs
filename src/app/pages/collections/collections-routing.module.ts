/**
 * Created by bolorundurowb on 1/28/2021
 */
import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from './messages/messages.page';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.page';
import {GridComponent} from './grid/grid.page';
import {FormComponent} from './form/form.page';
import {MenuComponent} from './menu/menu.page';
import {TableComponent} from './table/table.page';
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}

