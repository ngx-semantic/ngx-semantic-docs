import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'doc-accordion',
  templateUrl: './accordion.page.html'
})
export class AccordionPage {
  snippetStandard = `
  <sui-accordion>
    <sui-accordion-panel
      suiTitle="What is a dog?">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </sui-accordion-panel>
  </sui-accordion>`;

  snippetStyled = `
  <sui-accordion suiStyled>
    <sui-accordion-panel
      suiTitle="What is a dog?">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
      suiTitle="What kinds of dogs are there?">
      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
      suiTitle="How do you acquire a dog?">
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </sui-accordion-panel>
  </sui-accordion>`;

  snippetStyledFluid = `
  <sui-accordion suiStyled suiFluid>
    <sui-accordion-panel
        suiTitle="What is a dog?">
      <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
        welcome guest in many households across the world.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
        suiTitle="What kinds of dogs are there?">
      <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
        dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
    </sui-accordion-panel>
    <sui-accordion-panel
        suiTitle="How do you acquire a dog?">
      <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
        shelters.</p>
      <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
        assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
        from a shelter, helps give a good home to a dog who may not find one so readily.</p>
    </sui-accordion-panel>
  </sui-accordion>`;

  snippetInverted = `
  <div sui-segment suiInverted>
    <sui-accordion suiInverted>
      <sui-accordion-panel
          suiTitle="What is a dog?">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
          welcome guest in many households across the world.</p>
      </sui-accordion-panel>
      <sui-accordion-panel
          suiTitle="What kinds of dogs are there?">
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed
          of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
      </sui-accordion-panel>
      <sui-accordion-panel
          suiTitle="How do you acquire a dog?">
        <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
          shelters.</p>
        <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
          assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog
          from a shelter, helps give a good home to a dog who may not find one so readily.</p>
      </sui-accordion-panel>
    </sui-accordion>
  </div>`;

  constructor(title: Title) {
    title.setTitle('Accordion | Ngx Semantic');
  }
}
