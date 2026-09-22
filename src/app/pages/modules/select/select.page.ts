import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ISelectOption } from 'ngx-semantic/modules/select';
import snippetStandardSrc from './snippets/standard.sample.html' with { loader: 'text' };
import snippetStandardTsSrc from './snippets/standard.sample.txt' with { loader: 'text' };
import snippetFluidSrc from './snippets/fluid.sample.html' with { loader: 'text' };
import snippetMultipleSrc from './snippets/multiple.sample.html' with { loader: 'text' };
import snippetMultipleTsSrc from './snippets/multiple.sample.txt' with { loader: 'text' };
import snippetMultipleSearchSrc from './snippets/multiple-search.sample.html' with { loader: 'text' };
import snippetFlagsSrc from './snippets/flag.sample.html' with { loader: 'text' };
import snippetFlagsTsSrc from './snippets/flag.sample.txt' with { loader: 'text' };
import snippetImagesSrc from './snippets/images.sample.html' with { loader: 'text' };
import snippetImagesTsSrc from './snippets/images.sample.txt' with { loader: 'text' };
import snippetLoadingSrc from './snippets/loading.sample.html' with { loader: 'text' };
import snippetStatesTsSrc from './snippets/loading.sample.txt' with { loader: 'text' };
import snippetErrorSrc from './snippets/error.sample.html' with { loader: 'text' };
import snippetDisabledSrc from './snippets/disabled.sample.html' with { loader: 'text' };

@Component({
    selector: 'doc-select',
    templateUrl: 'select.page.html',
    standalone: false
})
export class SelectPage {
  snippetStandard = snippetStandardSrc;
  snippetStandardTs = snippetStandardTsSrc;
  snippetFluid = snippetFluidSrc;
  snippetMultiple = snippetMultipleSrc;
  snippetMultipleTs = snippetMultipleTsSrc;
  snippetMultipleSearch = snippetMultipleSearchSrc;
  snippetFlags = snippetFlagsSrc;
  snippetFlagsTs = snippetFlagsTsSrc;
  snippetImages = snippetImagesSrc;
  snippetImagesTs = snippetImagesTsSrc;
  snippetLoading = snippetLoadingSrc;
  snippetStatesTs = snippetStatesTsSrc;
  snippetError = snippetErrorSrc;
  snippetDisabled = snippetDisabledSrc;

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















  constructor(title: Title) {
    title.setTitle('Select | Ngx Semantic');
  }
}
