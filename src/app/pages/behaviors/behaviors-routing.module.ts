import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationPage } from './form-validation/form-validation.page';
import { VisibilityPage } from './visibility/visibility.page';

const routes: Routes = [
  {
    path: 'form',
    component: FormValidationPage
  },
  {
    path: 'visibility',
    component: VisibilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BehaviorsRoutingModule {
}
