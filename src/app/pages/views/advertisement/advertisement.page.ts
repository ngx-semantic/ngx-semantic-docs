import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-advertisement',
  templateUrl: 'advertisement.page.html'
})
export class AdvertisementPage {
  snippetStandard = `
  <div sui-advertisement
       suiSize="medium"
       suiType="rectangle">
    <!-- Ad Code Goes Here
      <ins class="adsbygoogle"
           style="display:inline-block;width:300px;height:250px"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"></ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    !-->
  </div>
  <div sui-advertisement
       suiType="leaderboard">
    <!-- Leaderboard
      <ins class="adsbygoogle"
           style="display:inline-block;width:728px;height:90px"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXXXXXXXX"></ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    !-->
  </div>
  <div sui-advertisement
       suiType="banner">
    <!-- Banner
      <ins class="adsbygoogle"
           style="display:inline-block;width:468px;height:60px"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXXXXXXXX"></ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    !-->
  </div>`;

  snippetCommonUnits = `
  <div sui-advertisement suiTest suiSize="medium" suiType="rectangle" data-text="Medium Rectangle"></div>
  <div sui-advertisement suiTest suiType="banner" data-text="Banner"></div>
  <div sui-advertisement suiTest suiType="leaderboard" data-text="Leaderboard"></div>
  <div sui-advertisement suiTest suiSize="large" suiType="rectangle" data-text="Large Rectangle"></div>
  <div sui-advertisement suiTest suiHalf suiType="page" data-text="Half Page"></div>`;

  snippetMobile = `
  <div sui-advertisement suiTest suiMobile suiType="leaderboard" data-text="Mobile Leaderboard"></div>
  <div sui-advertisement suiTest suiMobile suiType="banner" data-text="Mobile Banner"></div>`;

  snippetButton = `
  <div sui-advertisement suiTest suiType="button" data-text="Button"></div>
  <div sui-advertisement suiTest suiSquare suiType="button" data-text="Square Button"></div>
  <div sui-advertisement suiTest suiSize="small" suiType="button" data-text="Small Button"></div>`;

  snippetSkyscraper = `
  <div sui-advertisement suiTest suiType="skyscraper" data-text="Skyscraper"></div>
  <div sui-advertisement suiTest suiWide suiType="skyscraper" data-text="Wide Skyscraper"></div>`;

  snippetBanner = `
  <div sui-advertisement suiTest suiType="banner" data-text="Banner"></div>
  <div sui-advertisement suiTest suiVertical suiType="banner" data-text="Vertical Banner"></div>
  <div sui-advertisement suiTest suiType="banner" data-text="Top Banner"></div>
  <div sui-advertisement suiTest suiHalf suiType="banner" data-text="Half Banner"></div>`;

  snippetLeaderboard = `
  <div sui-advertisement suiTest suiType="leaderboard" data-text="Leaderboard"></div>
  <div sui-advertisement suiTest suiSize="large" suiType="leaderboard" data-text="Large Leaderboard"></div>
  <div sui-advertisement suiTest suiType="billboard" data-text="Billboard"></div>`;

  snippetPanorama = `
  <div sui-advertisement suiTest suiType="panorama" data-text="Panorama"></div>`;

  snippetNetboard = `
  <div sui-advertisement suiTest suiType="netboard"></div>`;

  constructor(title: Title) {
    title.setTitle('Advertisement | Ngx Semantic');
  }
}
