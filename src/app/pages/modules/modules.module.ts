/**
 * Created by bolorundurowb on 2/10/2021
 */

import {NgModule} from "@angular/core";
import {EmbedComponent} from './embed/embed.component';
import {CommonModule} from "@angular/common";
import {ModulesRoutingModule} from "./modules-routing.module";
import {SuiEmbedModule, SuiHeaderModule, SuiLabelModule, SuiRatingModule, SuiTableModule} from "ngx-semantic";
import {SharedModule} from "../../shared/shared.module";
import { RatingComponent } from './rating/rating.component';
import {TabComponent} from "./tab/tab.component";

@NgModule({
  declarations: [
    TabComponent,
    EmbedComponent,
    RatingComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SuiLabelModule,
    SuiTableModule,
    SuiEmbedModule,
    SuiHeaderModule,
    SuiRatingModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule {
}
