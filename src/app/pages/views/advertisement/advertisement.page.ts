import { Component } from '@angular/core';

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
}
