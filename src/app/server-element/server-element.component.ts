import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit{
//component custon - property event binding
 @Input() element :{type:String,name:String,content:String}
 //@Input('srvElement') element :{type:String,name:String,content:String}

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
