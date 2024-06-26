import {Component, AfterViewChecked} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'doc-steps',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
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

  snippetIcon = `
  <div sui-steps>
    <div sui-step>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
        <div suiStepDescription>Choose your shipping options</div>
      </div>
    </div>
  </div>`;

  snippetLink = `
  <div sui-steps>
    <a sui-step
       suiActive>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
        <div suiStepDescription>Choose your shipping options</div>
      </div>
    </a>
    <a sui-step>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </a>
  </div>`;

  snippetLinkAlt = `
  <div sui-steps>
    <div sui-step
         suiLink>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
        <div suiStepDescription>Choose your shipping options</div>
      </div>
    </div>
    <div sui-step
         suiLink>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
  </div>`;

  snippetActive = `
  <div sui-steps>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
  </div>`;

  snippetCompleted = `
  <div sui-steps>
    <div sui-step
         suiCompleted>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
  </div>`;

  snippetCompletedAlt = `
  <div sui-steps
       suiOrdered>
    <div sui-step
         suiCompleted>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
  </div>`;

  snippetDisabled = `
  <div sui-steps>
    <div sui-step
         disabled>
      Billing
    </div>
  </div>`;

  snippetStackable = `
  <div sui-steps
       suiTabletStackable>
    <div sui-step>
      <i sui-icon
         suiIconType="plane"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="dollar"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         disabled>
      <i sui-icon
         suiIconType="info circle"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetFluid = `
  <div sui-grid
       suiWidth="two">
    <div suiGridColumn>
      <div sui-steps
           suiFluid
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
             suiActive>
          <i sui-icon
             suiIconType="dollar"></i>
          <div suiStepContent>
            <div suiStepTitle>Billing</div>
            <div suiStepDescription>Enter billing information</div>
          </div>
        </div>
      </div>
    </div>
    <div suiGridColumn>
      <p>The steps take up the entire column width</p>
    </div>
  </div>`;

  snippetUnstackable = `
  <div sui-steps
       suiUnstackable>
    <div sui-step>
      <i sui-icon
         suiIconType="plane"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="dollar"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         disabled>
      <i sui-icon
         suiIconType="info circle"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetAttached = `
  <div sui-steps
       suiWidth="three"
       suiAttached="top attached">
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
         suiIconType="info circle"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>
  <div sui-segment
       suiAttached="attached">
    <doc-wireframe type="paragraph"></doc-wireframe>
  </div>
  <div sui-steps
       suiWidth="three"
       suiAttached="bottom attached">
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
         suiIconType="info circle"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetEvenlyDivided = `
  <div sui-steps
       suiWidth="three">
    <div sui-step>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
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

  snippetEvenlyDividedAlt = `
  <div sui-steps
       suiWidth="two">
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
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

  snippetSizeMini = `
  <div sui-steps
       suiSize="mini">
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
         suiIconType="dollar"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         disabled>
      <i sui-icon
         suiIconType="info circle"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetSizeTiny = `
  <div sui-steps
       suiSize="tiny">
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
         suiIconType="dollar"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         disabled>
      <i sui-icon
         suiIconType="info circle"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetSizeSmall = `
  <div sui-steps
       suiSize="small">
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
         suiIconType="dollar"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
        <div suiStepDescription>Enter billing information</div>
      </div>
    </div>
    <div sui-step
         disabled>
      <i sui-icon
         suiIconType="info circle"></i>
      <div suiStepContent>
        <div suiStepTitle>Confirm Order</div>
        <div suiStepDescription>Verify order details</div>
      </div>
    </div>
  </div>`;

  snippetSizeLarge = `
  <div sui-steps
       suiSize="large">
    <div sui-step>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
      </div>
    </div>
  </div>`;

  snippetSizeBig = `
  <div sui-steps
       suiSize="big">
    <div sui-step>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
      </div>
    </div>
  </div>`;

  snippetSizeHuge = `
  <div sui-steps
       suiSize="huge">
    <div sui-step>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
      </div>
    </div>
  </div>`;

  snippetSizeMassive = `
  <div sui-steps
       suiSize="massive">
    <div sui-step>
      <i sui-icon
         suiIconType="truck"></i>
      <div suiStepContent>
        <div suiStepTitle>Shipping</div>
      </div>
    </div>
    <div sui-step
         suiActive>
      <i sui-icon
         suiIconType="payment"></i>
      <div suiStepContent>
        <div suiStepTitle>Billing</div>
      </div>
    </div>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Step | Ngx Semantic');
  }
}
