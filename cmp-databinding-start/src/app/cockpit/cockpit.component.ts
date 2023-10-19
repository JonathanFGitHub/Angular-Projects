import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>()
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInputs', {static: true}) serverContentInput: ElementRef;

  //Jon's variable for playing around
  isDisplayed = false;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  //Added this in to practice my toggling
  toggleDisplay(){
    this.isDisplayed = !this.isDisplayed;
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput.value);
      this.serverCreated.emit({serverName: serverNameInput.value, //I changed this line of code to use the local reference value instead
      serverContent: this.serverContentInput.nativeElement.value //This is using the view child local reference
    });

    //Use the below code if you do not want to use the local reference value being passed in. Comment above code in method if useing this
    // this.serverCreated.emit({serverName: this.newServerName, 
    //   serverContent: this.newServerContent
    // });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value //This is using the view child
    });

    //Use the below code if you do not want to use the local reference value being passed in. Comment above code in method if using this
    // this.blueprintCreated.emit({serverName: this.newServerName, 
    //   serverContent: this.newServerContent
    // });
   }

}
