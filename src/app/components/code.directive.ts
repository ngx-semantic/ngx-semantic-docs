/**
 * Created by bolorundurowb on 1/6/2021
 */

import {Directive} from "@angular/core";

@Directive({
  selector: '[docCode]',
  exportAs: 'docCode'
})
export class CodeDirective {
}
