import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-steps',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  snippetFade = `
  <div sui-steps>
    <div sui-step>
       Shipping
    </div>
  </div>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
