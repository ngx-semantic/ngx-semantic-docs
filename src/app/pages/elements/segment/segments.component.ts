import {Component} from '@angular/core';
import {BasePageComponent} from '../../../shared/components/base-page.component';
import {HighlightService} from '../../../shared/services/highlight.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'doc-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
})
export class SegmentsComponent extends BasePageComponent {
  snippetBasic = `
  <div sui-segment>
    <p></p>
  </div>`;

  snippetPlaceholder = `
  <div sui-segment
       suiPlaceholder>
    <div sui-header
         suiIcon>
      <i sui-icon
         suiOutline
         suiIconType="pdf file"></i>
      No documents are listed for this customer.
    </div>
    <div sui-button
         suiEmphasis="primary">
      Add Document
    </div>
  </div>`;

  snippetPlaceholderAlt = `
  <div sui-segment
       suiPlaceholder>
    <div sui-header
         suiIcon>
      <i sui-icon
         suiOutline
         suiIconType="pdf file"></i>
      No documents are listed for this customer.
    </div>
    <div suiSegmentInline>
      <div sui-button
           suiEmphasis="primary">
        Clear Query
      </div>
      <div sui-button>
        Add Document
      </div>
    </div>
  </div>`;

  snippetPlaceholderAltToo = `
  <div sui-segment
       suiPlaceholder>
    <div sui-grid
         suiStackable
         suiWidth="two"
         suiAlignment="center aligned">
      <div sui-divider suiDirection="vertical">Or</div>
      <div suiGridRow
           suiAlignment="center aligned">
        <div suiGridColumn>
          <div sui-header
               suiIcon>
            <i sui-icon
               suiIconType="search"></i>
            Find Country
          </div>
          <div suiFormField>
            <sui-search
                suiShowIcon
                suiPlaceholder="Search countries..."></sui-search>
          </div>
        </div>
        <div suiGridColumn>
          <div sui-header
               suiIcon>
            <i sui-icon
               suiIconType="world"></i>
            Add New Country
          </div>
          <div sui-button>
            Create
          </div>
        </div>
      </div>
    </div>
  </div>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Segment | Ngx Semantic');
  }
}
