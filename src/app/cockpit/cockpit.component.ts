import { Component, OnInit ,EventEmitter,Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string, serverType: string}>();
 // newServerName = '';
  //newServerContent = '';

  //getting access to the template and DOM with @ViewChild
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  newServerType = '';

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onAddServer(nameInput) {
    //console.log(nameInput.value);
    //console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      serverType: this.newServerType
    });
   
  }
}
