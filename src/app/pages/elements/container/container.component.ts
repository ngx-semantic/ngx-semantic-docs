import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  snippetStd = `
  <div sui-container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
      quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
      vitae, justo. Nullam dictum felis eu pede
      <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
      tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
      enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
      Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
      nisi.
    </p>
  </div>`;
  snippetText = `
  <div sui-container
       suiText>
    <h2 sui-header>Header</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
      quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
      vitae, justo. Nullam dictum felis eu pede
      <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
      tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
      enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
      Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
      nisi.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
      quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
      vitae, justo. Nullam dictum felis eu pede
      <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
      tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
      enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
      Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
      nisi.
    </p>
  </div>`;
  snippetAligned = `
  <div sui-container
         suiAlignment="left aligned">
      Left Aligned
    </div>
    <div sui-container
         suiAlignment="center aligned">
      Center Aligned
    </div>
    <div sui-container
         suiAlignment="right aligned">
      Right Aligned
    </div>
    <div sui-divider></div>
    <div sui-container
         suiAlignment="justified">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo. Nullam dictum felis eu pede
        <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
        vitae, justo. Nullam dictum felis eu pede
        <a href="javascript:void 0">link</a> mollis pretium. Integer tincidunt.
        Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
    </div>`;
  snippetFluid = `
 <div sui-container
     suiFluid>
  <h2 sui-header>Dogs Roles with Humans</h2>
  <p>
    Domestic dogs inherited complex behaviors, such as bite inhibition, from
    their wolf ancestors, which would have been pack hunters with complex body
    language. These sophisticated forms of social cognition and communication
    may account for their trainability, playfulness, and ability to fit into
    human households and social situations, and these attributes have given
    dogs a relationship with humans that has enabled them to become one of the
    most successful species on the planet today.
  </p>
  <p>
    The dogs' value to early human hunter-gatherers led to them quickly
    becoming ubiquitous across world cultures. Dogs perform many roles for
    people, such as hunting, herding, pulling loads, protection, assisting
    police and military, companionship, and, more recently, aiding handicapped
    individuals. This impact on human society has given them the nickname
    "man's best friend" in the Western world. In some cultures, however, dogs
    are also a source of meat.
  </p>
</div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Container | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }
}
