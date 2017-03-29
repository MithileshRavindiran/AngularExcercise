/**
 * Created by x073880 on 12/1/2016.
 */
import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector:'[autogrow]',
    host:{
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class AutoGrowDirective {
    //_el:ElementRef;
    //_renderer:Renderer;
    constructor(private el : ElementRef, private renderer : Renderer) {

    }
      onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement,'width','200');
      }
      onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement,'width','120');
      }
}