import { Component } from '@angular/core';

export class TransitionSampleState {
  animation = 'fade';
  visible = true;
  duration: number | string = 500;
  disabled = false;
  playCount = 0;
  events: string[] = [];

  run(animation: string): void {
    this.animation = animation;
    this.visible = !this.visible;
  }

  play(animation: string): void {
    this.animation = animation;
    this.playCount++;
  }

  log(event: string): void {
    this.events = [event, ...this.events].slice(0, 6);
  }
}

@Component({
  selector: 'doc-transition-scale-example',
  templateUrl: './snippets/scale.sample.html',
  standalone: false
})
export class TransitionScaleExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-zoom-example',
  templateUrl: './snippets/zoom.sample.html',
  standalone: false
})
export class TransitionZoomExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-fade-example',
  templateUrl: './snippets/fade.sample.html',
  standalone: false
})
export class TransitionFadeExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-flip-example',
  templateUrl: './snippets/flip.sample.html',
  standalone: false
})
export class TransitionFlipExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-drop-example',
  templateUrl: './snippets/drop.sample.html',
  standalone: false
})
export class TransitionDropExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-fly-example',
  templateUrl: './snippets/fly.sample.html',
  standalone: false
})
export class TransitionFlyExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-swing-example',
  templateUrl: './snippets/swing.sample.html',
  standalone: false
})
export class TransitionSwingExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-browse-example',
  templateUrl: './snippets/browse.sample.html',
  standalone: false
})
export class TransitionBrowseExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-slide-example',
  templateUrl: './snippets/slide.sample.html',
  standalone: false
})
export class TransitionSlideExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-static-example',
  templateUrl: './snippets/static.sample.html',
  standalone: false
})
export class TransitionStaticExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-visibility-example',
  templateUrl: './snippets/visibility.sample.html',
  standalone: false
})
export class TransitionVisibilityExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-direction-example',
  templateUrl: './snippets/direction.sample.html',
  standalone: false
})
export class TransitionDirectionExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-duration-example',
  templateUrl: './snippets/duration.sample.html',
  standalone: false
})
export class TransitionDurationExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-methods-example',
  templateUrl: './snippets/methods.sample.html',
  standalone: false
})
export class TransitionMethodsExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-events-example',
  templateUrl: './snippets/events.sample.html',
  standalone: false
})
export class TransitionEventsExampleComponent extends TransitionSampleState {
}

@Component({
  selector: 'doc-transition-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class TransitionDisabledExampleComponent extends TransitionSampleState {
}

export const TRANSITION_EXAMPLES = [
  TransitionScaleExampleComponent,
  TransitionZoomExampleComponent,
  TransitionFadeExampleComponent,
  TransitionFlipExampleComponent,
  TransitionDropExampleComponent,
  TransitionFlyExampleComponent,
  TransitionSwingExampleComponent,
  TransitionBrowseExampleComponent,
  TransitionSlideExampleComponent,
  TransitionStaticExampleComponent,
  TransitionVisibilityExampleComponent,
  TransitionDirectionExampleComponent,
  TransitionDurationExampleComponent,
  TransitionMethodsExampleComponent,
  TransitionEventsExampleComponent,
  TransitionDisabledExampleComponent,
];
