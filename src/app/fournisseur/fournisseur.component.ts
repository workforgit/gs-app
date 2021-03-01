import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = "Fournisseur";
  navBarElements = [
    {title : "Fournisseurs",active : true},
    {title : "Bon de commandes",active : false},
  ];
  selectedNav = "Fournisseurs";
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
}
