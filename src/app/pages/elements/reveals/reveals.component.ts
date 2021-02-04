import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-reveals',
  templateUrl: './reveals.component.html',
  styleUrls: ['./reveals.component.scss']
})
export class RevealsComponent implements OnInit {
  snippetMoveReveal = `
  <div sui-reveal suiSize="small" suiMove="right" suiImage>
    <img sui-reveal-content suiVisible="visible" src="https://semantic-ui.com/images/avatar/large/ade.jpg">
    <img sui-reveal-content suiVisible="hidden" src="https://semantic-ui.com/images/wireframe/square-image.png">
  </div>

  <div sui-reveal suiSize="medium" suiRotate="right" suiImage>
    <img sui-reveal-content suiVisible="visible" src="https://semantic-ui.com/images/avatar/large/ade.jpg">
    <img sui-reveal-content suiVisible="hidden" src="https://semantic-ui.com/images/wireframe/square-image.png">
  </div>
  `;

  constructor() { }

  ngOnInit(): void {
  }
}
