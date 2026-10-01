import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetShapeSrc from './snippets/shape.sample.html' with { loader: 'text' };
import snippetCubeSrc from './snippets/cube.sample.html' with { loader: 'text' };
import snippetTextSrc from './snippets/text.sample.html' with { loader: 'text' };
import snippetNextSideSrc from './snippets/next-side.sample.html' with { loader: 'text' };
import snippetSettingsSrc from './snippets/settings.sample.html' with { loader: 'text' };

@Component({
  selector: 'doc-shape',
  templateUrl: './shape.page.html',
  styles: [`
    :host ::ng-deep .shape-demo .ui.shape .side > .ui.segment {
      width: 15rem;
      margin: 0;
    }
  `],
  standalone: false
})
export class ShapePage {
  snippetShape = snippetShapeSrc;
  snippetCube = snippetCubeSrc;
  snippetText = snippetTextSrc;
  snippetNextSide = snippetNextSideSrc;
  snippetSettings = snippetSettingsSrc;

  constructor(title: Title) {
    title.setTitle('Shape | Ngx Semantic');
  }
}
