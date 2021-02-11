/**
 * Created by bolorundurowb on 2/10/2021
 */

import {NgModule} from "@angular/core";
import {EmbedComponent} from './embed/embed.component';
import {CommonModule} from "@angular/common";
import {ModulesRoutingModule} from "./modules-routing.module";
import {SuiEmbedModule, SuiHeaderModule, SuiLabelModule, SuiTableModule} from "ngx-semantic";
import {SharedModule} from "../../shared/shared.module";
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
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
    ModulesRoutingModule
  ]
})
export class ModulesModule {
}
