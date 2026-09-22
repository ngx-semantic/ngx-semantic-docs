import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetBasicSrc from './snippets/basic.sample.html' with { loader: 'text' };
import snippetBasicAlternateSrc from './snippets/basic-alternate.sample.html' with { loader: 'text' };
import snippetGroupSrc from './snippets/group.sample.html' with { loader: 'text' };
import snippetValueSrc from './snippets/value.sample.html' with { loader: 'text' };
import snippetLabelSrc from './snippets/label.sample.html' with { loader: 'text' };
import snippetHorizontalSrc from './snippets/horizontal-stat.sample.html' with { loader: 'text' };
import snippetHorizontalGroupSrc from './snippets/horizontal-stat-group.sample.html' with { loader: 'text' };
import snippetColouredSrc from './snippets/coloured.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted.sample.html' with { loader: 'text' };
import snippetEvenlyDividedSrc from './snippets/evenly-divided.sample.html' with { loader: 'text' };
import snippetFloatedSrc from './snippets/floated.sample.html' with { loader: 'text' };
import snippetSizesSrc from './snippets/size.sample.html' with { loader: 'text' };
import snippetHorizontalSizesSrc from './snippets/size-horizontal.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-statistics',
    templateUrl: './statistics.component.html',
    standalone: false
})
export class StatisticsComponent {
  snippetBasic = snippetBasicSrc;
  snippetBasicAlternate = snippetBasicAlternateSrc;
  snippetGroup = snippetGroupSrc;
  snippetValue = snippetValueSrc;
  snippetLabel = snippetLabelSrc;
  snippetHorizontal = snippetHorizontalSrc;
  snippetHorizontalGroup = snippetHorizontalGroupSrc;
  snippetColoured = snippetColouredSrc;
  snippetInverted = snippetInvertedSrc;
  snippetEvenlyDivided = snippetEvenlyDividedSrc;
  snippetFloated = snippetFloatedSrc;
  snippetSizes = snippetSizesSrc;
  snippetHorizontalSizes = snippetHorizontalSizesSrc;














  constructor(title: Title) {
    title.setTitle('Statistic | Ngx Semantic');
  }
}
