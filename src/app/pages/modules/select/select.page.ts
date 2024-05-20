import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ISelectOption } from 'ngx-semantic/modules/select';

@Component({
  selector: 'doc-select',
  templateUrl: 'select.page.html'
})
export class SelectPage {
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

  snippetStandard = `
  <sui-select
      suiPlaceholder="Gender"
      [suiOptions]="genderOptions">
  </sui-select>`;

  snippetStandardTs = `
  genderOptions: ISelectOption[] = [ { text: 'Male', value: 0 }, { text: 'Female', value: 1 } ];`;

  snippetFluid = `
  <sui-select
      suiFluid
      suiPlaceholder="Gender"
      [suiOptions]="genderOptions">
  </sui-select>`;

  snippetMultiple = `
  <sui-select
      suiPlaceholder="State"
      [suiOptions]="states">
  </sui-select>`;

  snippetMultipleTs = `
  states: ISelectOption[] = [
    { text: 'Alabama', value: 'AL' }, { text: 'Arizona', value: 'AZ' },
    { text: 'California', value: 'CA' }, { text: 'District Of Columbia', value: 'DC' },
    { text: 'Idaho', value: 'ID' }, { text: 'Indiana', value: 'IN' },
    { text: 'Kansas', value: 'KS' }, { text: 'Louisiana', value: 'LA' },
    { text: 'Maryland', value: 'MD' }, { text: 'Utah', value: 'UT' },
  ];`;

  snippetMultipleSearch = `
  <sui-select
      suiPlaceholder="State"
      [suiOptions]="states">
  </sui-select>`;

  snippetFlags = `
  <sui-select
      suiPlaceholder="Select Country"
      [suiOptions]="countries">
  </sui-select>`;

  snippetFlagsTs = `
  countries: ISelectOption[] = [
    { text: 'Albania', value: 'al', flag: 'al' },
    { text: 'Angola', value: 'ao', flag: 'ao' },
    { text: 'Azerbaijan', value: 'az', flag: 'az' },
    { text: 'Botswana', value: 'bw', flag: 'bw' },
    { text: 'Nigeria', value: 'ng', flag: 'ng' },
  ];`;

  snippetImages = `
  <sui-select
      name="images"
      suiPlaceholder="Select User"
      [suiOptions]="persons">
  </sui-select>`;

  snippetImagesTs = `
  persons: ISelectOption[] = [
    { text: 'Elliot', value: null, image: { avatar: true, src: '/assets/images/elliot.jpg'} },
    { text: 'Helen', value: null, image: { avatar: true, src: '/assets/images/helen.jpg'} },
    { text: 'Jenny', value: null, image: { avatar: true, src: '/assets/images/jenny.jpg'} },
    { text: 'Joe', value: null, image: { avatar: true, src: '/assets/images/joe.jpg'} },
    { text: 'Justen', value: null, image: { avatar: true, src: '/assets/images/justen.jpg'} },
    { text: 'Laura', value: null, image: { avatar: true, src: '/assets/images/laura.jpg'} },
    { text: 'Matt', value: null, image: { avatar: true, src: '/assets/images/matt.jpg'} },
    { text: 'Stevie', value: null, image: { avatar: true, src: '/assets/images/stevie.jpg'} },
  ];`;

  constructor(title: Title) {
    title.setTitle('Select | Ngx Semantic');
  }
}
