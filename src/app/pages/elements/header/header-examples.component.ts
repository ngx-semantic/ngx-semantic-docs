import { Component } from '@angular/core';

export class HeaderSampleState {
  isDefinitionsActive = true;
  isApiActive: boolean;
}

@Component({
  selector: 'doc-header-page-headers-example',
  templateUrl: './snippets/page-headers.sample.html',
  standalone: false
})
export class HeaderPageHeadersExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-content-headers-example',
  templateUrl: './snippets/content-headers.sample.html',
  standalone: false
})
export class HeaderContentHeadersExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-icon-headers-example',
  templateUrl: './snippets/icon-headers.sample.html',
  standalone: false
})
export class HeaderIconHeadersExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-icon-center-headers-example',
  templateUrl: './snippets/icon-center-headers.sample.html',
  standalone: false
})
export class HeaderIconCenterHeadersExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-sub-headers-example',
  templateUrl: './snippets/sub-headers.sample.html',
  standalone: false
})
export class HeaderSubHeadersExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-sub-image-headers-example',
  templateUrl: './snippets/sub-image-headers.sample.html',
  standalone: false
})
export class HeaderSubImageHeadersExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-image-header-example',
  templateUrl: './snippets/image-header.sample.html',
  standalone: false
})
export class HeaderImageHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-image-circular-header-example',
  templateUrl: './snippets/image-circular-header.sample.html',
  standalone: false
})
export class HeaderImageCircularHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-image-sub-header-example',
  templateUrl: './snippets/image-sub-header.sample.html',
  standalone: false
})
export class HeaderImageSubHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-icon-header-example',
  templateUrl: './snippets/icon-header.sample.html',
  standalone: false
})
export class HeaderIconHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-icon-sub-header-example',
  templateUrl: './snippets/icon-sub-header.sample.html',
  standalone: false
})
export class HeaderIconSubHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-sub-header-details-example',
  templateUrl: './snippets/sub-header-details.sample.html',
  standalone: false
})
export class HeaderSubHeaderDetailsExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-sub-header-sizes-details-example',
  templateUrl: './snippets/sub-header-sizes-details.sample.html',
  standalone: false
})
export class HeaderSubHeaderSizesDetailsExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-disabled-header-example',
  templateUrl: './snippets/disabled-header.sample.html',
  standalone: false
})
export class HeaderDisabledHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-dividing-header-example',
  templateUrl: './snippets/dividing-header.sample.html',
  standalone: false
})
export class HeaderDividingHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-block-header-example',
  templateUrl: './snippets/block-header.sample.html',
  standalone: false
})
export class HeaderBlockHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-attached-header-example',
  templateUrl: './snippets/attached-header.sample.html',
  standalone: false
})
export class HeaderAttachedHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-floating-header-example',
  templateUrl: './snippets/floating-header.sample.html',
  standalone: false
})
export class HeaderFloatingHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-text-alignment-header-example',
  templateUrl: './snippets/text-alignment-header.sample.html',
  standalone: false
})
export class HeaderTextAlignmentHeaderExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-header-coloured-example',
  templateUrl: './snippets/header-coloured.sample.html',
  standalone: false
})
export class HeaderHeaderColouredExampleComponent extends HeaderSampleState {
}

@Component({
  selector: 'doc-header-header-coloured-inverted-example',
  templateUrl: './snippets/header-coloured-inverted.sample.html',
  standalone: false
})
export class HeaderHeaderColouredInvertedExampleComponent extends HeaderSampleState {
}
export const HEADER_EXAMPLES = [
  HeaderPageHeadersExampleComponent,
  HeaderContentHeadersExampleComponent,
  HeaderIconHeadersExampleComponent,
  HeaderIconCenterHeadersExampleComponent,
  HeaderSubHeadersExampleComponent,
  HeaderSubImageHeadersExampleComponent,
  HeaderImageHeaderExampleComponent,
  HeaderImageCircularHeaderExampleComponent,
  HeaderImageSubHeaderExampleComponent,
  HeaderIconHeaderExampleComponent,
  HeaderIconSubHeaderExampleComponent,
  HeaderSubHeaderDetailsExampleComponent,
  HeaderSubHeaderSizesDetailsExampleComponent,
  HeaderDisabledHeaderExampleComponent,
  HeaderDividingHeaderExampleComponent,
  HeaderBlockHeaderExampleComponent,
  HeaderAttachedHeaderExampleComponent,
  HeaderFloatingHeaderExampleComponent,
  HeaderTextAlignmentHeaderExampleComponent,
  HeaderHeaderColouredExampleComponent,
  HeaderHeaderColouredInvertedExampleComponent,
];
