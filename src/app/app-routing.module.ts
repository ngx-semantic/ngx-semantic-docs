import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.page';
import { ElementsComponent } from './pages/elements/elements.page';
import { CollectionsComponent } from './pages/collections/collections.page';
import { ViewsComponent } from './pages/views/views.page';
import { ModulesComponent } from './pages/modules/modules.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    loadChildren: () => import('./pages/general/general.module').then(m => m.GeneralModule)
  },
  {
    path: 'elements',
    component: ElementsComponent,
    loadChildren: () => import('./pages/elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    loadChildren: () => import('./pages/collections/collections.module').then(m => m.CollectionsModule)
  },
  {
    path: 'views',
    component: ViewsComponent,
    loadChildren: () => import('./pages/views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'modules',
    component: ModulesComponent,
    loadChildren: () => import('./pages/modules/modules.module').then(m => m.ModulesModule)
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {}) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
