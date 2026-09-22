import { Component } from '@angular/core';

export class EmbedSampleState {
  isDefinitionsActive = true;
  isApiActive: boolean;
}

@Component({
  selector: 'doc-embed-youtube-example',
  templateUrl: './snippets/youtube.sample.html',
  standalone: false
})
export class EmbedYoutubeExampleComponent extends EmbedSampleState {
}

@Component({
  selector: 'doc-embed-vimeo-example',
  templateUrl: './snippets/vimeo.sample.html',
  standalone: false
})
export class EmbedVimeoExampleComponent extends EmbedSampleState {
}

@Component({
  selector: 'doc-embed-custom-content-example',
  templateUrl: './snippets/custom-content.sample.html',
  standalone: false
})
export class EmbedCustomContentExampleComponent extends EmbedSampleState {
}

@Component({
  selector: 'doc-embed-aspect-ratio-example',
  templateUrl: './snippets/aspect-ratio.sample.html',
  standalone: false
})
export class EmbedAspectRatioExampleComponent extends EmbedSampleState {
}
export const EMBED_EXAMPLES = [
  EmbedYoutubeExampleComponent,
  EmbedVimeoExampleComponent,
  EmbedCustomContentExampleComponent,
  EmbedAspectRatioExampleComponent,
];
