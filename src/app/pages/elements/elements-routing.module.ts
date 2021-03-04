/**
 * Created by bolorundurowb on 1/28/2021
 */
import {RouterModule, Routes} from "@angular/router";
import {ButtonsComponent} from "./buttons/buttons.component";
import {ContainerComponent} from "./container/container.component";
import {DividerComponent} from "./divider/divider.component";
import {FlagsComponent} from "./flag/flags.component";
import {HeadersComponent} from "./header/headers.component";
import {IconsComponent} from "./icons/icons.component";
import {InputsComponent} from "./input/inputs.component";
import {LabelsComponent} from "./label/labels.component";
import {ListsComponent} from "./list/lists.component";
import {LoadersComponent} from "./loader/loaders.component";
import {PlaceholdersComponent} from "./placeholder/placeholders.component";
import {RailsComponent} from "./rail/rails.component";
import {RevealsComponent} from "./reveal/reveals.component";
import {SegmentsComponent} from "./segment/segments.component";
import {StepsComponent} from "./step/steps.component";
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
    path: 'list',
    component: ListsComponent,
  },
  {
    path: 'loader',
    component: LoadersComponent,
  },
  {
    path: 'placeholders',
    component: PlaceholdersComponent,
  },
  {
    path: 'rail',
    component: RailsComponent,
  },
  {
    path: 'reveal',
    component: RevealsComponent,
  },
  {
    path: 'segments',
    component: SegmentsComponent,
  },
  {
    path: 'step',
    component: StepsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {
}
