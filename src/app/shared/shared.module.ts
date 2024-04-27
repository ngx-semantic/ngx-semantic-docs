/**
 * Created by bolorundurowb on 1/28/2021
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiIconModule } from 'ngx-semantic/elements/icon';
import { SuiPopupModule } from 'ngx-semantic/modules/popup';
import { SuiLabelModule } from 'ngx-semantic/elements/label';
import { SuiGridModule } from 'ngx-semantic/collections/grid';
import { SuiMenuModule } from 'ngx-semantic/collections/menu';
import { SuiHeaderModule } from 'ngx-semantic/elements/header';
import { SuiDividerModule } from 'ngx-semantic/elements/divider';
import { SuiSegmentModule } from 'ngx-semantic/elements/segment';
import { SuiContainerModule } from 'ngx-semantic/elements/container';

import { DocPageComponent } from './components/doc-page.component';
import { CodeSampleComponent } from './components/code-sample/code-sample.component';
import { DocPageContentDirective } from './directives/doc-page-content.directive';
import { DocWireframeComponent } from './components/doc-wireframe.component';
import { Highlight, provideHighlightOptions } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@NgModule({
  imports: [
    CommonModule,
    SuiSegmentModule,
    SuiLabelModule,
    SuiIconModule,
    SuiContainerModule,
    SuiGridModule,
    SuiDividerModule,
    SuiMenuModule,
    SuiHeaderModule,
    SuiPopupModule,
    HighlightLineNumbers,
    Highlight
  ],
  declarations: [
    CodeSampleComponent,
    DocPageComponent,
    DocPageContentDirective,
    DocWireframeComponent
  ],
  exports: [
    CodeSampleComponent,
    DocPageComponent,
    DocPageContentDirective,
    DocWireframeComponent
  ],
  providers: [
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        html: () => import('highlight.js/lib/languages/vbscript-html.js')
      },
    }),
  ],
})
export class SharedModule {
}
