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
        <div suiListDescription>Updated 10 mins ago</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiListContent>
        <a sui-header suiSize="small">Semantic-Org/Semantic-UI-Docs</a>
        <div suiListDescription>Updated 22 mins ago</div>
      </div>
    </div>
    <div suiListItem>
      <i sui-icon suiIconType="github" suiSize="large"></i>
      <div suiListContent>
        <a sui-header suiSize="small">Semantic-Org/Semantic-UI-Meteor</a>
        <div suiListDescription>Updated 34 mins ago</div>
      </div>
    </div>
  </div>
  `;

  constructor() { }

  ngOnInit(): void {
  }
}
