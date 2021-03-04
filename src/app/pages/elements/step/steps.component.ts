import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  snippetSingleStep = `
  <div sui-steps>
    <div sui-step>
       Shipping
    </div>
  </div>
  `;

  snippetMultiStep = `
  <div sui-steps>
      <div sui-step
           suiIcon="truck"
           [suiContent]="truckContent">
        <ng-template #truckContent>
          <div class="title">Shipping</div>
          <div class="description">Choose your shipping options</div>
        </ng-template>
      </div>
      <div sui-step
           suiIcon="payment"
           suiActive
           [suiContent]="paymentContent">
        <ng-template #paymentContent>
          <div class="title">Billing</div>
          <div class="description">Enter billing information</div>
        </ng-template>
      </div>
      <div sui-step
           suiIcon="info"
           [suiDisabled]
           [suiContent]="orderContent">
        <ng-template #orderContent>
          <div class="title">Confirm Order</div>
        </ng-template>
      </div>
    </div>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
