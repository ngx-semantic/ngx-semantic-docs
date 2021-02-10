/**
 * Created by bolorundurowb on 2/10/2021
 */

import {NgModule} from "@angular/core";
import {EmbedComponent} from './embed/embed.component';
import {CommonModule} from "@angular/common";
import {ModulesRoutingModule} from "./modules-routing.module";

@NgModule({
  declarations: [
    EmbedComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule {
}
