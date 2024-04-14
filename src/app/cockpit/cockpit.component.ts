import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string, serverType: string}>();
 // newServerName = '';
  newServerContent = '';
  newServerType = '';

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(nameInput.value);
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent: this.newServerContent,
      serverType: this.newServerType
    });
   
  }
}
