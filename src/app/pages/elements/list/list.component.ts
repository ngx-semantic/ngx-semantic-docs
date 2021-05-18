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
      <div suiListContent>
        Semantic UI
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="marker"></i>
      <div suiListContent>
        New York, NY
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="mail"></i>
      <div suiListContent>
        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="linkify"></i>
      <div suiListContent>
        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
      </div>
    </div>
  </div>
  `;
  snippetList2= `
  <div sui-list suiDivided="true" SuiListRelaxation="relaxed">
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiListContent>
        <a sui-header suiSize="small">Semantic-Org/Semantic-UI</a>
        <div>Updated 10 mins ago</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiListContent>
        <a sui-header suiSize="small">Semantic-Org/Semantic-UI-Docs</a>
        <div>Updated 22 mins ago</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiListContent>
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
      <div suiListContent>
        <div sui-header suiSize="tiny">src</div>
        <div>Source files for project</div>
        <div sui-list>
          <div suiListItem>
            <i sui-icon suiIconType="folder"></i>
            <div suiListContent>
              <div sui-header suiSize="tiny">site</div>
              <div>Your site's theme</div>
            </div>
          </div>
          <div suiListItem>
            <i sui-icon suiIconType="folder"></i>
            <div suiListContent>
              <div sui-header suiSize="tiny">themes</div>
              <div>Packaged theme files</div>
              <div sui-list>
                <div suiListItem>
                  <i sui-icon suiIconType="folder"></i>
                  <div suiListContent>
                    <div sui-header suiSize="tiny">default</div>
                    <div>Default packaged theme</div>
                  </div>
                </div>
                <div suiListItem>
                  <i sui-icon suiIconType="folder"></i>
                  <div suiListContent>
                    <div sui-header suiSize="tiny">my_theme</div>
                    <div>Packaged themes are also available in this folder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suiListItem>
            <i sui-icon suiIconType="file"></i>
            <div suiListContent>
              <div sui-header suiSize="tiny">theme.config</div>
              <div>Config file for setting packaged themes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="folder"></i>
      <div suiListContent>
        <div sui-header suiSize="tiny">dist</div>
        <div>Compiled CSS and JS files</div>
        <div sui-list>
          <div suiListItem>
            <i sui-icon suiIconType="folder"></i>
            <div suiListContent>
              <div sui-header suiSize="tiny">components</div>
              <div>Individual component CSS and JS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="file"></i>
      <div suiListContent>
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

  constructor() { }

  ngOnInit(): void {
  }
}
