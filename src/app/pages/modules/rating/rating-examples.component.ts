import { Component } from '@angular/core';

export class RatingSampleState {
  isDefinitionsActive = true;
  isApiActive: boolean;
}

@Component({
  selector: 'doc-rating-basic-example',
  templateUrl: './snippets/basic.sample.html',
  standalone: false
})
export class RatingBasicExampleComponent extends RatingSampleState {
}

@Component({
  selector: 'doc-rating-star-example',
  templateUrl: './snippets/star.sample.html',
  standalone: false
})
export class RatingStarExampleComponent extends RatingSampleState {
}

@Component({
  selector: 'doc-rating-heart-example',
  templateUrl: './snippets/heart.sample.html',
  standalone: false
})
export class RatingHeartExampleComponent extends RatingSampleState {
}

@Component({
  selector: 'doc-rating-sizes-example',
  templateUrl: './snippets/sizes.sample.html',
  standalone: false
})
export class RatingSizesExampleComponent extends RatingSampleState {
}
export const RATING_EXAMPLES = [
  RatingBasicExampleComponent,
  RatingStarExampleComponent,
  RatingHeartExampleComponent,
  RatingSizesExampleComponent,
];
