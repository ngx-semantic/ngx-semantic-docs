import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ElementsComponent} from './pages/elements/elements.component';
import {QuickStartComponent} from './pages/general/home/quick-start.component';
import {CollectionsComponent} from './pages/collections/collections.component';
import {ViewsComponent} from './pages/views/views.component';
import {CardsComponent} from './pages/views/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuickStartComponent,
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
    children: [
      {
        path: 'cards',
        component: CardsComponent,
      },
    ],
  },
  {
    path: '**',
    component: QuickStartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
