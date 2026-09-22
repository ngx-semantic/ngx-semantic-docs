import { Component, OnInit } from '@angular/core';
import snippetListSrc from './snippets/div-standard.sample.html' with { loader: 'text' };
import snippetList1Src from './snippets/div-standard1.sample.html' with { loader: 'text' };
import snippetList2Src from './snippets/div-standard2.sample.html' with { loader: 'text' };
import snippetList3Src from './snippets/div-standard3.sample.html' with { loader: 'text' };
import snippetBulletedSrc from './snippets/bulleted-list.sample.html' with { loader: 'text' };
import snippetBulleted1Src from './snippets/bulleted-list1.sample.html' with { loader: 'text' };
import snippetBulleted2Src from './snippets/bulleted-list2.sample.html' with { loader: 'text' };
import snippetOrderedSrc from './snippets/ordered-list.sample.html' with { loader: 'text' };
import snippetOrdered1Src from './snippets/ordered-list1.sample.html' with { loader: 'text' };
import snippetOrdered2Src from './snippets/ordered-list2.sample.html' with { loader: 'text' };
import snippetLinkSrc from './snippets/link-list.sample.html' with { loader: 'text' };
import snippetItemSrc from './snippets/item-list.sample.html' with { loader: 'text' };
import snippetIconSrc from './snippets/icon-list.sample.html' with { loader: 'text' };
import snippetImageSrc from './snippets/image-list.sample.html' with { loader: 'text' };
import snippetLink1Src from './snippets/link-list1.sample.html' with { loader: 'text' };
import snippetLink2Src from './snippets/link-list2.sample.html' with { loader: 'text' };
import snippetHeaderSrc from './snippets/header-list.sample.html' with { loader: 'text' };
import snippetDescriptionSrc from './snippets/description-list.sample.html' with { loader: 'text' };
import snippetHorizontalSrc from './snippets/horizontal-list.sample.html' with { loader: 'text' };
import snippetHorizontal1Src from './snippets/horizontal-list1.sample.html' with { loader: 'text' };
import snippetHorizontal2Src from './snippets/horizontal-list2.sample.html' with { loader: 'text' };
import snippetInvertedSrc from './snippets/inverted-list.sample.html' with { loader: 'text' };
import snippetSelectionSrc from './snippets/selection-list.sample.html' with { loader: 'text' };
import snippetAnimatedSrc from './snippets/animated-list.sample.html' with { loader: 'text' };
import snippetRelaxedSrc from './snippets/relaxed-list.sample.html' with { loader: 'text' };
import snippetRelaxed1Src from './snippets/relaxed-list1.sample.html' with { loader: 'text' };
import snippetRelaxed2Src from './snippets/relaxed-list2.sample.html' with { loader: 'text' };
import snippetRelaxed3Src from './snippets/relaxed-list3.sample.html' with { loader: 'text' };
import snippetDividedSrc from './snippets/divided-list.sample.html' with { loader: 'text' };
import snippetCelledSrc from './snippets/celled-list.sample.html' with { loader: 'text' };
import snippetCelled1Src from './snippets/celled-list1.sample.html' with { loader: 'text' };
import snippetCelled2Src from './snippets/celled-list2.sample.html' with { loader: 'text' };
import snippetSizeMiniSrc from './snippets/sized-list.sample.html' with { loader: 'text' };
import snippetSizeTinySrc from './snippets/sized-list-tiny.sample.html' with { loader: 'text' };
import snippetSizeSmallSrc from './snippets/sized-list-small.sample.html' with { loader: 'text' };
import snippetSizeLargeSrc from './snippets/sized-list-large.sample.html' with { loader: 'text' };
import snippetSizeBigSrc from './snippets/sized-list-big.sample.html' with { loader: 'text' };
import snippetSizeHugeSrc from './snippets/sized-list-huge.sample.html' with { loader: 'text' };
import snippetSizeMassiveSrc from './snippets/sized-list-massive.sample.html' with { loader: 'text' };
import snippetVerticalSrc from './snippets/vertical-list.sample.html' with { loader: 'text' };
import snippetFloatedSrc from './snippets/floated-list.sample.html' with { loader: 'text' };
import snippetFloated1Src from './snippets/floated-list1.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-lists',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent implements OnInit {
  snippetList = snippetListSrc;
  snippetList1 = snippetList1Src;
  snippetList2 = snippetList2Src;
  snippetList3 = snippetList3Src;
  snippetBulleted = snippetBulletedSrc;
  snippetBulleted1 = snippetBulleted1Src;
  snippetBulleted2 = snippetBulleted2Src;
  snippetOrdered = snippetOrderedSrc;
  snippetOrdered1 = snippetOrdered1Src;
  snippetOrdered2 = snippetOrdered2Src;
  snippetLink = snippetLinkSrc;
  snippetItem = snippetItemSrc;
  snippetIcon = snippetIconSrc;
  snippetImage = snippetImageSrc;
  snippetLink1 = snippetLink1Src;
  snippetLink2 = snippetLink2Src;
  snippetHeader = snippetHeaderSrc;
  snippetDescription = snippetDescriptionSrc;
  snippetHorizontal = snippetHorizontalSrc;
  snippetHorizontal1 = snippetHorizontal1Src;
  snippetHorizontal2 = snippetHorizontal2Src;
  snippetInverted = snippetInvertedSrc;
  snippetSelection = snippetSelectionSrc;
  snippetAnimated = snippetAnimatedSrc;
  snippetRelaxed = snippetRelaxedSrc;
  snippetRelaxed1 = snippetRelaxed1Src;
  snippetRelaxed2 = snippetRelaxed2Src;
  snippetRelaxed3 = snippetRelaxed3Src;
  snippetDivided = snippetDividedSrc;
  snippetCelled = snippetCelledSrc;
  snippetCelled1 = snippetCelled1Src;
  snippetCelled2 = snippetCelled2Src;
  snippetSizeMini = snippetSizeMiniSrc;
  snippetSizeTiny = snippetSizeTinySrc;
  snippetSizeSmall = snippetSizeSmallSrc;
  snippetSizeLarge = snippetSizeLargeSrc;
  snippetSizeBig = snippetSizeBigSrc;
  snippetSizeHuge = snippetSizeHugeSrc;
  snippetSizeMassive = snippetSizeMassiveSrc;
  snippetVertical = snippetVerticalSrc;
  snippetFloated = snippetFloatedSrc;
  snippetFloated1 = snippetFloated1Src;

  constructor() { }

  ngOnInit(): void {
  }
}
