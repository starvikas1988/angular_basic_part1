import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string, serverType: string}>();
  newServerName = '';
  newServerContent = '';
  newServerType = '';

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName : this.newServerName,
      serverContent: this.newServerContent,
      serverType: this.newServerType
    });
   
  }
}
