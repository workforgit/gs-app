import { Client } from './../classes/client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  client : Client;
  menu = "Client";
  navBarElements = [
    {title : "Client",active : true},
    {title : "Bon de livraison",active : false},
  ];
  selectedNav = "Client";
  onSelectNav(nav: string) {
	this.selectedNav = nav;
	for (let index = 0; index < this.navBarElements.length; index++) {
		let elm = this.navBarElements[index];
		if(elm.title == nav){
			this.navBarElements[index].active = true;
		}else{
			this.navBarElements[index].active = false;
		}
	}
  }

  clientChangedHandler(clt: Client) {
    console.log("clientChangedHandler",clt);
    this.client = clt;
  }
}
