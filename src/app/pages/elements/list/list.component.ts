import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-lists',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  snippetList = `
<div  sui-list>
  <div suiListItem>
    Apples
  </div>
  <div suiListItem>
    Pears
  </div>
  <div suiListItem>
    Oranges
  </div>
</div>
  `;
  snippetList1 = `
  <div  sui-list>
    <div suiListItem>
      <i sui-icon suiIconType="users"></i>
      <div suiMessageContent>
        Semantic UI
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="marker"></i>
      <div suiMessageContent>
        New York, NY
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="mail"></i>
      <div suiMessageContent>
        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="linkify"></i>
      <div suiMessageContent>
        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
      </div>
    </div>
  </div>
  `;
  snippetList2= `
  <div sui-list suiDivided="true" SuiRelaxation="relaxed">
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiMessageContent>
        <a sui-header suiSize="small">Semantic-Org/Semantic-UI</a>
        <div>Updated 10 mins ago</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiMessageContent>
        <a sui-header suiSize="small">Semantic-Org/Semantic-UI-Docs</a>
        <div>Updated 22 mins ago</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiMessageContent>
        <a sui-header suiSize="small">Semantic-Org/Semantic-UI-Meteor</a>
        <div>Updated 34 mins ago</div>
      </div>
    </div>
  </div>
  `;
  snippetList3 = `
  <div sui-list>
    <div suiListItem>
      <i sui-icon suiIconType="folder"></i>
      <div suiMessageContent>
        <div sui-header suiSize="tiny">src</div>
        <div>Source files for project</div>
        <div sui-list>
          <div suiListItem>
            <i sui-icon suiIconType="folder"></i>
            <div suiMessageContent>
              <div sui-header suiSize="tiny">site</div>
              <div>Your site's theme</div>
            </div>
          </div>
          <div suiListItem>
            <i sui-icon suiIconType="folder"></i>
            <div suiMessageContent>
              <div sui-header suiSize="tiny">themes</div>
              <div>Packaged theme files</div>
              <div sui-list>
                <div suiListItem>
                  <i sui-icon suiIconType="folder"></i>
                  <div suiMessageContent>
                    <div sui-header suiSize="tiny">default</div>
                    <div>Default packaged theme</div>
                  </div>
                </div>
                <div suiListItem>
                  <i sui-icon suiIconType="folder"></i>
                  <div suiMessageContent>
                    <div sui-header suiSize="tiny">my_theme</div>
                    <div>Packaged themes are also available in this folder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suiListItem>
            <i sui-icon suiIconType="file"></i>
            <div suiMessageContent>
              <div sui-header suiSize="tiny">theme.config</div>
              <div>Config file for setting packaged themes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="folder"></i>
      <div suiMessageContent>
        <div sui-header suiSize="tiny">dist</div>
        <div>Compiled CSS and JS files</div>
        <div sui-list>
          <div suiListItem>
            <i sui-icon suiIconType="folder"></i>
            <div suiMessageContent>
              <div sui-header suiSize="tiny">components</div>
              <div>Individual component CSS and JS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="file"></i>
      <div suiMessageContent>
        <div sui-header suiSize="tiny">semantic.json</div>
        <div>Contains build settings for gulp</div>
      </div>
    </div>
  </div>
  `;
  snippetBulleted = `
  <div sui-list suiBulleted="true">
    <div suiListItem>Gaining Access</div>
    <div suiListItem>Inviting Friends</div>
    <div suiListItem>
      <div>Benefits</div>
      <div sui-list>
        <a suiListItem href="#">Link to somewhere</a>
        <div suiListItem>Rebates</div>
        <div suiListItem>Discounts</div>
      </div>
    </div>
    <div suiListItem>Warranty</div>
  </div>
  `;
  snippetBulleted1 = `
  <ul sui-list>
    <li>Gaining Access</li>
    <li>Inviting Friends</li>
    <li>Benefits
      <ul>
        <li>Use Anywhere</li>
        <li>Rebates</li>
        <li>Discounts</li>
      </ul>
    </li>
    <li>Warranty</li>
  </ul>
  `;
  snippetBulleted2 = `
  <div sui-list suiBulleted="true" suiHorizontal="true">
    <a suiListItem>
      About Us
    </a>
    <a suiListItem>
      Sitemap
    </a>
    <a suiListItem>
      Contact
    </a>
  </div>
  `;
  snippetOrdered = `
  <div sui-list suiOrdered="true">
    <a suiListItem>Getting Started</a>
    <a suiListItem>Introduction</a>
    <div suiListItem>
      <a>Languages</a>
      <div sui-list>
        <a suiListItem>HTML</a>
        <a suiListItem>Javascript</a>
        <a suiListItem>CSS</a>
      </div>
    </div>
    <a suiListItem>Review</a>
  </div>
  `;
  snippetOrdered1 = `
  <ol sui-list>
    <li>Signing Up</li>
    <li>User Benefits</li>
    <li>User Types
      <ol>
        <li>Admin</li>
        <li>Power User</li>
        <li>Regular User</li>
      </ol>
    </li>
    <li>Deleting Your Account</li>
  </ol>
  `;
  snippetOrdered2 = `
  <ol sui-list>
    <li value="*">Signing Up</li>
    <li value="*">User Benefits</li>
    <li value="*">User Types
      <ol>
        <li value="-">Admin</li>
        <li value="-">Power User</li>
        <li value="-">Regular User</li>
      </ol>
    </li>
    <li value="*">Deleting Your Account</li>
  </ol>
  `;
  snippetLink = `
  <div sui-list suiLink="true">
    <div suiListItem suiLinkActive>Home</div>
    <a suiListItem>About</a>
    <a suiListItem>Jobs</a>
    <a suiListItem>Team</a>
  </div>
  `;
  snippetItem = `
  <div sui-list>
    <div suiListItem>
      1
    </div>
    <div suiListItem>
      2
    </div>
    <div suiListItem>
      3
    </div>
  </div>
  `;
  snippetIcon = `
  <div sui-list>
    <a suiListItem>
      <i sui-icon suiIconType="help"></i>
      <div suiMessageContent>
        <div sui-header suiSize="small">Floated Icon</div>
        <div>This text will always have a left margin to make sure it sits alongside your icon</div>
      </div>
    </a>
    <a suiListItem>
      <i sui-icon suiIconType="right triangle"></i>
      <div suiMessageContent>
        <div sui-header suiSize="small">Icon Alignment</div>
        <div>Floated icons are by default top aligned. To have an icon top aligned try this example.</div>
      </div>
    </a>
    <div suiListItem>
      <i sui-icon suiIconType="help"></i>
      Inline Text
    </div>
  </div>
  `;
  snippetImage = `
  <div sui-list>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar2/small/rachel.png">
      <div suiMessageContent>
        <a sui-header suiSize="small">Rachel</a>
        <div>Last seen watching <a><b>Arrested Development</b></a> just now.</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar2/small/lindsay.png">
      <div suiMessageContent>
        <a sui-header suiSize="small">Lindsay</a>
        <div>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar2/small/matthew.png">
      <div suiMessageContent>
        <a sui-header suiSize="small">Matthew</a>
        <div>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/jenny.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Jenny Hess</a>
        <div>Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>
      </div>
    </div>
  </div>
  `;

  snippetLink1 = `
  <div sui-list>
    <a suiListItem>What is a FAQ?</a>
    <a suiListItem>Who is our user?</a>
    <a suiListItem>Where is our office located?</a>
  </div>
  `;

  snippetLink2 = `
  <div sui-list>
    <div suiListItem>
      <a sui-header suiSize="small">Header</a>
      <div>
        Click a link in our <a>description</a>.
      </div>
    </div>
    <div suiListItem>
      <a sui-header suiSize="small">Learn More</a>
      <div>
        Learn more about this site on <a>our FAQ page</a>.
      </div>
    </div>
  </div>
  `;

  snippetHeader = `
  <div sui-list>
    <div suiListItem>
      <div sui-header suiSize="small">New York City</div>
      A lovely city
    </div>
    <div suiListItem>
      <div sui-header suiSize="small">Chicago</div>
      Also quite a lovely city
    </div>
    <div suiListItem>
      <div sui-header suiSize="small">Los Angeles</div>
      Sometimes can be a lovely city
    </div>
    <div suiListItem>
      <div sui-header suiSize="small">San Francisco</div>
      What a lovely city
    </div>
  </div>
  `;

  snippetDescription = `
  <div sui-list>
    <div suiListItem>
      <i sui-icon suiIconType="map marker"></i>
      <div suiMessageContent>
        <a sui-header suiSize="small">Krolewskie Jadlo</a>
        <div>An excellent polish restaurant, quick delivery and hearty, filling meals.</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="map marker"></i>
      <div suiMessageContent>
        <a sui-header suiSize="small">Xian Famous Foods</a>
        <div>A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="map marker"></i>
      <div suiMessageContent>
        <a sui-header suiSize="small">Sapporo Haru</a>
        <div>Greenpoint's best choice for quick and delicious sushi.</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="map marker"></i>
      <div suiMessageContent>
        <a sui-header suiSize="small">Enid's</a>
        <div>At night a bar, during the day a delicious brunch spot.</div>
      </div>
    </div>
  </div>
  `;

  snippetHorizontal = `
  <div sui-list suiHorizontal="true">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/tom.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Tom</div>
        Top Contributor
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian Rocha</div>
        Admin
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/matt.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Matt</div>
        Top Rated User
      </div>
    </div>
  </div>
  `;

  snippetHorizontal1 = `
  <div sui-list suiHorizontal="true" suiOrdered="true">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/tom.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Tom</div>
        Top Contributor
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian Rocha</div>
        Admin
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/matt.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Matt</div>
        Top Rated User
      </div>
    </div>
  </div>
  `;

  snippetHorizontal2 = `
  <div sui-list suiHorizontal="true" suiBulleted="true" suiLink="true">
    <a suiListItem>
      Terms and Conditions
    </a>
    <a suiListItem>
      Privacy Policy
    </a>
    <a suiListItem>
      Contact Us
    </a>
  </div>
  `;

  snippetInverted = `
  <div sui-segment suiInverted="true">
    <div sui-list suiRelaxation="relaxed" suiDivided="true" suiInverted="true">
      <div suiListItem>
        <div suiMessageContent>
          <div sui-header suiSize="small">Snickerdoodle</div>
          An excellent companion
        </div>
      </div>
      <div suiListItem>
        <div suiMessageContent>
          <div sui-header suiSize="small">Poodle</div>
          A poodle, its pretty basic
        </div>
      </div>
      <div suiListItem>
        <div suiMessageContent>
          <div sui-header suiSize="small">Paulo</div>
          He's also a dog
        </div>
      </div>
    </div>
  </div>
  `;

  snippetSelection = `
  <div sui-list suiSelection="true" suiAlignment="middle aligned">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetAnimated = `
  <div sui-list suiSelection="true" suiAlignment="middle aligned" suiAnimated="true">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetRelaxed = `
  <div sui-list suiRelaxed="true">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Daniel Louise</a>
        <div>Last seen watching <a><b>Arrested Development</b></a> just now.</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/stevie.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Stevie Feliciano</a>
        <div>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/elliot.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Elliot Fu</a>
        <div>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
      </div>
    </div>
  </div>
  `;

  snippetRelaxed1 = `
  <div sui-list suiRelaxed="true" suiHorizontal="true">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Daniel Louise</a>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/stevie.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Stevie Feliciano</a>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/elliot.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Elliot Fu</a>
      </div>
    </div>
  </div>
  `;

  snippetRelaxed3 = `
  <div sui-list suiRelaxed="true" suiHorizontal="true">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Daniel Louise</a>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/stevie.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Stevie Feliciano</a>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/elliot.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Elliot Fu</a>
      </div>
    </div>
  </div>
  `;

  snippetRelaxed2 = `
  <div sui-list suiRelaxed="true" suiRelaxation="very relaxed">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Daniel Louise</a>
        <div>Last seen watching <a><b>Arrested Development</b></a> just now.</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/stevie.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Stevie Feliciano</a>
        <div>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/elliot.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Elliot Fu</a>
        <div>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
      </div>
    </div>
  </div>
  `;

  snippetDivided = `
  <div sui-list suiDivided="true" suiAlignment="middle aligned">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Daniel Louise</a>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/stevie.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Stevie Feliciano</a>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/elliot.jpg">
      <div suiMessageContent>
        <a sui-header suiSize="small">Elliot Fu</a>
      </div>
    </div>
  </div>
  `;

  snippetCelled = `
  <div sui-list suiCelled="true">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Snickerdoodle</div>
        An excellent companion
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/stevie.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Poodle</div>
        A poodle, its pretty basic
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/elliot.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Paulo</div>
        He's also a dog
      </div>
    </div>
  </div>
  `;

  snippetCelled1 = `
  <div sui-list suiOrdered="true" suiCelled="true">
    <div suiListItem>Cats</div>
    <div suiListItem>Horses</div>
    <div suiListItem>Dogs
      <div sui-list>
        <div suiListItem>Labradoodles</div>
        <div suiListItem>Shiba Inu</div>
        <div suiListItem>Mastiff</div>
      </div>
    </div>
  </div>
  `;

  snippetCelled2 = `
  <div sui-list suiCelled="true" suiHorizontal="true">
    <div suiListItem>About Us</div>
    <div suiListItem>Contact</div>
    <div suiListItem>Support</div>
  </div>
  `;

  snippetSizeMini = `
  <div sui-list suiHorizontal="true" suiDivided="true" suiSize="mini">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetSizeTiny = `
  <div sui-list suiHorizontal="true" suiDivided="true" suiSize="tiny">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetSizeSmall = `
  <div sui-list suiHorizontal="true" suiDivided="true" suiSize="small">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetSizeLarge = `
  <div sui-list suiHorizontal="true" suiDivided="true" suiSize="large">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetSizeBig = `
  <div sui-list suiHorizontal="true" suiDivided="true" suiSize="big">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetSizeHuge = `
  <div sui-list suiHorizontal="true" suiDivided="true" suiSize="huge">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetSizeMassive = `
  <div sui-list suiHorizontal="true" suiDivided="true" suiSize="massive">
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/helen.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Helen</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/christian.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Christian</div>
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar src="/images/avatar/small/daniel.jpg">
      <div suiMessageContent>
        <div sui-header suiSize="small">Daniel</div>
      </div>
    </div>
  </div>
  `;

  snippetVertical = `
  <div sui-list suiHorizontal="true">
    <div suiListItem>
      <img sui-image suiAvatar suiAlignment="top aligned" src="/images/wireframe/square-image.png">
      <div suiMessageContent>
        Top Aligned
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar suiAlignment="middle aligned" src="/images/wireframe/square-image.png">
      <div suiMessageContent>
        Middle
      </div>
    </div>
    <div suiListItem>
      <img sui-image suiAvatar suiAlignment="bottom aligned" src="/images/wireframe/square-image.png">
      <div suiMessageContent>
        Bottom
      </div>
    </div>
  </div>
  `;

  snippetFloated = `
  <div sui-list suiAlignment="middle aligned" suiDivided="true">
    <div suiListItem>
      <div suiMessageContent>
        <div sui-button suiFloated="right floated">Add</div>
      </div>
      <img sui-image suiAvatar src="/images/avatar2/small/lena.png">
      <div suiMessageContent>
        Lena
      </div>
    </div>
    <div suiListItem>
      <div suiMessageContent>
        <div sui-button suiFloated="right floated">Add</div>
      </div>
      <img sui-image suiAvatar src="/images/avatar2/small/lindsay.png">
      <div suiMessageContent>
        Lindsay
      </div>
    </div>
    <div suiListItem>
      <div suiMessageContent>
        <div sui-button suiFloated="right floated">Add</div>
      </div>
      <img sui-image suiAvatar src="/images/avatar2/small/mark.png">
      <div suiMessageContent>
        Mark
      </div>
    </div>
    <div suiListItem>
      <div suiMessageContent>
        <div sui-button suiFloated="right floated">Add</div>
      </div>
      <img sui-image suiAvatar src="/images/avatar2/small/molly.png">
      <div suiMessageContent>
        Molly
      </div>
    </div>
  </div>
  `;

  snippetFloated1 = `
  <div sui-list suiHorizontal="true" suiFloated="right floated">
    <div suiListItem href="#">© GitHub, Inc.</div>
    <a suiListItem href="#">Terms</a>
    <a suiListItem href="#">Privacy</a>
    <a suiListItem href="#">Contact</a>
  </div>
  <div sui-list suiHorizontal="true">
    <a suiListItem href="#">About Us</a>
    <a suiListItem href="#">Jobs</a>
  </div>
  `;

  constructor() { }

  ngOnInit(): void {
  }
}
