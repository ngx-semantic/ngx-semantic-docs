import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements OnInit {
  snippetStdLoader = ' <div sui-loader suiSize="medium" suiText="false"></div>';

  snippetTextLoader = ' <div sui-loader suiSize="medium" suiText>Loading</div>';

  snippetSizedLoaders = `
  <div sui-loader suiSize="mini" suiText>Loading</div>
  <div sui-loader suiSize="tiny" suiText>Loading</div>
  <div sui-loader suiSize="small" suiText>Loading</div>
  <div sui-loader suiSize="medium" suiText>Loading</div>
  <div sui-loader suiSize="large" suiText>Loading</div>
  <div sui-loader suiSize="big" suiText>Loading</div>
  <div sui-loader suiSize="huge" suiText>Loading</div>`;

  constructor() { }

  ngOnInit(): void {
  }
}