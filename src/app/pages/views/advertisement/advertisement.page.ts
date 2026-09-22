import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetCommonUnitsSrc from './snippets/common-units.sample.html' with { loader: 'text' };
import snippetMobileSrc from './snippets/mobile.sample.html' with { loader: 'text' };
import snippetButtonSrc from './snippets/button.sample.html' with { loader: 'text' };
import snippetSkyscraperSrc from './snippets/skyscraper.sample.html' with { loader: 'text' };
import snippetBannerSrc from './snippets/banner.sample.html' with { loader: 'text' };
import snippetLeaderboardSrc from './snippets/leaderboard.sample.html' with { loader: 'text' };
import snippetPanoramaSrc from './snippets/panorama.sample.html' with { loader: 'text' };
import snippetNetboardSrc from './snippets/netboard.sample.html' with { loader: 'text' };
import snippetCenteredSrc from './snippets/centered.sample.html' with { loader: 'text' };
import snippetTestSrc from './snippets/test.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-advertisement',
    templateUrl: 'advertisement.page.html',
    standalone: false
})
export class AdvertisementPage {
  snippetStandard = snippetStandardSrc;
  snippetCommonUnits = snippetCommonUnitsSrc;
  snippetMobile = snippetMobileSrc;
  snippetButton = snippetButtonSrc;
  snippetSkyscraper = snippetSkyscraperSrc;
  snippetBanner = snippetBannerSrc;
  snippetLeaderboard = snippetLeaderboardSrc;
  snippetPanorama = snippetPanoramaSrc;
  snippetNetboard = snippetNetboardSrc;
  snippetCentered = snippetCenteredSrc;
  snippetTest = snippetTestSrc;












  constructor(title: Title) {
    title.setTitle('Advertisement | Ngx Semantic');
  }
}
