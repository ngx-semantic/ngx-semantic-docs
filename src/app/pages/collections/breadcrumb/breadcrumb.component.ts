import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HighlightService} from '../../../shared/services/highlight.service';
import {BasePageComponent} from '../../../shared/components/base-page.component';

@Component({
  selector: 'doc-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent extends BasePageComponent {
  snippetStd = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <div suiBreadcrumbDivider> / </div>
      <a suiBreadcrumbSection>Store</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive>T-Shirt</div>
  </div>`;

  snippetStd1 = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <i suiIconType="right angle" sui-icon suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Store</a>
      <i suiIconType="right angle" sui-icon suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>T-Shirt</div>
  </div>`;

  snippetContent1 = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <div suiBreadcrumbDivider> / </div>
      <a suiBreadcrumbSection>Registration</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetContent2 = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetSection = `
  <div sui-breadcrumb>
      <span suiBreadcrumbSection>Home</span>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive>Search</div>
  </div>`;

  snippetLink = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Home</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive>Search for: <a href="#">paper towels</a></div>
  </div>`;

  snippetActive = `
  <div sui-breadcrumb>
      <a suiBreadcrumbSection>Products</a>
      <div suiBreadcrumbDivider> / </div>
      <div suiBreadcrumbSection suiActive>Paper Towels</div>
  </div>`;

  snippetSize = `
  <div sui-breadcrumb suiSize='mini'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetSize1 = `
  <div sui-breadcrumb suiSize='tiny'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetSize2 = `
  <div sui-breadcrumb suiSize='small'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetSize3 = `
  <div sui-breadcrumb suiSize='large'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetSize4 = `
  <div sui-breadcrumb suiSize='big'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetSize5 = `
  <div sui-breadcrumb suiSize='huge'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  snippetSize6 = `
  <div sui-breadcrumb suiSize='massive'>
      <a suiBreadcrumbSection>Home</a>
      <i suiIcon='right chevron' suiBreadcrumbDivider></i>
      <a suiBreadcrumbSection>Registration</a>
      <i suiIcon='right arrow' suiBreadcrumbDivider></i>
      <div suiBreadcrumbSection suiActive>Personal Information</div>
  </div>`;

  constructor(title: Title, highlighter: HighlightService) {
    super(highlighter);
    title.setTitle('Breadcrumb | Ngx Semantic');
  }
}
