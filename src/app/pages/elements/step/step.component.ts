import {Component, AfterViewChecked} from '@angular/core';
import {Title} from '@angular/platform-browser';
import snippetSingleSrc from './snippets/single.sample.html' with { loader: 'text' };
import snippetSetSrc from './snippets/set.sample.html' with { loader: 'text' };
import snippetOrderedSrc from './snippets/ordered.sample.html' with { loader: 'text' };
import snippetVerticalSrc from './snippets/vertical.sample.html' with { loader: 'text' };
import snippetDescriptionSrc from './snippets/description.sample.html' with { loader: 'text' };
import snippetIconSrc from './snippets/icon.sample.html' with { loader: 'text' };
import snippetLinkSrc from './snippets/link.sample.html' with { loader: 'text' };
import snippetLinkAltSrc from './snippets/link-alt.sample.html' with { loader: 'text' };
import snippetActiveSrc from './snippets/active.sample.html' with { loader: 'text' };
import snippetCompletedSrc from './snippets/completed.sample.html' with { loader: 'text' };
import snippetCompletedAltSrc from './snippets/completed-alt.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetStackableSrc from './snippets/stackable.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetUnstackableSrc from './snippets/unstackable.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/attached.sample.html' with { loader: 'text' };
import snippetEvenlyDividedSrc from './snippets/evenly-divided.sample.html' with { loader: 'text' };
import snippetEvenlyDividedAltSrc from './snippets/evenly-divided-alt.sample.html' with { loader: 'text' };
import snippetSizeMiniSrc from './snippets/size-mini.sample.html' with { loader: 'text' };
import snippetSizeTinySrc from './snippets/size-tiny.sample.html' with { loader: 'text' };
import snippetSizeSmallSrc from './snippets/size-small.sample.html' with { loader: 'text' };
import snippetSizeLargeSrc from './snippets/size-large.sample.html' with { loader: 'text' };
import snippetSizeBigSrc from './snippets/size-big.sample.html' with { loader: 'text' };
import snippetSizeHugeSrc from './snippets/size-huge.sample.html' with { loader: 'text' };
import snippetSizeMassiveSrc from './snippets/size-massive.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-steps',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss'],
    standalone: false
})
export class StepComponent {
  snippetSingle = snippetSingleSrc;
  snippetSet = snippetSetSrc;
  snippetOrdered = snippetOrderedSrc;
  snippetVertical = snippetVerticalSrc;
  snippetDescription = snippetDescriptionSrc;
  snippetIcon = snippetIconSrc;
  snippetLink = snippetLinkSrc;
  snippetLinkAlt = snippetLinkAltSrc;
  snippetActive = snippetActiveSrc;
  snippetCompleted = snippetCompletedSrc;
  snippetCompletedAlt = snippetCompletedAltSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetStackable = snippetStackableSrc;
  snippetFluid = snippetFluidSrc;
  snippetUnstackable = snippetUnstackableSrc;
  snippetAttached = snippetAttachedSrc;
  snippetEvenlyDivided = snippetEvenlyDividedSrc;
  snippetEvenlyDividedAlt = snippetEvenlyDividedAltSrc;
  snippetSizeMini = snippetSizeMiniSrc;
  snippetSizeTiny = snippetSizeTinySrc;
  snippetSizeSmall = snippetSizeSmallSrc;
  snippetSizeLarge = snippetSizeLargeSrc;
  snippetSizeBig = snippetSizeBigSrc;
  snippetSizeHuge = snippetSizeHugeSrc;
  snippetSizeMassive = snippetSizeMassiveSrc;


























  constructor(title: Title) {
    title.setTitle('Step | Ngx Semantic');
  }
}
