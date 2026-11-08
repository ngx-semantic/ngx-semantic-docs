import { Component, ChangeDetectionStrategy } from '@angular/core';

export class IconSampleState {
  isDefinitionsActive = true;
  isApiActive: boolean;
}

@Component({
  selector: 'doc-icon-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconDisabledExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-loading-example',
  templateUrl: './snippets/loading.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconLoadingExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-fitted-example',
  templateUrl: './snippets/fitted.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconFittedExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-size-example',
  templateUrl: './snippets/size.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconSizeExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-link-example',
  templateUrl: './snippets/link.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconLinkExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-flipped-example',
  templateUrl: './snippets/flipped.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconFlippedExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-rotated-example',
  templateUrl: './snippets/rotated.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconRotatedExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-circular-example',
  templateUrl: './snippets/circular.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconCircularExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-bordered-example',
  templateUrl: './snippets/bordered.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconBorderedExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-coloured-example',
  templateUrl: './snippets/coloured.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconColouredExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-inverted-coloured-example',
  templateUrl: './snippets/inverted-coloured.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconInvertedColouredExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-first-icon-group-example',
  templateUrl: './snippets/first-icon-group.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconFirstIconGroupExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-second-icon-group-example',
  templateUrl: './snippets/second-icon-group.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconSecondIconGroupExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-corner-icon-example',
  templateUrl: './snippets/corner-icon.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconCornerIconExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-corner-icon-options-example',
  templateUrl: './snippets/corner-icon-options.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconCornerIconOptionsExampleComponent extends IconSampleState {
}

@Component({
  selector: 'doc-icon-inline-corner-icon-example',
  templateUrl: './snippets/inline-corner-icon.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class IconInlineCornerIconExampleComponent extends IconSampleState {
}
export const ICON_EXAMPLES = [
  IconDisabledExampleComponent,
  IconLoadingExampleComponent,
  IconFittedExampleComponent,
  IconSizeExampleComponent,
  IconLinkExampleComponent,
  IconFlippedExampleComponent,
  IconRotatedExampleComponent,
  IconCircularExampleComponent,
  IconBorderedExampleComponent,
  IconColouredExampleComponent,
  IconInvertedColouredExampleComponent,
  IconFirstIconGroupExampleComponent,
  IconSecondIconGroupExampleComponent,
  IconCornerIconExampleComponent,
  IconCornerIconOptionsExampleComponent,
  IconInlineCornerIconExampleComponent,
];
