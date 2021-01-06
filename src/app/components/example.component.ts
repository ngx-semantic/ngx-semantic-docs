/**
 * Created by bolorundurowb on 1/6/2021
 */

import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import {ClipboardService} from "ngx-clipboard";
import {CodeDirective} from "./code.directive";

@Component({
  selector: 'doc-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="example">
      <div class="toggle-row">
        <span data-tooltip="Toggle Code">
          <i sui-icon
             suiIconType="code"
             class="show-code"
             (click)="toggleCodeDisplay()"></i>
        </span>
      </div>

      <ng-content></ng-content>

      <ng-container *ngIf="!codeShown">
        <ng-container *ngTemplateOutlet="codeContent"></ng-container>
      </ng-container>

      <div *ngIf="codeShown" sui-segment
           suiAttached="top attached"
           style="padding-top: 3rem;">
        <ng-container *ngTemplateOutlet="codeContent"></ng-container>
        <div sui-label
             suiAttached="top">
          Example
          <i sui-icon
             suiIconType="copy"
             title="Copy Code"
             style="cursor: pointer; float: right;"
             (click)="copyCode()"></i>
        </div>
      </div>
      <div class="code-container"
           [class.hidden]="!codeShown"
           [class.visible]="codeShown">
        <div sui-segment
             suiAttached="bottom attached">
        <pre style="background-color: white;">
          <code class="language-markup">
            {{code}}
          </code>
        </pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .example {
      margin-bottom: 1.5rem;
      margin-top: 1.0rem;
    }

    .toggle-row {
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 0.8rem;
    }

    .show-code {
      cursor: pointer;
      color: gray;
      font-size: 1.1rem;
    }

    .show-code:hover {
      color: rgba(0, 0, 0, .6);
    }

    .code-container {
      margin-top: -1px;
    }

    .code-container.hidden {
      display: none;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    .code-container.visible {
      display: block;
      visibility: visible;
      opacity: 1;
      transition: opacity 0.6s ease-in-out;
    }
  `]
})
export class ExampleComponent implements AfterContentInit {
  @ContentChild(CodeDirective, {static: true, read: TemplateRef}) public codeContent: TemplateRef<any>;

  code: string = '';
  codeShown = false;

  constructor(private clipService: ClipboardService, private viewRef: ViewContainerRef,
              private changeDetector: ChangeDetectorRef) {
  }

  ngAfterContentInit() {
    if (this.codeContent) {
      const view = this.viewRef.createEmbeddedView(this.codeContent)
      console.log(view.rootNodes);
      this.code = view.rootNodes[0]?.outerHTML;
      this.changeDetector.markForCheck();
    }
  }

  copyCode(): void {
    this.clipService.copy(this.code);
  }

  toggleCodeDisplay(): void {
    this.codeShown = !this.codeShown;
  }
}
