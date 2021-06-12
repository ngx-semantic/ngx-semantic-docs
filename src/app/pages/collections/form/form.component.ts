import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-form',
  templateUrl: './form.component.html'
})
export class FormComponent extends BasePageComponent {
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

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Form | Ngx Semantic');
  }
}
