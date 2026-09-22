import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetSegmentSrc from './snippets/segment.sample.html' with { loader: 'text' };
import snippetPlaceholderSrc from './snippets/placeholder.sample.html' with { loader: 'text' };
import snippetPlaceholderAltSrc from './snippets/placeholder-alt.sample.html' with { loader: 'text' };
import snippetPlaceholderAltTooSrc from './snippets/placeholder-alt-too.sample.html' with { loader: 'text' };
import snippetRaisedSrc from './snippets/raised.sample.html' with { loader: 'text' };
import snippetStackedSrc from './snippets/stacked.sample.html' with { loader: 'text' };
import snippetTallStackedSrc from './snippets/tall-stacked.sample.html' with { loader: 'text' };
import snippetPiledSrc from './snippets/piled.sample.html' with { loader: 'text' };
import snippetVerticalSrc from './snippets/vertical.sample.html' with { loader: 'text' };
import snippetSegmentsSrc from './snippets/segments.sample.html' with { loader: 'text' };
import snippetColouredSegmentsSrc from './snippets/coloured-group.sample.html' with { loader: 'text' };
import snippetSecondarySrc from './snippets/secondary.sample.html' with { loader: 'text' };
import snippetNestedSrc from './snippets/nested.sample.html' with { loader: 'text' };
import snippetHorizontalSrc from './snippets/horizontal.sample.html' with { loader: 'text' };
import snippetRaisedGroupSrc from './snippets/raised-group.sample.html' with { loader: 'text' };
import snippetStackedGroupSrc from './snippets/stacked-group.sample.html' with { loader: 'text' };
import snippetPiledGroupSrc from './snippets/piled-group.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetAttachedSrc from './snippets/attached.sample.html' with { loader: 'text' };
import snippetAttachedAltSrc from './snippets/attached-alt.sample.html' with { loader: 'text' };
import snippetPaddedSrc from './snippets/padded.sample.html' with { loader: 'text' };
import snippetPaddedAltSrc from './snippets/padding-alt.sample.html' with { loader: 'text' };
import snippetCompactSrc from './snippets/compact.sample.html' with { loader: 'text' };
import snippetCompactAltSrc from './snippets/compact-alt.sample.html' with { loader: 'text' };
import snippetColouredSrc from './snippets/coloured.sample.html' with { loader: 'text' };
import snippetColouredInvertedSrc from './snippets/coloured-inverted.sample.html' with { loader: 'text' };
import snippetEmphasisSrc from './snippets/emphasis.sample.html' with { loader: 'text' };
import snippetEmphasisInvertedSrc from './snippets/emphasis-inverted.sample.html' with { loader: 'text' };
import snippetEmphasisInvertedColouredSrc from './snippets/emphasis-inverted-coloured.sample.html' with { loader: 'text' };
import snippetCircularSrc from './snippets/circular.sample.html' with { loader: 'text' };
import snippetClearingSrc from './snippets/clearing.sample.html' with { loader: 'text' };
import snippetFloatedSrc from './snippets/floated.sample.html' with { loader: 'text' };
import snippetTextAlignmentSrc from './snippets/text-alignment.sample.html' with { loader: 'text' };
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-segment',
    templateUrl: './segment.component.html',
    styleUrls: ['./segment.component.scss'],
    standalone: false
})
export class SegmentComponent {
  snippetSegment = snippetSegmentSrc;
  snippetPlaceholder = snippetPlaceholderSrc;
  snippetPlaceholderAlt = snippetPlaceholderAltSrc;
  snippetPlaceholderAltToo = snippetPlaceholderAltTooSrc;
  snippetRaised = snippetRaisedSrc;
  snippetStacked = snippetStackedSrc;
  snippetTallStacked = snippetTallStackedSrc;
  snippetPiled = snippetPiledSrc;
  snippetVertical = snippetVerticalSrc;
  snippetSegments = snippetSegmentsSrc;
  snippetColouredSegments = snippetColouredSegmentsSrc;
  snippetSecondary = snippetSecondarySrc;
  snippetNested = snippetNestedSrc;
  snippetHorizontal = snippetHorizontalSrc;
  snippetRaisedGroup = snippetRaisedGroupSrc;
  snippetStackedGroup = snippetStackedGroupSrc;
  snippetPiledGroup = snippetPiledGroupSrc;
  snippetDisabled = snippetDisabledSrc;
  snippetLoading = snippetLoadingSrc;
  snippetInverted = snippetInvertedSrc;
  snippetAttached = snippetAttachedSrc;
  snippetAttachedAlt = snippetAttachedAltSrc;
  snippetPadded = snippetPaddedSrc;
  snippetPaddedAlt = snippetPaddedAltSrc;
  snippetCompact = snippetCompactSrc;
  snippetCompactAlt = snippetCompactAltSrc;
  snippetColoured = snippetColouredSrc;
  snippetColouredInverted = snippetColouredInvertedSrc;
  snippetEmphasis = snippetEmphasisSrc;
  snippetEmphasisInverted = snippetEmphasisInvertedSrc;
  snippetEmphasisInvertedColoured = snippetEmphasisInvertedColouredSrc;
  snippetCircular = snippetCircularSrc;
  snippetClearing = snippetClearingSrc;
  snippetFloated = snippetFloatedSrc;
  snippetTextAlignment = snippetTextAlignmentSrc;
  snippetBasic = snippetBasicSrc;


  constructor(title: Title) {
    title.setTitle('Segment | Ngx Semantic');
  }
}
