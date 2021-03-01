import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-placeholders',
  templateUrl: './placeholders.component.html',
  styleUrls: ['./placeholders.component.scss']
})
export class PlaceholdersComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetBasic = `
  <div sui-placeholder>
    <div suiHeader
         suiPlaceholderImage>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
    <div suiPlaceholderParagraph>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
  </div>`;

  snippetGrid = `
  <div sui-grid
       suiStackable
       suiWidth="three">
    <div suiGridColumn>
      <div sui-segment
           suiRaised>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiHeader>
            <div suiPlaceholderLine></div>
            <div suiPlaceholderLine></div>
          </div>
          <div suiPlaceholderParagraph>
            <div suiPlaceholderLine
                 suiLength="medium"></div>
            <div suiPlaceholderLine
                 suiLength="short"></div>
          </div>
        </div>
      </div>
    </div>
    <div suiGridColumn>
      <div sui-segment
           suiRaised>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiHeader>
            <div suiPlaceholderLine></div>
            <div suiPlaceholderLine></div>
          </div>
          <div suiPlaceholderParagraph>
            <div suiPlaceholderLine
                 suiLength="medium"></div>
            <div suiPlaceholderLine
                 suiLength="short"></div>
          </div>
        </div>
      </div>
    </div>
    <div suiGridColumn>
      <div sui-segment
           suiRaised>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiHeader>
            <div suiPlaceholderLine></div>
            <div suiPlaceholderLine></div>
          </div>
          <div suiPlaceholderParagraph>
            <div suiPlaceholderLine
                 suiLength="medium"></div>
            <div suiPlaceholderLine
                 suiLength="short"></div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  snippetFlag = `
  <div sui-placeholder>
    <div sui-placeholder-image suiHeader>
      <div sui-placeholder-line></div>
      <div sui-placeholder-line></div>
    </div>
    <div sui-placeholder-paragraph>
      <div sui-placeholder-line suiLength="medium"></div>
      <div sui-placeholder-line suiLength="short"></div>
    </div>
  </div>
  `;

  snippetHeaderPlaceholder = `
  <div class="ui active placeholder">
    <div sui-placeholder-image suiHeader>
      <div sui-placeholder-line></div>
      <div sui-placeholder-line></div>
    </div>
    <div sui-placeholder-paragraph>
      <div sui-placeholder-line></div>
      <div sui-placeholder-line></div>
      <div sui-placeholder-line></div>
    </div>
  </div>
  `;

  snippetInvertedPlaceholder = `
  <div class="ui active inverted placeholder">
    <div sui-placeholder-image suiHeader>
      <div sui-placeholder-line></div>
      <div sui-placeholder-line></div>
    </div>
    <div sui-placeholder-paragraph>
      <div sui-placeholder-line></div>
      <div sui-placeholder-line></div>
      <div sui-placeholder-line></div>
    </div>
  </div>
  `;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Placeholders | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }

  tabChanged(payload: string): void {
    if (payload === 'api') {
      this.isApiActive = true;
      this.isDefinitionsActive = false;
    }

    if (payload === 'definitions') {
      this.isApiActive = false;
      this.isDefinitionsActive = true;
    }
  }
}
