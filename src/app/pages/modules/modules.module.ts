/**
 * Created by bolorundurowb on 2/10/2021
 */

import {NgModule} from "@angular/core";
import {EmbedComponent} from './embed/embed.component';
import {CommonModule} from "@angular/common";
import {ModulesRoutingModule} from "./modules-routing.module";
import {
  SuiButtonModule,
  SuiEmbedModule,
  SuiHeaderModule,
  SuiLabelModule, SuiPlaceholderModule,
  SuiRatingModule,
  SuiTableModule,
  SuiTabsModule
} from "ngx-semantic";
import {SharedModule} from "../../shared/shared.module";
import { RatingComponent } from './rating/rating.component';
import {TabComponent} from "./tab/tab.component";
import {FormsModule} from "@angular/forms";

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
    ModulesRoutingModule,
    SuiTabsModule,
    SuiPlaceholderModule,
    SuiButtonModule,
    FormsModule
  ]
})
export class ModulesModule {
}
