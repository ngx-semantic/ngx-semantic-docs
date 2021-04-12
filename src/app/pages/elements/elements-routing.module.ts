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
import {InputComponent} from "./input/input.component";
import {LabelsComponent} from "./label/labels.component";
import {ListsComponent} from "./list/lists.component";
import {LoaderComponent} from "./loader/loader.component";
import {PlaceholdersComponent} from "./placeholder/placeholders.component";
import {RailComponent} from "./rail/rail.component";
import {RevealsComponent} from "./reveal/reveals.component";
import {SegmentsComponent} from "./segment/segments.component";
import {StepsComponent} from "./step/steps.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent,
  },
  {
    path: 'container',
    component: ContainerComponent,
  },
  {
    path: 'divider',
    component: DividerComponent,
  },
  {
    path: 'flag',
    component: FlagsComponent,
  },
  {
    path: 'header',
    component: HeadersComponent,
  },
  {
    path: 'icon',
    component: IconsComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'label',
    component: LabelsComponent,
  },
  {
    path: 'list',
    component: ListsComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: 'placeholder',
    component: PlaceholdersComponent,
  },
  {
    path: 'rail',
    component: RailComponent,
  },
  {
    path: 'reveal',
    component: RevealsComponent,
  },
  {
    path: 'segment',
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
