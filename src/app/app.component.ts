import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  serverElements = [{type:'server',name:'Test Server',content:'Just a Test!!'}];

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onServerAdded(serverData : {serverName:string, serverContent:string, serverType:string}){
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent

    })

  }
}
