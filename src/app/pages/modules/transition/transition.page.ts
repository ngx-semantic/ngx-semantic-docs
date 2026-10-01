import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetScale from './snippets/scale.sample.html' with { loader: 'text' };
import snippetZoom from './snippets/zoom.sample.html' with { loader: 'text' };
import snippetFade from './snippets/fade.sample.html' with { loader: 'text' };
import snippetFlip from './snippets/flip.sample.html' with { loader: 'text' };
import snippetDrop from './snippets/drop.sample.html' with { loader: 'text' };
import snippetFly from './snippets/fly.sample.html' with { loader: 'text' };
import snippetSwing from './snippets/swing.sample.html' with { loader: 'text' };
import snippetBrowse from './snippets/browse.sample.html' with { loader: 'text' };
import snippetSlide from './snippets/slide.sample.html' with { loader: 'text' };
import snippetStatic from './snippets/static.sample.html' with { loader: 'text' };
import snippetStaticTs from './snippets/static.sample.txt' with { loader: 'text' };
import snippetVisibility from './snippets/visibility.sample.html' with { loader: 'text' };
import snippetDirection from './snippets/direction.sample.html' with { loader: 'text' };
import snippetDuration from './snippets/duration.sample.html' with { loader: 'text' };
import snippetMethods from './snippets/methods.sample.html' with { loader: 'text' };
import snippetEvents from './snippets/events.sample.html' with { loader: 'text' };
import snippetEventsTs from './snippets/events.sample.txt' with { loader: 'text' };
import snippetDisabled from './snippets/disabled.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-transition',
  templateUrl: './transition.page.html',
  styles: [`
    :host ::ng-deep .transition-stage {
      min-height: 170px;
      padding-top: 1rem;
    }
  `],
  standalone: false
})
export class TransitionPage {
  snippetScale = snippetScale;
  snippetZoom = snippetZoom;
  snippetFade = snippetFade;
  snippetFlip = snippetFlip;
  snippetDrop = snippetDrop;
  snippetFly = snippetFly;
  snippetSwing = snippetSwing;
  snippetBrowse = snippetBrowse;
  snippetSlide = snippetSlide;
  snippetStatic = snippetStatic;
  snippetStaticTs = snippetStaticTs;
  snippetVisibility = snippetVisibility;
  snippetDirection = snippetDirection;
  snippetDuration = snippetDuration;
  snippetMethods = snippetMethods;
  snippetEvents = snippetEvents;
  snippetEventsTs = snippetEventsTs;
  snippetDisabled = snippetDisabled;

  constructor(title: Title) {
    title.setTitle('Transition | Ngx Semantic');
  }
}
