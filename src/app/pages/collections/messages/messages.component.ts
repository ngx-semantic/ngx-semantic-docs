import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  snippetBasic = `
    <div sui-message suiColour="blue" suiSize="large">
      <div sui-message-header>
        Welcome back!
      </div>
      <p>A basic message.</p>
    </div>
  `;
  snippetDismissable = `
  <div sui-message [suiDismissable]="true">
    <div sui-message-header>
      Welcome back!
    </div>
    <p>This is a special notification which you can dismiss if you're bored with it.</p>
  </div>
  `;

  snippetIcon1 = `
  <div sui-message suiIcon='true'>
    <i suiIconType="inbox" sui-icon></i>
    <div sui-message-content>
      <div sui-header>
        Have you heard about our mailing list?
      </div>
      <p>Get the best news in your e-mail every day.</p>
    </div>
  </div>
  `;

  snippetHidden = `
  <div sui-message suiHidden='true'>
    <p>You can't see me</p>
  </div>
  `;

  snippetVisible = `
  <div sui-message suiVisible='true'>
    <p>You can always see me</p>
  </div>
  `;

  snippetFloating = `
  <div sui-message suiFloating='true'>
    <p>Way to go!</p>
  </div>
  `;

  snippetCompact = `
  <div sui-message suiCompact='true'>
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
        <div suiFormField suiInline='true'>
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
  <div sui-message suiColour='warning' [suiDismissable]="true">
    <div sui-message-header>
      You must register before you can do that!
    </div>
    <p>Visit our registration page, then try again</p>
  </div>
  `;

  snippetInfo = `
  <div sui-message suiColour='info' [suiDismissable]="true">
    <div sui-message-header>
      Was this what you wanted?
    </div>
    <p>It's good to see you again</p>
  </div>
  `;

  snippetSuccess = `
  <div sui-message suiColour='positive' [suiDismissable]="true">
    <div sui-message-header>
    You are eligible for a reward
    </div>
    <p>Go to your special offers page to see now</p>
  </div>
  `;

  snippetError = `
  <div sui-message suiColour='negative' [suiDismissable]="true">
    <div sui-message-header>
    We're sorry we can't apply that discount
    </div>
    <p>That offer has expired</p>
  </div>
  `;

  snippetColored = `
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

  constructor() {}

  ngOnInit(): void {}

}
