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
  snippetText = `
  <div sui-container suiText="true">
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
  </div>`;
  snippetAligned = `
  <div sui-container suiText="true">
    <div sui-placeholder>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
      <p suiPlaceholderLine></p>
    </div>
  </div>`;
  snippetFluid = `
  <div sui-container suiFluid="true">
    Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack huwith complex body language. These sophisticated forms of social cognition and communication may account for their trainabiplayfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relatiowith humans that has enabled them to become one of the most successful species on the planet today.
  </div>`;

  constructor() { }

  ngOnInit(): void {
  }

}
