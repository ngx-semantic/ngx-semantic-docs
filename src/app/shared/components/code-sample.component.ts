import { Component, Input, TemplateRef } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'doc-code-sample',
  template: `
    <div class="example">
      <div class="toggle-row">
        <span sui-popup
              suiPopupInverted
              suiPopupContent="Show Source">
          <i sui-icon
             suiLink
             suiFitted
             suiIconType="code"
             (click)="toggleCodeDisplay()"></i>
        </span>
      </div>

      <ng-content></ng-content>

      <ng-container *ngIf="!codeShown">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </ng-container>

      <div *ngIf="codeShown" sui-segment
           suiAttached="top attached"
           style="padding-top: 3rem;">
        <ng-container *ngTemplateOutlet="content"></ng-container>
        <div sui-label
             suiAttached="top">
          Example
          <i class="copy-code"
             sui-icon
             suiLink
             suiIconType="copy"
             sui-popup
             suiPopupInverted
             suiPopupContent="Copy Code"
             (click)="copyCode()"></i>
        </div>
      </div>
      <div class="code-container"
           [class.hidden]="!codeShown"
           [class.visible]="codeShown">
        <div sui-segment
             suiAttached="bottom attached">
        <pre>
          <code lineNumbers
                language="html"
                [highlight]="templateCode">
          </code>
        </pre>
        </div>
        <ng-container *ngIf="componentCode">
          <div sui-segment
               suiAttached="bottom attached">
        <pre>
          <code lineNumbers
                language="ts"
                [highlight]="componentCode">
          </code>
        </pre>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [ `
      .example {
          margin-bottom: 2rem;
          margin-top: 2rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
      }

      .toggle-row {
          display: flex;
          flex-direction: row-reverse;
          margin-bottom: -3.5rem;
      }

      .copy-code {
          float: right;
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
  ` ]
})
export class CodeSampleComponent {
  @Input() content: TemplateRef<any>;
  @Input() templateCode: string;
  @Input() componentCode?: string;

  codeShown = false;

  constructor(private clipService: ClipboardService) {
  }

  copyCode(): void {
    this.clipService.copy(this.templateCode);
  }

  toggleCodeDisplay(): void {
    this.codeShown = !this.codeShown;
  }
}
