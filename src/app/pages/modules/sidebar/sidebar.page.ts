import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetSidebarSrc from './snippets/sidebar.sample.html' with { loader: 'text' };
import snippetSidebarTsSrc from './snippets/sidebar.sample.txt' with { loader: 'text' };
import snippetVisibleSrc from './snippets/visible.sample.html' with { loader: 'text' };
import snippetDimmedSrc from './snippets/dimmed.sample.html' with { loader: 'text' };
import snippetDimmedTsSrc from './snippets/dimmed.sample.txt' with { loader: 'text' };
import snippetDirectionSrc from './snippets/direction.sample.html' with { loader: 'text' };
import snippetDirectionTsSrc from './snippets/direction.sample.txt' with { loader: 'text' };
import snippetWidthSrc from './snippets/width.sample.html' with { loader: 'text' };
import snippetWidthTsSrc from './snippets/width.sample.txt' with { loader: 'text' };
import snippetTransitionsSrc from './snippets/transitions.sample.html' with { loader: 'text' };
import snippetTransitionsTsSrc from './snippets/transitions.sample.txt' with { loader: 'text' };
import snippetPageSrc from './snippets/page.sample.html' with { loader: 'text' };
import snippetPageTsSrc from './snippets/page.sample.txt' with { loader: 'text' };

@Component({
  selector: 'doc-sidebar',
  templateUrl: './sidebar.page.html',
  styles: [`
    :host ::ng-deep .sidebar-demo sui-sidebar-container.ui.segment {
      height: 22rem;
      margin-top: 0;
    }
  `],
  standalone: false
})
export class SidebarPage {
  snippetSidebar = snippetSidebarSrc;
  snippetSidebarTs = snippetSidebarTsSrc;
  snippetVisible = snippetVisibleSrc;
  snippetDimmed = snippetDimmedSrc;
  snippetDimmedTs = snippetDimmedTsSrc;
  snippetDirection = snippetDirectionSrc;
  snippetDirectionTs = snippetDirectionTsSrc;
  snippetWidth = snippetWidthSrc;
  snippetWidthTs = snippetWidthTsSrc;
  snippetTransitions = snippetTransitionsSrc;
  snippetTransitionsTs = snippetTransitionsTsSrc;
  snippetPage = snippetPageSrc;
  snippetPageTs = snippetPageTsSrc;

  constructor(title: Title) {
    title.setTitle('Sidebar | Ngx Semantic');
  }
}
