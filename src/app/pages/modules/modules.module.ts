/**
 * Created by bolorundurowb on 2/10/2021
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {EmbedComponent} from './embed/embed.component';
import {ModulesRoutingModule} from "./modules-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { RatingComponent } from './rating/rating.component';
import {TabComponent} from "./tab/tab.component";
import { DimmerComponent } from './dimmer/dimmer.component';

import {SuiLabelModule} from "ngx-semantic/elements/label";
import {SuiHeaderModule} from "ngx-semantic/elements/header";
import {SuiEmbedModule} from "ngx-semantic/modules/embed";
import {SuiTableModule} from "ngx-semantic/collections/table";
import {SuiRatingModule} from "ngx-semantic/modules/rating";
import {SuiTabsModule} from "ngx-semantic/modules/tabs";
import {SuiPlaceholderModule} from "ngx-semantic/elements/placeholder";
import {SuiDimmerModule} from "ngx-semantic/modules/dimmer";
import {SuiButtonModule} from "ngx-semantic/elements/button";
import {SuiSegmentModule} from "ngx-semantic/elements/segment";
import {SuiIconModule} from "ngx-semantic/elements/icon";
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    TabComponent,
    EmbedComponent,
    RatingComponent,
    DimmerComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SuiLabelModule,
    SuiTableModule,
    SuiEmbedModule,
    SuiHeaderModule,
    SuiRatingModule,
    ModulesRoutingModule,
    SuiTabsModule,
    SuiPlaceholderModule,
    SuiButtonModule,
    FormsModule,
    SuiDimmerModule,
    SuiSegmentModule,
    SuiIconModule
  ]
})
export class ModulesModule {
}
