import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  states = [ { text: 'Alabama', value: 'al' } ];
  countries = [ { text: 'Albania', value: 'al', flag: 'al' }, { text: 'Nigeria', value: 'ng', flag: 'ng' } ];
  months = [ { text: 'January', value: 'jan' } ];
  cards = [ { text: 'Visa', value: 'visa' } ];
  contacts = [ {
    text: 'Justen Kitsune',
    image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg' }
  } ];
  gender = [ { text: 'Male' }, { text: 'Female' } ];

  snippetBasic = `
  <form sui-form>
    <div suiFormField>
      <label>First Name</label>
      <input type="text" name="first-name" placeholder="First Name">
    </div>
    <div suiFormField>
      <label>Last Name</label>
      <input type="text" name="last-name" placeholder="Last Name">
    </div>
    <div suiFormField>
      <sui-checkbox>I agree to the terms and conditions</sui-checkbox>
    </div>
    <button sui-button type="submit">Submit</button>
  </form>`;

  snippetBasicAlt = `
  <form sui-form>
    <h4 sui-header suiDividing>Shipping Information</h4>
    <div suiFormField>
      <label>Name</label>
      <div suiFormFields suiWidth="two">
        <div suiFormField>
          <input type="text" name="shipping[first-name]" placeholder="First Name">
        </div>
        <div suiFormField>
          <input type="text" name="shipping[last-name]" placeholder="Last Name">
        </div>
      </div>
    </div>
    <div suiFormField>
      <label>Billing Address</label>
      <div suiFormFields>
        <div suiFormField suiWidth="twelve">
          <input type="text" name="shipping[address]" placeholder="Street Address">
        </div>
        <div suiFormField suiWidth="four">
          <input type="text" name="shipping[address-2]" placeholder="Apt #">
        </div>
      </div>
    </div>
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>State</label>
        <sui-select suiPlaceholder="State" [suiOptions]="states"></sui-select>
      </div>
      <div suiFormField>
        <label>Country</label>
        <sui-select suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
      </div>
    </div>
    <h4 sui-header suiDividing>Billing Information</h4>
    <div suiFormField>
      <label>Card Type</label>
      <sui-select suiPlaceholder="Type" [suiOptions]="cards"></sui-select>
    </div>
    <div suiFormFields>
      <div suiFormField suiWidth="seven">
        <label>Card Number</label>
        <input type="text" name="card[number]" maxlength="16" placeholder="Card #">
      </div>
      <div suiFormField suiWidth="three">
        <label>CVC</label>
        <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC">
      </div>
      <div suiFormField suiWidth="six">
        <label>Expiration</label>
        <div suiFormFields suiWidth="two">
          <div suiFormField>
            <sui-select suiPlaceholder="Month" [suiOptions]="months"></sui-select>
          </div>
          <div suiFormField>
            <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year">
          </div>
        </div>
      </div>
    </div>
    <h4 sui-header suiDividing>Receipt</h4>
    <div suiFormField>
      <label>Send Receipt To:</label>
      <sui-select suiPlaceholder="Saved Contacts" [suiOptions]="contacts"></sui-select>
    </div>
    <div sui-segment>
      <div suiFormField>
        <sui-checkbox suiType="toggle">Do not include a receipt in the package</sui-checkbox>
      </div>
    </div>
    <div sui-button tabindex="0">Submit Order</div>
  </form>`;

  snippetUserInput = `
  <div sui-form>
    <div suiFormField>
      <label>User Input</label>
      <input type="text">
    </div>
  </div>`;

  snippetFields = `
  <div sui-form>
    <div suiFormFields>
      <div suiFormField>
        <label>First name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div suiFormField>
        <label>Middle name</label>
        <input type="text" placeholder="Middle Name">
      </div>
      <div suiFormField>
        <label>Last name</label>
        <input type="text" placeholder="Last Name">
      </div>
    </div>
  </div>`;

  snippetFieldsWidth = `
  <div sui-form>
    <div suiFormFields suiWidth="three">
      <div suiFormField>
        <label>First name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div suiFormField>
        <label>Middle name</label>
        <input type="text" placeholder="Middle Name">
      </div>
      <div suiFormField>
        <label>Last name</label>
        <input type="text" placeholder="Last Name">
      </div>
    </div>
  </div>`;

  snippetFieldsInline = `
  <div sui-form>
    <div suiFormFields suiInline>
      <div suiFormField suiWidth="eight">
        <label>Name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div suiFormField suiWidth="three">
        <input type="text" placeholder="Middle Name">
      </div>
      <div suiFormField suiWidth="five">
        <input type="text" placeholder="Last Name">
      </div>
    </div>
  </div>`;

  snippetTextArea = `
  <div sui-form>
    <div suiFormField>
      <label>Text</label>
      <textarea></textarea>
    </div>
    <div suiFormField>
      <label>Short Text</label>
      <textarea rows="2"></textarea>
    </div>
  </div>`;

  snippetCheckbox = `
  <div sui-form>
    <div suiFormField suiInline>
      <sui-checkbox>Checkbox</sui-checkbox>
    </div>
    <div suiFormField suiInline>
      <sui-checkbox suiType="slider">Slider</sui-checkbox>
      <label></label>
    </div>
    <div suiFormField suiInline>
      <sui-checkbox suiType="toggle">Toggle</sui-checkbox>
    </div>
  </div>`;

  snippetRadio = `
  <div sui-form>
    <div suiFormFields>
      <label for="fruit">Select your favorite fruit:</label>
      <div suiFormField>
        <sui-checkbox suiType="radio">Apples</sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">Oranges</sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">Pears</sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">Grapefruit</sui-checkbox>
      </div>
    </div>
    <div suiFormFields suiGrouped>
      <label for="fruit">Select your second favorite fruit:</label>
      <div suiFormField>
        <sui-checkbox suiType="radio">Apples</sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">Oranges</sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">Pears</sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">Grapefruit</sui-checkbox>
      </div>
    </div>
  </div>`;

  snippetDropdown = `
  <div sui-form>
    <div suiFormField>
      <label>Gender</label>
      <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
    </div>
  </div>`;

  snippetDropdownAlt = `
  <div sui-form>
    <div suiFormField>
      <label>Country</label>
      <sui-select suiSearch suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
    </div>
  </div>`;

  snippetMultipleSelect = `
  <div sui-form>
    <div suiFormField>
      <label>Country</label>
      <sui-select suiMultiple suiPlaceholder="Country" [suiOptions]="countries"></sui-select>
    </div>
  </div>`;

  snippetHtmlSelect = `
  <div sui-form>
    <div suiFormField>
      <select>
        <option value="">Gender</option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>
    </div>
  </div>`;

  snippetMessage = `
  <div sui-form>
    <div sui-message>
      <div class="header">We had some issues</div>
      <ul class="list">
        <li>Please enter your first name</li>
        <li>Please enter your last name</li>
      </ul>
    </div>
  </div>`;

  snippetLoading = `
  <div sui-form suiLoading>
    <div suiFormField>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com">
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetSuccess = `
  <div sui-form suiState="success">
    <div suiFormField>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com">
    </div>
    <div sui-message suiState="success">
      <div suiMessageHeader>Form Completed</div>
      <p>You're all signed up for the newsletter.</p>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetError = `
  <div sui-form suiState="error">
    <div suiFormField>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com">
    </div>
    <div sui-message suiState="error">
      <div suiMessageHeader>Action Forbidden</div>
      <p>You can only sign up for an account once with a given e-mail address.</p>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetWarning = `
  <div sui-form suiState="warning">
    <div suiFormField>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com">
    </div>
    <div sui-message suiState="warning">
      <div suiMessageHeader>Could you check something!</div>
      <ul suiMessageList>
        <li>That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.</li>
      </ul>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetFieldError = `
  <div sui-form>
    <div suiFormFields suiWidth="two">
      <div suiFormField suiError>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div suiFormField suiError>
      <label>Gender</label>
      <sui-select suiPlaceholder="Gender" [suiOptions]="gender"></sui-select>
    </div>
    <div suiFormField suiError suiInline>
      <sui-checkbox>
        I agree to the Terms and Conditions
      </sui-checkbox>
    </div>
  </div>`;

  snippetDisabled = `
  <div sui-form>
    <div suiFormFields suiWidth="two">
      <div suiFormField disabled>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField disabled>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
  </div>`;

  snippetReadOnly = `
  <div sui-form>
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="Read Only" readonly="" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Read Only" readonly="" type="text">
      </div>
    </div>
  </div>`;

  snippetSizeMini = `
  <div sui-form suiSize="mini">
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetSizeTiny = `
  <div sui-form suiSize="tiny">
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetSizeSmall = `
  <div sui-form suiSize="small">
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetSizeLarge = `
  <div sui-form suiSize="large">
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetSizeBig = `
  <div sui-form suiSize="big">
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetSizeHuge = `
  <div sui-form suiSize="huge">
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetSizeMassive = `
  <div sui-form suiSize="massive">
    <div suiFormFields suiWidth="two">
      <div suiFormField>
        <label>First Name</label>
        <input placeholder="First Name" type="text">
      </div>
      <div suiFormField>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text">
      </div>
    </div>
    <div sui-button>Submit</div>
  </div>`;

  snippetEqualWidth = `
  <div sui-form suiEqualWidth>
    <div suiFormFields>
      <div suiFormField>
        <label>Username</label>
        <input type="text" placeholder="Username">
      </div>
      <div suiFormField>
        <label>Password</label>
        <input type="password">
      </div>
    </div>
    <div suiFormFields>
      <div suiFormField>
        <label>First name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div suiFormField>
        <label>Middle name</label>
        <input type="text" placeholder="Middle Name">
      </div>
      <div suiFormField>
        <label>Last name</label>
        <input type="text" placeholder="Last Name">
      </div>
    </div>
  </div>`;

  snippetInverted = `
  <div sui-segment suiInverted>
    <div sui-form suiInverted>
      <div suiFormFields suiWidth="two">
        <div suiFormField>
          <label>Username</label>
          <input type="text" placeholder="Username">
        </div>
        <div suiFormField>
          <label>Password</label>
          <input type="password">
        </div>
      </div>
      <div suiFormField suiInline>
        <sui-checkbox>I agree to terms and conditions</sui-checkbox>
      </div>
      <div sui-button>Submit</div>
    </div>
  </div>`;

  snippetInline = `
  <div sui-form>
    <div suiFormField suiInline>
      <label>Last name</label>
      <input type="text" placeholder="Full Name">
    </div>
  </div>`;

  snippetWidth = `
  <div sui-form>
    <div suiFormFields>
      <div suiFormField suiWidth="six">
        <label>First name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div suiFormField suiWidth="four">
        <label>Middle</label>
        <input type="text" placeholder="Middle Name">
      </div>
      <div suiFormField suiWidth="six">
        <label>Last name</label>
        <input type="text" placeholder="Last Name">
      </div>
    </div>
    <div suiFormFields>
      <div suiFormField suiWidth="two">
        <input type="text" placeholder="2 Wide">
      </div>
      <div suiFormField suiWidth="twelve">
        <input type="text" placeholder="12 Wide">
      </div>
      <div suiFormField suiWidth="two">
        <input type="text" placeholder="2 Wide">
      </div>
    </div>
    <div suiFormFields>
      <div suiFormField suiWidth="eight">
        <input type="text" placeholder="8 Wide">
      </div>
      <div suiFormField suiWidth="six">
        <input type="text" placeholder="6 Wide">
      </div>
      <div suiFormField suiWidth="two">
        <input type="text" placeholder="2 Wide">
      </div>
    </div>
  </div>`;

  snippetRequired = `
  <div sui-form>
    <div suiFormField suiRequired>
      <label>Last name</label>
      <input type="text" placeholder="Full Name">
    </div>
    <div suiFormField suiInline suiRequired>
      <sui-checkbox>I agree to terms and conditions</sui-checkbox>
    </div>
  </div>`;

  snippetEvenlyDivided = `
  <div sui-form>
    <div suiFormFields suiWidth="three">
      <div suiFormField>
        <label>First name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div suiFormField>
        <label>Middle name</label>
        <input type="text" placeholder="Middle Name">
      </div>
      <div suiFormField>
        <label>Last name</label>
        <input type="text" placeholder="Last Name">
      </div>
    </div>
  </div>`;

  snippetGrouped = `
  <div sui-form>
    <div suiFormFields suiGrouped>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Apples
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Oranges
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Pears
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Grapefruit
        </sui-checkbox>
      </div>
    </div>
  </div>`;

  snippetEqualWidthGroup = `
  <div sui-form>
    <div suiFormFields>
      <div suiFormField>
        <label>Username</label>
        <input type="text" placeholder="Username">
      </div>
      <div suiFormField>
        <label>Password</label>
        <input type="password">
      </div>
    </div>
    <div suiFormFields suiEqualWidth>
      <div suiFormField>
        <label>First name</label>
        <input type="text" placeholder="First Name">
      </div>
      <div suiFormField>
        <label>Middle name</label>
        <input type="text" placeholder="Middle Name">
      </div>
      <div suiFormField>
        <label>Last name</label>
        <input type="text" placeholder="Last Name">
      </div>
    </div>
  </div>`;

  snippetInlineGroup = `
  <div sui-form>
    <div suiFormFields suiInline>
      <label>Phone Number</label>
      <div suiFormField>
        <input type="text" placeholder="(xxx)">
      </div>
      <div suiFormField>
        <input type="text" placeholder="xxx">
      </div>
      <div suiFormField>
        <input type="text" placeholder="xxxx">
      </div>
    </div>
  </div>`;

  snippetInlineGroupAlt = `
  <div sui-form>
    <div suiFormFields suiInline>
      <label>What's your favourite fruit?</label>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Apples
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Oranges
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Pears
        </sui-checkbox>
      </div>
      <div suiFormField>
        <sui-checkbox suiType="radio">
          Grapefruit
        </sui-checkbox>
      </div>
    </div>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Form | Ngx Semantic');
  }
}
