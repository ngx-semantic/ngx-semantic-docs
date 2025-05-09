import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'doc-rating',
  templateUrl: './rating.page.html',
  styles: [
  ]
})
export class RatingComponent {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetBasic = `
  <sui-rating suiMaxValue="1"></sui-rating>`;

  snippetStar = `
  <sui-rating
    suiType="star"
    suiValue="3"
    suiMaxValue="4"></sui-rating>`;

  snippetHeart = `
  <sui-rating
    suiType="heart"
    suiValue="1"
    suiMaxValue="3"></sui-rating>`;

  snippetSizes = `
  <sui-rating
      suiSize="mini"
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>
  <sui-rating
      suiSize="tiny"
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>
  <sui-rating
      suiSize="small"
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>
  <sui-rating
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>
  <sui-rating
      suiSize="large"
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>
  <sui-rating
      suiSize="huge"
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>
  <sui-rating
      suiSize="huge"
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>
  <sui-rating
      suiSize="massive"
      suiType="star"
      suiValue="3"
      suiMaxValue="4"></sui-rating>`;

  constructor(title: Title) {
    title.setTitle('Rating | Ngx Semantic');
  }
}

