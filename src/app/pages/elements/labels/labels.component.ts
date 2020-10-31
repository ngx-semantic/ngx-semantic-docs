import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss'],
})
export class LabelsComponent implements OnInit {
  snippetStd = `
  <div sui-label>
    <i sui-icon suiIconType="mail icon"></i> 23
  </div>
  `;

  snippetImg = `
  <a sui-label suiImage='true' >
    <img src="/images/avatar/small/joe.jpg">
    Joe
  </a>
  <a sui-label suiImage='true' >
    <img src="/images/avatar/small/elliot.jpg">
    Elliot
  </a>
  <a sui-label suiImage='true' >
    <img src="/images/avatar/small/stevie.jpg">
    Stevie
  </a>
  `;

  snippetImg2 = `
  <a sui-label suiImage='true' suiColour='blue'>
    <img src="/images/avatar/small/veronika.jpg">
    Veronika
    <div class="detail">Friend</div>
  </a>
  <a sui-label suiImage='true' suiColour='teal'>
    <img src="/images/avatar/small/jenny.jpg">
    Veronika
    <div class="detail">Student</div>
  </a>
  <a sui-label suiColour="yellow" suiImage='true'>
    <img src="/images/avatar/small/christian.jpg">
    Helen
    <div class="detail">Co-worker</div>
  </a>
  `;

  snippetImg3 = `
  <div sui-label suiImage='true'>
    <img src="/images/avatar/small/ade.jpg">
    Adrienne
    <i sui-icon suiIconType="delete icon"></i>
  </div>
  <div sui-label suiImage='true'>
    <img src="/images/avatar/small/zoe.jpg">
    Zoe
    <i sui-icon suiIconType="delete icon"></i>
  </div>
  <div sui-label suiImage='true'>
    <img src="/images/avatar/small/nan.jpg">
    Nan
    <i sui-icon suiIconType="delete icon"></i>
  </div>
  `;

  snippetPointing = `
      <form sui-form class="fluid" _lpchecked="1">
        <div suiFormField>
          <input type="text" placeholder="First name" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;); cursor: pointer;">
          <div sui-label suiPointing='true'>
            Please enter a value
          </div>
        </div>
        <div sui-divider></div>
        <div suiFormField placeholder="Last Name">
          <div sui-label suiPointing='below'>
            Please enter a value
          </div>
          <input type="text">
        </div>
        <div sui-divider></div>
        <div suiFormField suiInline='true'>
          <input type="text" placeholder="Username">
          <div sui-label suiPointing='left'>
            That name is taken!
          </div>
        </div>
        <div sui-divider></div>
        <div suiFormField suiInline='true'>
          <div sui-label suiPointing='right'>
            Your password must be 6 characters or more
          </div>
          <input type="password" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;);">
        </div>
      </form>
  `;


  snippetPointing2 = `
  <form sui-form class="fluid" _lpchecked="1">
    <div suiFormField>
      <input type="text" placeholder="First name" style="background-image: url(&quot;data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;); cursor: pointer;">
      <div sui-label suiPointing='true' suiColour='red' suiBasic='true'>
        Please enter a value
      </div>
    </div>
    <div sui-divider></div>
    <div suiFormField placeholder="Last Name">
      <div sui-label suiPointing='below' suiColour='red' suiBasic='true'>
        Please enter a value
      </div>
      <input type="text">
    </div>
    <div sui-divider></div>
    <div suiFormField suiInline='true'>
      <input type="text" placeholder="Username">
      <div sui-label suiPointing='left' suiColour='red' suiBasic='true'>
        That name is taken!
      </div>
    </div>
    <div sui-divider></div>
    <div suiFormField suiInline='true'>
      <div sui-label suiPointing='right' suiColour='red' suiBasic='true'>
        Your password must be 6 characters or more
      </div>
      <input type="password" style="background-image: url(&quot;data:image/png;base64,  iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=&quot;);">
    </div>
  </form>
  `;

  snippetCorner = `
  <div sui-grid suiGridColumn suiWidth="two">
    <div class="column">
      <div sui-image suiFluid="true">
        <a sui-label suiCorner='left'>
          <i sui-icon suiIconType="heart icon"></i>
        </a>
        <img src="/images/wireframe/image.png">
      </div>
    </div>
    <div class="column">
      <div sui-image suiFluid="true">
        <a sui-label suiCorner='right' suiColour='red'>
          <i sui-icon suiIconType="save icon"></i>
        </a>
        <img src="/images/wireframe/image.png">
      </div>
    </div>
  </div>
  `;

  snippetTag = `
  <a sui-label suiTag='true'>New</a>
  <a sui-label suiTag='true' suiColour="red">Upcoming</a>
  <a sui-label suiTag='true' suiColour="teal">Featured</a>
  `;

  snippetRibbon = `
    <div sui-grid suiGridColumn suiWidth="two">
      <div suiGridColumn>
        <div sui-segment suiRaised="true">
          <a suiColour="red" sui-label suiRibbon="left">Overview</a>
          <span>Account Details</span>
          <div sui-placeholder>
            <div sui-placeholder-paragraph>
              <div suiPlaceholderLine suiLength="medium"></div>
              <div suiPlaceholderLine suiLength="medium"></div>
            </div>
          </div>
          <p></p>
          <a suiColour="blue" sui-label suiRibbon="left">Community</a> User Reviews
          <div sui-placeholder>
            <div sui-placeholder-paragraph>
              <div suiPlaceholderLine suiLength="medium"></div>
              <div suiPlaceholderLine suiLength="medium"></div>
            </div>
          </div>
        </div>
      </div>
      <div suiGridColumn>
        <div sui-segment>
          <a suiColour="orange" sui-label suiRibbon="right" >Specs</a>
          <div sui-placeholder>
            <div sui-placeholder-paragraph>
              <div suiPlaceholderLine suiLength="medium"></div>
              <div suiPlaceholderLine suiLength="medium"></div>
            </div>
          </div>
          <a suiColour="teal" sui-label suiRibbon="right">Reviews</a>
          <div sui-placeholder>
            <div sui-placeholder-paragraph>
              <div suiPlaceholderLine suiLength="medium"></div>
              <div suiPlaceholderLine suiLength="medium"></div>
            </div>
          </div>
        </div>
      </div>
    </div>>
  `;

  snippetRibbon2 = `
  <div sui-grid suiGridColumn suiWidth="two">
    <div suiGridColumn>
      <div sui-image suiFluid="true">
        <div suiColour="black" sui-label suiRibbon="left">
          <i sui-icon suiIconType="hotel icon"></i> Hotel
        </div>
        <img src="/images/wireframe/image.png">
      </div>
    </div>
    <div suiGridColumn>
      <div sui-image suiFluid="true">
        <div suiColour="blue" sui-label suiRibbon="left">
          <i sui-icon suiIconType="spoon icon"></i> Food
        </div>
        <img src="/images/wireframe/image.png">
      </div>
    </div>
  </div>
  `;

  snippetAttached = `
      <div sui-grid suiGridColumn suiWidth="three">
        <div suiGridRow>
          <div suiGridColumn>
            <div sui-segment>
              <div sui-label suiAttached="top">HTML</div>
              <div sui-placeholder>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
              </div>
            </div>
          </div>
          <div suiGridColumn>
            <div sui-segment>
              <div sui-label suiAttached="bottom">CSS</div>
              <div sui-placeholder>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
              </div>
            </div>
          </div>
          <div suiGridColumn>
            <div sui-segment></div>
            <div sui-label suiAttached="top right">Code</div>
            <div sui-placeholder>
              <div sui-placeholder-paragraph>
                <div suiPlaceholderLine suiLength="large"></div>
                <div suiPlaceholderLine suiLength="large"></div>
              </div>
              <div sui-placeholder-paragraph>
                <div suiPlaceholderLine suiLength="large"></div>
                <div suiPlaceholderLine suiLength="large"></div>
              </div>
            </div>
          </div>
        </div>
        <div suiGridRow>
          <div suiGridColumn>
            <div sui-segment>
              <div sui-label suiAttached="top left">View</div>
              <div sui-placeholder>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
              </div>
            </div>
          </div>
          <div suiGridColumn>
            <div sui-segment>
              <div sui-label suiAttached="bottom left">User View</div>
              <div sui-placeholder>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
                <div sui-placeholder-paragraph>
                  <div suiPlaceholderLine suiLength="large"></div>
                  <div suiPlaceholderLine suiLength="large"></div>
                </div>
              </div>
            </div>
          </div>
          <div suiGridColumn>
            <div sui-segment></div>
            <div sui-label suiAttached="bottom right">Admin View</div>
            <div sui-placeholder>
              <div sui-placeholder-paragraph>
                <div suiPlaceholderLine suiLength="large"></div>
                <div suiPlaceholderLine suiLength="large"></div>
              </div>
              <div sui-placeholder-paragraph>
                <div suiPlaceholderLine suiLength="large"></div>
                <div suiPlaceholderLine suiLength="large"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

  snippetHorizontal = `
  <div sui-list suiDivided="true" suiSelection="true">
    <a class="item">
      <div sui-label suiColour="red" suiHorizontal="true">Fruit</div>
      Kumquats
    </a>
    <a class="item">
      <div sui-label suiColour="purple" suiHorizontal="true">Candy</div>
      Ice Cream
    </a>
    <a class="item">
      <div sui-label suiColour="red" suiHorizontal="true">Fruit</div>
      Orange
    </a>
    <a class="item">
      <div sui-label suiHorizontal="true">Dog</div>
      Poodle
    </a>
  </div>
  `;

  snippetFloating = `
  <div sui-menu suiCompact="true">
    <a class="item">
      <i sui-icon suiIconType="mail icon"></i> Messages
      <div suiColour="red" sui-label suiFloating="true">22</div>
    </a>
    <a class="item">
      <i sui-icon suiIconType="users icon"></i> Friends
      <div suiColour="teal" sui-label suiFloating="true">22</div>
    </a>
  </div>
  `;

  snippetDetail = `
  <div sui-label> Dogs
    <div suiDetail="true">214</div>
  </div>
  `;

  snippetIcon = `
  <div sui-label>
    <i sui-icon suiIconType="mail icon"></i> Mail
  </div>
  <div sui-label>
    Tag
    <i sui-icon suiIconType="delete icon"></i>
  </div>
  `;

  snippetImage4 = `
  <a sui-label>
    <img  src="https://semantic-ui.com/images/avatar/small/stevie.jpg">
    Stevie
  </a>
  `;

  snippetLink = `
<div sui-label>
  <i sui-icon suiIconType="mail icon"></i> 23
</div>
<div sui-label>
  <i sui-icon suiIconType="mail icon"></i> 23
  <a suiDetail="true">View Mail</a>
</div>
  `;

  snippetColored = `
  <a sui-label suiColour="red">Red</a>
  <a sui-label suiColour="orange">Orange</a>
  <a sui-label suiColour="yellow">Yellow</a>
  <a sui-label suiColour="olive">Olive</a>
  `;

  snippetColoredEmpty = `
<a sui-label suiEmpty="true" suiCircular="true" suiColour="orange"></a>
<a sui-label suiEmpty="true" suiCircular="true" suiColour="yellow"></a>
<a sui-label suiEmpty="true" suiCircular="true" suiColour="olive"></a>
<a sui-label suiEmpty="true" suiCircular="true" suiColour="green"></a>
<a sui-label suiEmpty="true" suiCircular="true" suiColour="teal"></a>
<a sui-label suiEmpty="true" suiCircular="true" suiColour="blue"></a>
  `;

  snippetBasic = `
<a sui-label suiBasic="true">Basic</a>
<a sui-label suiBasic="true" suiPointing="true">Pointing</a>
<a sui-label suiImage="true" suiBasic="true">
  <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg">
  Elliot
</a>
<a sui-label suiBasic="true" suiPointing="true" suiColour="red">Red Pointing</a>
<a sui-label suiBasic="true" suiColour="blue">Blue</a>
  `;

  snippetCircular = `
  <a sui-label suiColour="red" suiCircular="true">2</a>
  <a sui-label suiColour="orange" suiCircular="true">2</a>
  <a sui-label suiColour="yellow" suiCircular="true">2</a>
  <a sui-label suiColour="olive" suiCircular="true">2</a>
  `;

  snippetSize = `
  <a sui-label suiSize="mini">Mini</a>
  <a sui-label suiSize="tiny">Tiny</a>
  <a sui-label suiSize="small">Small</a>
  <a sui-label suiSize="medium">Medium</a>
  <a sui-label suiSize="large">Large</a>
  <a sui-label suiSize="big">Big</a>
  <a sui-label suiSize="huge">Huge</a>
  <a sui-label suiSize="massive">Massive</a>
  `;

  snippetGroupSize = `
  <div sui-labels suiSize="huge">
    <div sui-label>
      Fun
    </div>
    <div sui-label>
      Happy
    </div>
    <div sui-label>
      Smart
    </div>
    <div sui-label>
      Witty
    </div>
  </div>
  `;

  snippetGroupColour = `
<div sui-labels suiColour="blue">
  <div sui-label>
    Fun
    <i sui-icon suiIconType="delete icon"></i>
  </div>
  <div sui-label>
    Happy
    <a suiDetail="true">22</a>
  </div>
  <div sui-label>
    Smart
  </div>
  <div sui-label>
    Witty
  </div>
</div>
  `;

  snippetGroupTag = `
<div sui-labels suiTag="true">
  <a sui-label>
    $10.00
  </a>
  <a sui-label>
    $19.99
  </a>
  <a sui-label>
    $24.99
  </a>
  <a sui-label>
    $30.99
  </a>
  <a sui-label>
    $10.25
  </a>
</div>
  `;

  snippetGroupCircular = `
  <div sui-labels suiCircular="true">
    <a sui-label>
      11
    </a>
    <a sui-label>
      22
    </a>
    <a sui-label>
      33
    </a>
    <a sui-label>
      44
    </a>
    <a sui-label>
      141
    </a>
  </div>
  `;

  constructor() {}
  toggleStateMap: any = {};

  ngOnInit(): void {}

  toggleLabel(key: string) {
    this.toggleStateMap[key] = !this.toggleStateMap[key];
  }
}
