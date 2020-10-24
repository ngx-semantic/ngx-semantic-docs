import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {
  snippetFlag = `
  <i suiCountry="uae" sui-flag></i>
  <i suiCountry="burkina faso" sui-flag></i>
  <i suiCountry="czech republic" sui-flag></i>
  <i suiCountry="nigeria" sui-flag></i>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
