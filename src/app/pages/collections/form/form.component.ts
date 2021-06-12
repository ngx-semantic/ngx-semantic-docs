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
  countries = [{text: 'Albania', value: 'al', flag: 'al'}];
  months = [{text: 'January', value: 'jan'}];
  cards = [{text: 'Visa', value: 'visa'}];
  contacts = [{text: 'Justen Kitsune', image: { avatar: true, src: 'https://semantic-ui.com/images/avatar/small/stevie.jpg'}}];

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

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Form | Ngx Semantic');
  }
}
