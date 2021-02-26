import {AfterViewChecked, Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HighlightService} from "../../../shared/services/highlight.service";

@Component({
  selector: 'doc-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements AfterViewChecked {
  isDefinitionsActive = true;
  isApiActive: boolean;

  dimmerVisible = true;

  snippetStdLoader = ' <div sui-loader suiSize="medium" suiText="false"></div>';

  snippetTextLoader = ' <div sui-loader suiSize="medium" suiText>Loading</div>';

  snippetSizedLoaders = `
  <div sui-loader suiSize="mini" suiText>Loading</div>
  <div sui-loader suiSize="tiny" suiText>Loading</div>
  <div sui-loader suiSize="small" suiText>Loading</div>
  <div sui-loader suiSize="medium" suiText>Loading</div>
  <div sui-loader suiSize="large" suiText>Loading</div>
  <div sui-loader suiSize="big" suiText>Loading</div>
  <div sui-loader suiSize="huge" suiText>Loading</div>`;

  constructor(title: Title, private highlighter: HighlightService) {
    title.setTitle('Loaders | Ngx Semantic');
  }

  ngAfterViewChecked() {
    this.highlighter.highlightAll();
  }

  tabChanged(payload: string): void {
    if (payload === 'api') {
      this.isApiActive = true;
      this.isDefinitionsActive = false;
    }

    if (payload === 'definitions') {
      this.isApiActive = false;
      this.isDefinitionsActive = true;
    }
  }
}
