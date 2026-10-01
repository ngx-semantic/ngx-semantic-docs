import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { BehaviorsRoutingModule } from './behaviors-routing.module';

import { SuiFormModule } from 'ngx-semantic/collections/form';
import { SuiGridModule } from 'ngx-semantic/collections/grid';
import { SuiMenuModule } from 'ngx-semantic/collections/menu';
import { SuiMessageModule } from 'ngx-semantic/collections/message';
import { SuiTableModule } from 'ngx-semantic/collections/table';
import { SuiButtonModule } from 'ngx-semantic/elements/button';
import { SuiHeaderModule } from 'ngx-semantic/elements/header';
import { SuiImageModule } from 'ngx-semantic/elements/image';
import { SuiLabelModule } from 'ngx-semantic/elements/label';
import { SuiSegmentModule } from 'ngx-semantic/elements/segment';
import { SuiVisibilityModule } from 'ngx-semantic/modules/visibility';

import { FormValidationPage } from './form-validation/form-validation.page';
import { FORM_VALIDATION_EXAMPLES } from './form-validation/form-validation-examples.component';
import { VisibilityPage } from './visibility/visibility.page';
import { VISIBILITY_EXAMPLES } from './visibility/visibility-examples.component';

@NgModule({
  declarations: [
    ...FORM_VALIDATION_EXAMPLES,
    ...VISIBILITY_EXAMPLES,
    FormValidationPage,
    VisibilityPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    BehaviorsRoutingModule,
    SuiFormModule,
    SuiGridModule,
    SuiMenuModule,
    SuiMessageModule,
    SuiTableModule,
    SuiButtonModule,
    SuiHeaderModule,
    SuiImageModule,
    SuiLabelModule,
    SuiSegmentModule,
    SuiVisibilityModule
  ]
})
export class BehaviorsModule {
}
