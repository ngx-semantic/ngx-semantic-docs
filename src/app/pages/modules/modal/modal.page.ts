import { Component } from '@angular/core';

@Component({
  selector: 'doc-modal',
  templateUrl: './modal.page.html',
  styles: []
})
export class ModalPage {
  isStandardModalVisible = false;
  isScrollingModalVisible = false;
  dummyList = Array(10).fill(0).map((x, i) => i);

  snippetStandard = `
    <sui-modal [visible]="isStandardModalVisible" [suiClosable]="true"
               suiHeaderText="Select a Photo"
               (visibleChange)="isStandardModalVisible = $event">
        <div sui-image suiModalContent>
            <div sui-image suiSize="medium">
                <img src="https://semantic-ui.com/images/avatar/large/chris.jpg">
            </div>
            <div suiCardDescription>
                <div sui-header>We've auto-chosen a profile image for you.</div>
                <p>We've grabbed the following image from the <a href="https://www.gravatar.com"
                                                                 target="_blank">gravatar</a> image
                    associated with your registered e-mail address.</p>
                <p>Is it okay to use this photo?</p>
            </div>
        </div>
        <div suiModalActions>
            <div class="black deny" sui-button suiEmphasis="secondary">
                Nope
            </div>
            <div sui-button suiEmphasis="positive" suiIcon suiLabeled="right labeled">
                Yep, that's me
                <i sui-icon suiIconType="checkmark"></i>
            </div>
        </div>
    </sui-modal>`;

  snippetScrolling = `
    <sui-modal visible
               suiClosable
               suiHeaderText="Feed">
        <div sui-image suiModalContent suiScrollable>
            <div sui-grid
                 suiStackable
                 suiWidth="one">
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
            </div>
        </div>
        <div suiModalActions>
            <div class="black deny" sui-button suiEmphasis="secondary">
                Close
            </div>
        </div>
    </sui-modal>`;
}
