import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  snippetStd = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <div suiBreadcrumbDivider> / </div>
      <a suiBreadcrumbSection>Store</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive='true'>T-Shirt</div>
  </div>
  `;
  snippetStd1 = `
  <div sui-breadcrumb suiIcon='true'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right angle" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Store</a>
      <i suiIconType="right angle" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>T-Shirt</div>
  </div>
  `;
  snippetContent1 = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <div suiBreadcrumbDivider> / </div>
      <a suiBreadcrumbSection>Registration</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;
  snippetContent2 = `
  <div sui-breadcrumb suiIcon='true'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;

  snippetSection = `
  <div sui-breadcrumb>
      <span suiBreadcrumbSection>Home</span>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive='true'>Search</div>
  </div>
  `;

  snippetLink = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive='true'>Search for: <a href="#">paper towels</a></div>
  </div>
  `;

  snippetActive = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Products</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive='true'>Paper Towels</div>
  </div>
  `;

  snippetSize = `
  <div sui-breadcrumb suiIcon='true' suiSize='mini'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;
  snippetSize1 = `
  <div sui-breadcrumb suiIcon='true' suiSize='tiny'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;
  snippetSize2 = `
  <div sui-breadcrumb suiIcon='true' suiSize='small'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;
  snippetSize3 = `
  <div sui-breadcrumb suiIcon='true' suiSize='large'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;
  snippetSize4 = `
  <div sui-breadcrumb suiIcon='true' suiSize='big'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;
  snippetSize5 = `
  <div sui-breadcrumb suiIcon='true' suiSize='huge'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;
  snippetSize6 = `
  <div sui-breadcrumb suiIcon='true' suiSize='massive'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right chevron" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIconType="right arrow" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive='true'>Personal Information</div>
  </div>`;

  constructor() {}

  ngOnInit(): void {}
}
