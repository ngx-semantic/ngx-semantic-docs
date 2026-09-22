import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import snippetStdSrc from './snippets/std-container.sample.html' with { loader: 'text' };
import snippetTextSrc from './snippets/text-container.sample.html' with { loader: 'text' };
import snippetAlignedSrc from './snippets/text-alignment.sample.html' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    standalone: false
})
export class ContainerComponent {
  snippetStd = snippetStdSrc;
  snippetText = snippetTextSrc;
  snippetAligned = snippetAlignedSrc;
  snippetFluid = snippetFluidSrc;


  constructor(title: Title) {
    title.setTitle('Container | Ngx Semantic');
  }
}
