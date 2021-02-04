import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  snippetColored = `
  <div class="ui segment">
    <h4 sui-header suiColour="red" suiInverted>Red</h4>
    <h4 sui-header suiColour="orange" suiInverted>Orange</h4>
    <h4 sui-header suiColour="yellow" suiInverted>Yellow</h4>
    <h4 sui-header suiColour="olive" suiInverted>Olive</h4>
  </div>
  `;
  snippetInverted = `
  <div class="ui inverted segment">
    <h4 sui-header suiColour="teal" suiInverted>Teal</h4>
    <h4 sui-header suiColour="blue" suiInverted>Blue</h4>
    <h4 sui-header suiColour="purple" suiInverted>Purple</h4>
    <h4 sui-header suiColour="violet" suiInverted>Violet</h4>
  </div>
  `;

  constructor() { }

  ngOnInit(): void {
  }
}
