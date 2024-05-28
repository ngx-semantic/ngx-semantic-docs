import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-modal',
  templateUrl: './modal.page.html',
  styles: []
})
export class ModalPage {
  isStandardModalVisible = false;
  isBasicModalVisible = false;
  isFullScreenModalVisible = false;
  isSizeModalVisible = false;
  isScrollingModalVisible = false;
  isClosableModalVisible = false;
  isMaskClosableModalVisible = false;

  dummyList = Array(10).fill(0).map((x, i) => i);

  snippetStandard = `
  <sui-modal
      suiHeaderText="Select a Photo"
      [(visible)]="isStandardModalVisible">
    <div sui-image suiModalContent>
      <div sui-image suiSize="medium">
        <img src="https://semantic-ui.com/images/avatar2/large/rachel.png">
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
      <div sui-button suiEmphasis="secondary" suiColour="black">
        Nope
      </div>
      <div sui-button suiEmphasis="positive" suiIcon suiLabeled="right labeled">
        Yep, that's me
        <i sui-icon suiIconType="checkmark"></i>
      </div>
    </div>
  </sui-modal>`;

  snippetStandardTs = `
  isStandardModalVisible = true;`;

  snippetBasic = `
  <sui-modal
      suiBasic
      suiHeaderIcon="archive"
      suiHeaderText="Archive Old Messages"
      [(visible)]="isBasicModalVisible">
    <div sui-image suiModalContent>
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </div>
    <div suiModalActions>
      <div sui-button suiBasic suiInverted suiColour="red">
        <i sui-icon suiIconType="remove"></i>
        No
      </div>
      <div sui-button suiInverted suiColour="green">
        <i sui-icon suiIconType="checkmark"></i>
        Yes
      </div>
    </div>
  </sui-modal>`;

  snippetBasicTs = `
  isBasicModalVisible = true;`;

  snippetFullScreen = `
  <sui-modal
      suiFullScreen
      suiHeaderText="Update Your Settings"
      [(visible)]="isFullScreenModalVisible">
    <div suiModalContent>
      <div sui-form>
        <h4 sui-header suiDividing>Give us your feedback</h4>
        <div suiFormField>
          <label>Feedback</label>
          <textarea></textarea>
        </div>
        <div suiFormField>
          <sui-checkbox [checked]="true">It's okay to contact me.</sui-checkbox>
        </div>
      </div>
    </div>
    <div suiModalActions>
      <div sui-button>
        Cancel
      </div>
      <div sui-button suiEmphasis="positive">
        Send
      </div>
    </div>
  </sui-modal>`;

  snippetFullScreenTs = `
  isFullScreenModalVisible = true;`;

  snippetScrolling = `
  <sui-modal
      suiHeaderText="Profile Picture"
      [(visible)]="isScrollingModalVisible">
    <div suiModalContent suiScrollable suiImage>
      <div sui-image suiSize="medium">
        <img src="/assets/images/wireframes/image.png" />
      </div>
      <div suiModalDescription>
        <div sui-header>Modal Header</div>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        <img sui-image src="/assets/images/wireframes/paragraph.png" />
          <div sui-divider></div>
          <img sui-image src="/assets/images/wireframes/paragraph.png" />
          <div sui-divider></div>
          <img sui-image src="/assets/images/wireframes/paragraph.png" />
          <div sui-divider></div>
          <img sui-image src="/assets/images/wireframes/paragraph.png" />
      </div>
    </div>
    <div suiModalActions>
      <div class="black deny" sui-button suiEmphasis="secondary"
           (click)="isScrollingModalVisible = false">
        Close
      </div>
    </div>
  </sui-modal>`;

  snippetScrollingTs = `
  isScrollingModalVisible = true;`;

  snippetSize = `
  <sui-modal
      suiSize="mini"
      suiHeaderText="Delete Your Account"
      [(visible)]="isSizeModalVisible">
    <div suiModalContent>
      <p>Are you sure you want to delete your account</p>
    </div>
    <div suiModalActions>
      <div sui-button suiColour="red">
        No
      </div>
      <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
        Yes
        <i sui-icon suiIconType="checkmark"></i>
      </div>
    </div>
  </sui-modal>`;

  snippetSizeTs = `
  isSizeModalVisible = true;`;

  snippetClosable = `
  <sui-modal
      suiClosable="false"
      suiHeaderText="Delete Your Account"
      [(visible)]="isClosableModalVisible">
    <div suiModalContent>
      <p>Are you sure you want to delete your account</p>
    </div>
    <div suiModalActions>
      <div sui-button suiColour="red">
        No
      </div>
      <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
        Yes
        <i sui-icon suiIconType="checkmark"></i>
      </div>
    </div>
  </sui-modal>`;

  snippetClosableTs = `
  isClosableModalVisible = true;`;

  snippetMaskClosable = `
  <sui-modal
      suiMaskClosable="false"
      suiHeaderText="Delete Your Account"
      [(visible)]="isMaskClosableModalVisible">
    <div suiModalContent>
      <p>Are you sure you want to delete your account</p>
    </div>
    <div suiModalActions>
      <div sui-button suiColour="red">
        No
      </div>
      <div sui-button suiIcon suiLabeled="right labeled" suiEmphasis="positive">
        Yes
        <i sui-icon suiIconType="checkmark"></i>
      </div>
    </div>
  </sui-modal>`;

  snippetMaskClosableTs = `
  isMaskClosableModalVisible = true;`;

  constructor(title: Title) {
    title.setTitle('Modal | Ngx Semantic');
  }
}
