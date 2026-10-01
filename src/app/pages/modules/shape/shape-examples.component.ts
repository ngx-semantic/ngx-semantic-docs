import { Component } from '@angular/core';

@Component({
  selector: 'doc-shape-shape-example',
  templateUrl: './snippets/shape.sample.html',
  standalone: false
})
export class ShapeShapeExampleComponent {
}

@Component({
  selector: 'doc-shape-cube-example',
  templateUrl: './snippets/cube.sample.html',
  standalone: false
})
export class ShapeCubeExampleComponent {
}

@Component({
  selector: 'doc-shape-text-example',
  templateUrl: './snippets/text.sample.html',
  standalone: false
})
export class ShapeTextExampleComponent {
}

@Component({
  selector: 'doc-shape-next-side-example',
  templateUrl: './snippets/next-side.sample.html',
  standalone: false
})
export class ShapeNextSideExampleComponent {
}

@Component({
  selector: 'doc-shape-settings-example',
  templateUrl: './snippets/settings.sample.html',
  standalone: false
})
export class ShapeSettingsExampleComponent {
}

export const SHAPE_EXAMPLES = [
  ShapeShapeExampleComponent,
  ShapeCubeExampleComponent,
  ShapeTextExampleComponent,
  ShapeNextSideExampleComponent,
  ShapeSettingsExampleComponent,
];
