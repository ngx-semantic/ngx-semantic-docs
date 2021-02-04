import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss'],
})
export class SegmentsComponent implements OnInit {
  snippetSegment = `
  <div sui-segment suiColour="red" [suiInverted]>Red</div>
  <div sui-segment suiColour="orange" [suiInverted]>Orange</div>
  <div sui-segment suiColour="yellow" [suiInverted]>Yellow</div>
  <div sui-segment suiColour="olive" [suiInverted]>Olive</div>
  <div sui-segment suiColour="green" [suiInverted]>Green</div>`;

  constructor() {}

  ngOnInit(): void {}
}
