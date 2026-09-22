import { Component } from '@angular/core';

@Component({
  selector: 'doc-container-std-container-example',
  templateUrl: './snippets/std-container.sample.html',
  standalone: false
})
export class ContainerStdContainerExampleComponent {
}

@Component({
  selector: 'doc-container-text-container-example',
  templateUrl: './snippets/text-container.sample.html',
  standalone: false
})
export class ContainerTextContainerExampleComponent {
}

@Component({
  selector: 'doc-container-text-alignment-example',
  templateUrl: './snippets/text-alignment.sample.html',
  standalone: false
})
export class ContainerTextAlignmentExampleComponent {
}

@Component({
  selector: 'doc-container-fluid-example',
  templateUrl: './snippets/fluid.sample.html',
  standalone: false
})
export class ContainerFluidExampleComponent {
}
export const CONTAINER_EXAMPLES = [
  ContainerStdContainerExampleComponent,
  ContainerTextContainerExampleComponent,
  ContainerTextAlignmentExampleComponent,
  ContainerFluidExampleComponent,
];
