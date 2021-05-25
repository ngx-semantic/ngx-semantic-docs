import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-tab',
  templateUrl: './tab.component.html',
  styles: [`
    select {
        margin-bottom: 1rem;
    }
  `]
})
export class TabComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  colours = ['red', 'orange', 'green', 'blue', 'violet'];

  tabColour = 'blue';
  isTabDisabled = false;

  snippetBasic = `
    <sui-tabs>
      <sui-tab
          suiTitle="HTML">
        <h3>HTML</h3>
        <p>
          HTML (HyperText Markup Language) is the most basic building block of
          the Web. It describes and defines the content of a webpage along with
          the basic layout of the webpage. Other technologies besides HTML are
          generally used to describe a web page's appearance/presentation (CSS)
          or functionality/ behavior (JavaScript).
        </p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">developer.mozilla.org</a>
      </sui-tab>
      <sui-tab
          suiTitle="CSS">
        <h3>CSS</h3>
        <p>
          Cascading Style Sheets (CSS) is a stylesheet language used to describe
          the presentation of a document written in HTML or XML (including XML
          dialects such as SVG or XHTML). CSS describes how elements should be
          rendered on screen, on paper, in speech, or on other media.
        </p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">developer.mozilla.org</a>
      </sui-tab>
      <sui-tab
          suiTitle="JavaScript">
        <h3>JavaScript</h3>
        <p>
          JavaScript (JS) is a lightweight interpreted or JIT-compiled
          programming language with first-class functions. While it is most
          well-known as the scripting language for Web pages, many non-browser
          environments also use it, such as Node.js, Apache CouchDB and Adobe
          Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic
          language, supporting object-oriented, imperative, and declarative
          (e.g. functional programming) styles.
        </p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">developer.mozilla.org</a>
      </sui-tab>
    </sui-tabs>`;

  snippetPointing = `
    <sui-tabs
        suiTabType="pointing">
      <sui-tab
          suiTitle="Circle">
        Circle
      </sui-tab>
      <sui-tab
          suiTitle="Box">
        Box
      </sui-tab>
      <sui-tab
          suiTitle="Triangle">
        Triangle
      </sui-tab>
    </sui-tabs>`;

  snippetText = `
    <sui-tabs
        suiTabType="text">
      <sui-tab
          suiTitle="Circle">
        Circle
      </sui-tab>
      <sui-tab
          suiTitle="Box">
        Box
      </sui-tab>
      <sui-tab
          suiTitle="Triangle">
        Triangle
      </sui-tab>
    </sui-tabs>`;

  snippetLoading = `
    <sui-tabs>
      <sui-tab
          suiLoading
          suiTitle="Circle">
        Circle
      </sui-tab>
      <sui-tab
          suiTitle="Box">
        Box
      </sui-tab>
      <sui-tab
          suiTitle="Triangle">
        Triangle
      </sui-tab>
    </sui-tabs>`;

  snippetDisabled = `
    <sui-tabs>
      <sui-tab
          suiTitle="Circle">
        Circle
      </sui-tab>
      <sui-tab
          suiTitle="Box">
        Box
      </sui-tab>
      <sui-tab
          disabled
          suiTitle="Secret Triangle">
        Triangle
      </sui-tab>
    </sui-tabs>`;

  snippetPositioned = `
    <sui-tabs
        suiTabType="secondary"
        suiTabMenuPosition="bottom">
      <sui-tab
          suiTitle="Circle">
        Circle
      </sui-tab>
      <sui-tab
          suiTitle="Box">
        Box
      </sui-tab>
      <sui-tab
          suiTitle="Triangle">
        Triangle
      </sui-tab>
    </sui-tabs>`;

  snippetColoured = `
    <sui-tabs
        suiColour="red">
      <sui-tab
          suiTitle="Circle">
        Circle
      </sui-tab>
      <sui-tab
          suiTitle="Box">
        Box
      </sui-tab>
      <sui-tab
          suiTitle="Triangle">
        Triangle
      </sui-tab>
    </sui-tabs>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Tab | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
