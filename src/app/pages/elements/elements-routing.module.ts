/**
 * Created by bolorundurowb on 1/28/2021
 */

import {RouterModule, Routes} from "@angular/router";
import {ButtonComponent} from './buttons/button.page';
import {ContainerComponent} from './container/container.page';
import {DividerComponent} from './divider/divider.page';
import {FlagComponent} from './flag/flag.page';
import {HeaderComponent} from './header/header.page';
import {IconComponent} from './icon/icon.page';
import {InputComponent} from './input/input.page';
import {LabelComponent} from './label/label.page';
import {ListComponent} from './list/list.page';
import {LoaderComponent} from './loader/loader.page';
import {PlaceholderComponent} from './placeholder/placeholder.page';
import {RailComponent} from './rail/rail.page';
import {RevealComponent} from './reveal/reveal.page';
import {SegmentComponent} from './segment/segment.page';
import {StepComponent} from './step/step.page';
import {NgModule} from "@angular/core";
import {ImageComponent} from './image/image.page';

const routes: Routes = [
  {
    path: 'button',
    component: ButtonComponent,
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
    component: FlagComponent,
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
    component: PlaceholderComponent,
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
    component: SegmentComponent,
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

