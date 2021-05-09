/**
 * Created by bolorundurowb on 1/28/2021
 */

import {RouterModule, Routes} from "@angular/router";
import {ButtonsComponent} from "./buttons/buttons.component";
import {ContainerComponent} from "./container/container.component";
import {DividerComponent} from "./divider/divider.component";
import {FlagsComponent} from "./flag/flags.component";
import {HeaderComponent} from "./header/header.component";
import {IconComponent} from "./icon/icon.component";
import {InputComponent} from "./input/input.component";
import {LabelComponent} from "./label/label.component";
import {ListComponent} from "./list/list.component";
import {LoaderComponent} from "./loader/loader.component";
import {PlaceholdersComponent} from "./placeholder/placeholders.component";
import {RailComponent} from "./rail/rail.component";
import {RevealComponent} from "./reveal/reveal.component";
import {SegmentsComponent} from "./segment/segments.component";
import {StepComponent} from "./step/step.component";
import {NgModule} from "@angular/core";
import {ImageComponent} from './image/image.component';

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
    component: HeaderComponent,
  },
  {
    path: 'icon',
    component: IconComponent,
  },
  {
    path: 'image',
    component: ImageComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'label',
    component: LabelComponent,
  },
  {
    path: 'list',
    component: ListComponent,
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
    component: RevealComponent,
  },
  {
    path: 'segment',
    component: SegmentsComponent,
  },
  {
    path: 'step',
    component: StepComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {
}
