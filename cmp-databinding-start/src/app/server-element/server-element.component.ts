import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, OnDestroy, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //This prevents style interference between components
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit  {
  //@ Input exposes the property 'element' so that any parent component hosting this can access it in it's html
  // @Input() element: {type: string, name: string, content: string};
  //If you want to assign an alias to the input - property, do the following: 
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() { 
    console.log('contructor call'); 
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit call');
    console.log("Text content: " + this.header.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Called!')
  }

  ngAfterViewInit(){
    console.log("Text content for AfterViewInit: " + this.header.nativeElement.textContent)
  }

  ngAfterContentInit(){
    console.log('Text Content: ' + this.paragraph.nativeElement.textContent)
  }

}
