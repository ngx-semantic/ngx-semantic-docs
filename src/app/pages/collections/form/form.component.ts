import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-form',
  templateUrl: './form.component.html'
})
export class FormComponent extends BasePageComponent {
  states = [{text: 'Alabama', value: 'al'}];
  countries = [{text: 'Albania', value: 'al', flag: 'al'},{text: 'Nigeria', value: 'ng', flag: 'ng'}];
  months = [{text: 'January', value: 'jan'}];
  cards = [{text: 'Visa', value: 'visa'}];
  contacts = [{text: 'Justen Kitsune', image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg'}}];
  gender = [{text: 'Male'}, {text: 'Female'}];

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

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Form | Ngx Semantic');
  }
}
