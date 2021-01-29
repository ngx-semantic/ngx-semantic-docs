/**
 * Created by bolorundurowb on 1/28/2021
 */
import {RouterModule, Routes} from "@angular/router";
import {ButtonsComponent} from "./buttons/buttons.component";
import {ContainerComponent} from "./container/container.component";
import {DividerComponent} from "./divider/divider.component";
import {FlagsComponent} from "./flags/flags.component";
import {HeadersComponent} from "./headers/headers.component";
import {IconsComponent} from "./icons/icons.component";
import {InputsComponent} from "./inputs/inputs.component";
import {LabelsComponent} from "./labels/labels.component";
import {ListsComponent} from "./lists/lists.component";
import {LoadersComponent} from "./loaders/loaders.component";
import {PlaceholdersComponent} from "./placeholders/placeholders.component";
import {RailsComponent} from "./rails/rails.component";
import {RevealsComponent} from "./reveals/reveals.component";
import {SegmentsComponent} from "./segments/segments.component";
import {StepsComponent} from "./steps/steps.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'container',
    component: ContainerComponent,
  },
  {
    path: 'dividers',
    component: DividerComponent,
  },
  {
    path: 'flags',
    component: FlagsComponent,
  },
  {
    path: 'headers',
    component: HeadersComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'inputs',
    component: InputsComponent,
  },
  {
    path: 'labels',
    component: LabelsComponent,
  },
  {
    path: 'lists',
    component: ListsComponent,
  },
  {
    path: 'loaders',
    component: LoadersComponent,
  },
  {
    path: 'placeholders',
    component: PlaceholdersComponent,
  },
  {
    path: 'rails',
    component: RailsComponent,
  },
  {
    path: 'reveals',
    component: RevealsComponent,
  },
  {
    path: 'segments',
    component: SegmentsComponent,
  },
  {
    path: 'steps',
    component: StepsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {
}
