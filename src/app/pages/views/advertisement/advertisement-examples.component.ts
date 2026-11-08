import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'doc-advertisement-standard-example',
  templateUrl: './snippets/standard.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementStandardExampleComponent {
}

@Component({
  selector: 'doc-advertisement-common-units-example',
  templateUrl: './snippets/common-units.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementCommonUnitsExampleComponent {
}

@Component({
  selector: 'doc-advertisement-mobile-example',
  templateUrl: './snippets/mobile.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementMobileExampleComponent {
}

@Component({
  selector: 'doc-advertisement-button-example',
  templateUrl: './snippets/button.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementButtonExampleComponent {
}

@Component({
  selector: 'doc-advertisement-skyscraper-example',
  templateUrl: './snippets/skyscraper.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementSkyscraperExampleComponent {
}

@Component({
  selector: 'doc-advertisement-banner-example',
  templateUrl: './snippets/banner.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementBannerExampleComponent {
}

@Component({
  selector: 'doc-advertisement-leaderboard-example',
  templateUrl: './snippets/leaderboard.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementLeaderboardExampleComponent {
}

@Component({
  selector: 'doc-advertisement-panorama-example',
  templateUrl: './snippets/panorama.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementPanoramaExampleComponent {
}

@Component({
  selector: 'doc-advertisement-netboard-example',
  templateUrl: './snippets/netboard.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementNetboardExampleComponent {
}

@Component({
  selector: 'doc-advertisement-centered-example',
  templateUrl: './snippets/centered.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementCenteredExampleComponent {
}

@Component({
  selector: 'doc-advertisement-test-example',
  templateUrl: './snippets/test.sample.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class AdvertisementTestExampleComponent {
}
export const ADVERTISEMENT_EXAMPLES = [
  AdvertisementStandardExampleComponent,
  AdvertisementCommonUnitsExampleComponent,
  AdvertisementMobileExampleComponent,
  AdvertisementButtonExampleComponent,
  AdvertisementSkyscraperExampleComponent,
  AdvertisementBannerExampleComponent,
  AdvertisementLeaderboardExampleComponent,
  AdvertisementPanoramaExampleComponent,
  AdvertisementNetboardExampleComponent,
  AdvertisementCenteredExampleComponent,
  AdvertisementTestExampleComponent,
];
