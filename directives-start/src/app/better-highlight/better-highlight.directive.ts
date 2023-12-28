import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.backgroundColor = this.defaultColor; //Once oninit hits it will take the yellow default color
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    console.log("jonathan");
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor; //This is using the HostBinding above and is seperate from line above
    
  }

  //Another example: @HostListener('window: resize') mouseleave(eventData: Event)
  //You can look up dom events to use with hostlistner online. DOM events for web. 
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    console.log("jonathan2");
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor; //This is using the HostBinding above and is seperate from line above
  }



}
