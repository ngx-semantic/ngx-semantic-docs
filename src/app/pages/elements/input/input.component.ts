import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'doc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  selectedOption = 'articles';
  options = [
    {value: 'all', text: 'All'},
    {value: 'articles', text: 'Articles'},
    {value: 'products', text: 'Products'}
  ];

  snippetStandard = `
  <div sui-input>
    <input type="text" placeholder="Search..." />
  </div>`;

  snippetFocus = `
  <div sui-input
       suiFocus>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetLoading = `
  <div sui-input
       suiLoading
       suiIcon="left icon">
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiIconType="search"></i>
  </div>`;

  snippetLoadingRight = `
  <div sui-input
       suiLoading
       suiIcon="icon">
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiIconType="search"></i>
  </div>`;

  snippetDisabled = `
  <div sui-input
       disabled>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetDisabledIcon = `
  <div sui-input
       disabled
       suiIcon>
    <i sui-icon
       suiIconType="search"></i>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetDisabledInput = `
  <div sui-input>
    <input disabled type="text" placeholder="Search..."/>
  </div>`;

  snippetError = `
  <div sui-input
       suiError>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetIcon = `
  <div sui-input
       suiIcon>
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiIconType="search"></i>
  </div>`;

  snippetIconPosition = `
  <div sui-input
       suiIcon="left icon">
    <input type="text" placeholder="Search users..."/>
    <i sui-icon
       suiIconType="users"></i>
  </div>`;

  snippetIconCircular = `
  <div sui-input
       suiIcon>
    <input type="text" placeholder="Search users..."/>
    <i sui-icon
       suiIconType="circular search link"></i>
  </div>`;

  snippetIconCircularInverted = `
  <div sui-input
       suiIcon>
    <input type="text" placeholder="Search..."/>
    <i sui-icon
       suiInverted
       suiIconType="circular search link"></i>
  </div>`;

  snippetLabeled = `
  <div sui-input
       suiLabeled="labeled">
    <div sui-label>
      https://
    </div>
    <input type="text" placeholder="mysite.com"/>
  </div>`;

  snippetRightLabeled = `
  <div sui-input
       suiLabeled="right labeled">
    <input type="text" placeholder="Find domain"/>
    <div sui-label
         sui-dropdown>
      <div class="text">.com</div>
      <i sui-icon
         suiIconType="dropdown"></i>
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>.com</div>
        <div suiDropdownMenuItem>.net</div>
        <div suiDropdownMenuItem>.org</div>
      </div>
    </div>
  </div>`;

  snippetBasicLabeled = `
  <div sui-input
       suiLabeled="right labeled">
    <input type="text" placeholder="Enter weight.."/>
    <div sui-label
         suiBasic>
      kg
    </div>
  </div>`;

  snippetCombinedLabeled = `
  <div sui-input
       suiLabeled="right labeled">
    <label sui-label
           for="amount">
      $
    </label>
    <input id="amount" type="text" placeholder="Amount"/>
    <div sui-label
         suiBasic>
      .00
    </div>
  </div>`;

  snippetAngledLabeled = `
  <div sui-input
       suiIcon="left icon"
       suiLabeled="right labeled">
    <i sui-icon
       suiIconType="tags"></i>
    <input type="text" placeholder="Enter tags"/>
    <div sui-label
         suiTag>
      Add Tag
    </div>
  </div>`;

  snippetLeftCornerLabeled = `
  <div sui-input
       suiLabeled="left corner labeled">
    <input type="text" placeholder="Search..."/>
    <div sui-label
         suiCorner="left">
      <i sui-icon
         suiIconType="asterisk"></i>
    </div>
  </div>`;

  snippetCornerLabeled = `
  <div sui-input
       suiLabeled="corner labeled">
    <input type="text" placeholder="Search..."/>
    <div sui-label
         suiCorner="left">
      <i sui-icon
         suiIconType="asterisk"></i>
    </div>
  </div>`;

  snippetAction = `
  <div sui-input
       suiAction="action">
    <input type="text" placeholder="Search..."/>
    <button sui-button>Search</button>
  </div>`;

  snippetLeftAction = `
  <div sui-input
       suiAction="left action">
    <button sui-button
            suiIcon
            suiColour="teal"
            suiLabeled="labeled">
      <i sui-icon
         suiIconType="cart"></i>
      Checkout
    </button>
    <input type="text" value="$52.03"/>
  </div>`;

  snippetRightAction = `
  <div sui-input
       suiIcon="left icon"
       suiAction="right action">
    <i sui-icon
       suiIconType="search"></i>
    <input type="text" placeholder="Search..."/>
    <div sui-button
         suiBasic
         sui-dropdown
         suiFloating>
      <div class="text">This Page</div>
      <i sui-icon
         suiIconType="dropdown"></i>
      <div suiDropdownMenu>
        <div suiDropdownMenuItem>This Organization</div>
        <div suiDropdownMenuItem>Entire Site</div>
      </div>
    </div>
  </div>`;

  snippetCombinedAction = `
  <div sui-input
       suiAction="action">
    <input type="text" placeholder="Search..."/>
    <sui-select
        suiCompact
        suiPlaceholder="All"
        [suiOptions]="options"
        [(ngModel)]="selectedOption">
    </sui-select>
    <div sui-button>
      Search
    </div>
  </div>`;

  snippetRightLabeledAction = `
  <div sui-input
       suiAction="action">
    <input type="text" value="https://www.short.url/c0opq"/>
    <button sui-button
            suiIcon
            suiColour="teal"
            suiLabeled="right labeled">
      <i sui-icon
         suiIconType="copy"></i>
      Copy
    </button>
  </div>`;

  snippetIconAction = `
  <div sui-input
       suiAction="action">
    <input type="text" placeholder="Search..."/>
    <button sui-button
            suiIcon>
      <i sui-icon
         suiIconType="search"></i>
    </button>
  </div>`;

  snippetTransparent = `
  <div sui-input
       suiTransparent>
    <input type="text" placeholder="Search..."/>
  </div>`;

  snippetIconTransparent = `
  <div sui-input
       suiIcon="icon"
       suiTransparent>
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  snippetLeftIconTransparent = `
  <div sui-input
       suiIcon="icon"
       suiTransparent>
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  snippetInverted = `
  <div sui-segment
       suiInverted>
    <div sui-input
         suiInverted>
      <input type="text" placeholder="Search..."/>
    </div>
  </div>
  <div sui-divider
       suiInverted></div>
  <div sui-segment
       suiInverted>
    <div sui-input
         suiInverted
         suiIcon="left icon">
      <input type="text" placeholder="Search..."/>
      <i sui-icon suiIconType="search"></i>
    </div>
  </div>
  <div sui-divider
       suiInverted></div>
  <div sui-segment
       suiInverted>
    <div sui-input
         suiIcon
         suiInverted
         suiTransparent>
      <input type="text" placeholder="Search..."/>
      <i sui-icon suiIconType="search"></i>
    </div>
  </div>`;

  snippetFluid = `
  <div sui-input
       suiFluid
       suiIcon>
    <input type="text" placeholder="Search a very wide input..."/>
    <i sui-icon suiIconType="search"></i>
  </div>
  <div sui-input
       suiFluid
       suiAction="action">
    <input type="text" placeholder="Search..."/>
    <button sui-button>Search</button>
  </div>`;

  snippetMiniSize = `
  <div sui-input
       suiIcon="icon"
       suiSize="mini">
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  snippetSmallSize = `
  <div sui-input
       suiIcon="icon"
       suiSize="small">
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  snippetLargeSize = `
  <div sui-input
       suiIcon="icon"
       suiSize="large">
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  snippetBigSize = `
  <div sui-input
       suiIcon="icon"
       suiSize="big">
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  snippetHugeSize = `
  <div sui-input
       suiIcon="icon"
       suiSize="huge">
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  snippetMassiveSize = `
  <div sui-input
       suiIcon="icon"
       suiSize="massive">
    <input type="text" placeholder="Search..."/>
    <i sui-icon suiIconType="search"></i>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Input | Ngx Semantic');
  }
}
