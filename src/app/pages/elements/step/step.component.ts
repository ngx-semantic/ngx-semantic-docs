import {Component, AfterViewChecked} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';

@Component({
  selector: 'doc-steps',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements AfterViewChecked {
  snippetSingle = `
  <div sui-steps>
    <div sui-step>
      Shipping
    </div>
  </div>`;

  snippetSet = `
  <div sui-steps>
    <div sui-step>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
        <div suiStepDescription>Choose your shipping options</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         disabled>
      <i sui-icon
         suiIconType="info"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
      </div>
    </div>
  </div>`;

  snippetOrdered = `
  <div sui-steps
       suiOrdered>
    <div sui-step
         suiCompleted>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
        <div suiStepDescription>Choose your shipping options</div>
      </div>
    </div>
    <div sui-step
         suiCompleted>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetVertical = `
  <div sui-steps
       suiVertical>
    <div sui-step
         suiCompleted>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
        <div suiStepDescription>Choose your shipping options</div>
      </div>
    </div>
    <div sui-step
         suiCompleted>
      <i sui-icon
         suiIconType="credit card"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="info"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetDescription = `
  <div sui-steps>
    <div sui-step>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
        <div suiStepDescription>Choose your shipping options</div>
      </div>
    </div>
  </div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Step | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
