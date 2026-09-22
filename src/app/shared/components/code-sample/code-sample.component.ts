import { Component, Input, TemplateRef } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'doc-code-sample',
    templateUrl: 'code-sample.component.html',
    styleUrl: 'code-sample.component.scss',
    standalone: false
})
export class CodeSampleComponent {
  @Input() content: TemplateRef<any>;
  @Input() templateCode: string;
  @Input() componentCode?: string;

  codeShown = false;

  constructor(private clipboard: Clipboard) {
  }

  copyCode(): void {
    const html = this.templateCode ?? '';
    const text = this.componentCode
      ? `${html.trim()}\n\n${this.componentCode.trim()}`
      : html;
    this.clipboard.copy(text);
  }

  toggleCodeDisplay(): void {
    this.codeShown = !this.codeShown;
  }

  formatCode(code?: string): string {
    return `  ${code?.trim()}`;
  }
}
