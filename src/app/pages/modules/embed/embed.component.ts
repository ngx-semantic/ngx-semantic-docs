import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetYoutubeSrc from './snippets/youtube.sample.html' with { loader: 'text' };
import snippetVimeoSrc from './snippets/vimeo.sample.html' with { loader: 'text' };
import snippetCustomContentSrc from './snippets/custom-content.sample.html' with { loader: 'text' };
import snippetAspectRatioSrc from './snippets/aspect-ratio.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-embed',
    templateUrl: './embed.component.html',
    styles: [],
    standalone: false
})
export class EmbedComponent {
  snippetYoutube = snippetYoutubeSrc;
  snippetVimeo = snippetVimeoSrc;
  snippetCustomContent = snippetCustomContentSrc;
  snippetAspectRatio = snippetAspectRatioSrc;

  isDefinitionsActive = true;
  isApiActive: boolean;





  constructor(title: Title) {
    title.setTitle('Embed | Ngx Semantic');
  }
}
