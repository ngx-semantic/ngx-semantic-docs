import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetBasic = `
    <div sui-message suiColour="blue" suiSize="large">
      <div sui-message-header>
        Welcome back!
      </div>
      <p>A basic message.</p>
    </div>
  `;
  snippetDismissable = `
  <div sui-message suiDismissible>
    <div sui-message-header>
      Welcome back!
    </div>
    <p>This is a special notification which you can dismiss if you're bored with it.</p>
  </div>
  `;

  snippetList = `
  <div sui-message>
    <div suiMessageHeader>
      New Site Features
    </div>
    <ul suiMessageList>
      <li>You can now have cover images on blog pages</li>
      <li>Drafts will now auto-save while writing</li>
    </ul>
  </div>
  `;

  snippetIcon1 = `
  <div sui-message suiIcon>
    <i suiIconType="inbox" sui-icon></i>
    <div sui-message-content>
      <div sui-header>
        Have you heard about our mailing list?
      </div>
      <p>Get the best news in your e-mail every day.</p>
    </div>
  </div>
  `;

  snippetIcon2 = `
  <div sui-message suiIcon>
    <i suiIconType="notched circle" suiLoading sui-icon></i>
    <div suiMessageContent>
      <div sui-header>
        Just one second
      </div>
      <p>We're fetching that content for you.</p>
    </div>
  </div>
  `;

  snippetHidden = `
  <div sui-message suiHidden>
    <p>You can't see me</p>
  </div>
  `;

  snippetVisible = `
  <div sui-message suiVisible>
    <p>You can always see me</p>
  </div>
  `;

  snippetFloating = `
  <div sui-message suiFloating>
    <p>Way to go!</p>
  </div>
  `;

  snippetCompact = `
  <div sui-message suiCompact>
    <p>Get all the best inventions in your e-mail every day. Sign up now!</p>
  </div>
  `;

  snippetAttached = `
      <div sui-message suiAttached='attached'>
        <div sui-header>
          Welcome to our site!
        </div>
        <p>Fill out the form below to sign-up for a new account</p>
      </div>
      <form sui-form sui-segment suiAttached='attached'>
        <div suiFormFields suiWidth='two'>
          <div suiFormField>
            <label>First Name</label>
            <input placeholder="First Name" type="text">
          </div>
          <div suiFormField>
            <label>Last Name</label>
            <input placeholder="Last Name" type="text">
          </div>
        </div>
        <div suiFormField>
          <label>Username</label>
          <input placeholder="Username" type="text">
        </div>
        <div suiFormField>
          <label>Password</label>
          <input type="password">
        </div>
        <div suiFormField suiInline>
          <div class="ui checkbox">
            <input type="checkbox" id="terms">
            <label for="terms">I agree to the terms and conditions</label>
          </div>
        </div>
        <div sui-button suiColour='blue'>Submit</div>
      </form>
      <div sui-message suiAttached='bottom attached' suiColour='warning'>
        <i suiIconType="help" sui-icon></i>
        Already signed up? <a href="#">Login here</a> instead.
      </div>
  `;

  snippettWarning = `
  <div sui-message suiColour='warning' [suiDismissible]>
    <div sui-message-header>
      You must register before you can do that!
    </div>
    <p>Visit our registration page, then try again</p>
  </div>
  `;

  snippetInfo = `
  <div sui-message suiColour='info' [suiDismissible]>
    <div sui-message-header>
      Was this what you wanted?
    </div>
    <p>It's good to see you again</p>
  </div>
  `;

  snippetSuccess = `
  <div sui-message suiColour='positive' [suiDismissible]>
    <div sui-message-header>
    You are eligible for a reward
    </div>
    <p>Go to your special offers page to see now</p>
  </div>
  `;

  snippetError = `
  <div sui-message suiColour='negative' [suiDismissible]>
    <div sui-message-header>
    We're sorry we can't apply that discount
    </div>
    <p>That offer has expired</p>
  </div>
  `;

  snippetColoured = `
  <div sui-message suiColour='red'>Red</div>
  <div sui-message suiColour='orange'>Orange</div>
  <div sui-message suiColour='yellow'>Yellow</div>
  <div sui-message suiColour='olive'>Olive</div>
  <div sui-message suiColour='green'>Green</div>
  <div sui-message suiColour='teal'>Teal</div>
  <div sui-message suiColour='blue'>Blue</div>
  <div sui-message suiColour='violet'>Violet</div>
  <div sui-message suiColour='purple'>Purple</div>
  <div sui-message suiColour='pink'>Pink</div>
  <div sui-message suiColour='brown'>Brown</div>
  <div sui-message suiColour='black'>Black</div>
  `;

  snippetSizes = `
  <div sui-message suiSize='mini'>This is a mini message</div>
  <div sui-message suiSize='tiny'>This is a tiny message</div>
  <div sui-message suiSize='small'>This is a small message</div>
  <div sui-message suiSize='large'>This is a large message</div>
  <div sui-message suiSize='big'>This is a big message</div>
  <div sui-message suiSize='huge'>This is a huge message</div>
  <div sui-message suiSize='massive'>This is a massive message</div>
  `;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Message | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
