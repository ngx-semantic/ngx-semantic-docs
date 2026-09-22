import { Component } from '@angular/core';
import { ISelectOption } from 'ngx-semantic/modules/select';

export class SelectSampleState {
  genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];
  countries: ISelectOption[] = [
    { text: 'Albania', value: 'al', flag: 'al' },
    { text: 'Angola', value: 'ao', flag: 'ao' },
    { text: 'Azerbaijan', value: 'az', flag: 'az' },
    { text: 'Botswana', value: 'bw', flag: 'bw' },
    { text: 'Nigeria', value: 'ng', flag: 'ng' },
  ];
  states: ISelectOption[] = [
    { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
    { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
    { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
    { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
    { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
  ];
  persons: ISelectOption[] = [
    { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
    { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
    { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
    { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
    { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
    { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
    { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
    { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
  ];
  options: ISelectOption[] = [
    { text: 'Option 1', value: 'one' },
    { text: 'Option 2', value: 'two' },
    { text: 'Option 3', value: 'three' },
  ];
}

@Component({
  selector: 'doc-select-standard-example',
  templateUrl: './snippets/standard.sample.html',
  standalone: false
})
export class SelectStandardExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-fluid-example',
  templateUrl: './snippets/fluid.sample.html',
  standalone: false
})
export class SelectFluidExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-multiple-example',
  templateUrl: './snippets/multiple.sample.html',
  standalone: false
})
export class SelectMultipleExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-multiple-search-example',
  templateUrl: './snippets/multiple-search.sample.html',
  standalone: false
})
export class SelectMultipleSearchExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-flag-example',
  templateUrl: './snippets/flag.sample.html',
  standalone: false
})
export class SelectFlagExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-images-example',
  templateUrl: './snippets/images.sample.html',
  standalone: false
})
export class SelectImagesExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-loading-example',
  templateUrl: './snippets/loading.sample.html',
  standalone: false
})
export class SelectLoadingExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-error-example',
  templateUrl: './snippets/error.sample.html',
  standalone: false
})
export class SelectErrorExampleComponent extends SelectSampleState {
}

@Component({
  selector: 'doc-select-disabled-example',
  templateUrl: './snippets/disabled.sample.html',
  standalone: false
})
export class SelectDisabledExampleComponent extends SelectSampleState {
}
export const SELECT_EXAMPLES = [
  SelectStandardExampleComponent,
  SelectFluidExampleComponent,
  SelectMultipleExampleComponent,
  SelectMultipleSearchExampleComponent,
  SelectFlagExampleComponent,
  SelectImagesExampleComponent,
  SelectLoadingExampleComponent,
  SelectErrorExampleComponent,
  SelectDisabledExampleComponent,
];
