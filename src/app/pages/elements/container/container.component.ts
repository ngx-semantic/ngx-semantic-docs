import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  snippetStd = `
  <div sui-container>
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
  </div>
  `;
  textContainer = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
