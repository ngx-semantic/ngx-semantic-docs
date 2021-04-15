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
    <div suiPlaceholderHeader
         suiImage>
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
       class="three column">
    <div suiGridColumn>
      <div sui-segment
           suiRaised>
        <div sui-placeholder>
          <div suiPlaceholderHeader
               suiImage>
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
          <div suiPlaceholderHeader
               suiImage>
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
          <div suiPlaceholderHeader
               suiImage>
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

  snippetCard = `
  <div sui-grid
       suiStackable
       suiDoubling
       suiWidth="three">
    <div sui-card>
      <div suiCardImage>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiSquare></div>
        </div>
      </div>
      <div suiCardContent>
        <div sui-placeholder>
          <div suiCardHeader>
            <div suiPlaceholderLine
                 suiLength="very short"></div>
            <div suiPlaceholderLine
                 suiLength="medium"></div>
          </div>
          <div suiPlaceholderParagraph>
            <div suiPlaceholderLine
                 suiLength="short"></div>
          </div>
        </div>
      </div>
      <div suiCardExtra>
        <div sui-button
             disabled
             suiEmphasis="primary">
          Add
        </div>
        <div sui-button
             disabled>
          Delete
        </div>
      </div>
    </div>
  </div>`;

  snippetLines = `
  <div sui-placeholder>
    <div suiPlaceholderLine></div>
    <div suiPlaceholderLine></div>
    <div suiPlaceholderLine></div>
    <div suiPlaceholderLine></div>
    <div suiPlaceholderLine></div>
  </div>`;

  snippetImageHeader = `
  <div sui-placeholder>
    <div suiPlaceholderHeader
         suiImage>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
  </div>`;

  snippetHeader = `
  <div sui-placeholder>
    <div suiPlaceholderHeader>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
  </div>`;

  snippetParagraph = `
  <div sui-placeholder>
    <div suiPlaceholderParagraph>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
    <div suiPlaceholderParagraph>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
  </div>`;

  snippetImage = `
  <div sui-placeholder>
    <div suiPlaceholderImage></div>
  </div>`;

  snippetSquareImage = `
  <div sui-cards
       suiWidth="three">
    <div sui-card>
      <div suiCardContent>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiSquare></div>
        </div>
      </div>
    </div>
    <div sui-card>
      <div suiCardContent>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiSquare></div>
        </div>
      </div>
    </div>
    <div sui-card>
      <div suiCardContent>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiSquare></div>
        </div>
      </div>
    </div>
  </div>`;

  snippetRectangularImage = `
  <div sui-cards
       suiWidth="three">
    <div sui-card>
      <div suiCardContent>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiRectangular></div>
        </div>
      </div>
    </div>
    <div sui-card>
      <div suiCardContent>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiRectangular></div>
        </div>
      </div>
    </div>
    <div sui-card>
      <div suiCardContent>
        <div sui-placeholder>
          <div suiPlaceholderImage
               suiRectangular></div>
        </div>
      </div>
    </div>
  </div>`;

  snippetLineLength = `
  <div sui-placeholder>
    <div suiPlaceholderLine
         suiLength="full"></div>
    <div suiPlaceholderLine
         suiLength="very long"></div>
    <div suiPlaceholderLine
         suiLength="long"></div>
    <div suiPlaceholderLine
         suiLength="medium"></div>
    <div suiPlaceholderLine
         suiLength="short"></div>
    <div suiPlaceholderLine
         suiLength="very short"></div>
  </div>`;

  snippetComplexLineLength = `
  <div sui-placeholder>
    <div suiPlaceholderHeader
         suiImage>
      <div suiPlaceholderLine
           suiLength="medium"></div>
      <div suiPlaceholderLine
           suiLength="full"></div>
    </div>
    <div suiPlaceholderParagraph>
      <div suiPlaceholderLine
           suiLength="medium"></div>
      <div suiPlaceholderLine
           suiLength="full"></div>
    </div>
  </div>`;

  snippetFluid = `
  <div sui-placeholder
       suiFluid>
    <div suiPlaceholderHeader
         suiImage>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
    <div suiPlaceholderParagraph>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
      <div suiPlaceholderLine></div>
    </div>
  </div>`;

  snippetInverted = `
  <div sui-segment
       suiInverted>
    <div sui-placeholder
         suiInverted>
      <div suiPlaceholderHeader
           suiImage>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
      <div suiPlaceholderParagraph>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
        <div suiPlaceholderLine></div>
      </div>
    </div>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Placeholder | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
