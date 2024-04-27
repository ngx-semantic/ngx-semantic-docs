import { Component, Input, TemplateRef } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'doc-code-sample',
  templateUrl: 'code-sample.component.html',
  styleUrl: 'code-sample.component.scss',
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

  formatCode(code?: string): string {
    return `  ${code?.trim()}`;
  }
}
