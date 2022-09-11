import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicLoadComponent]'
})
export class DynamicLoadComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
