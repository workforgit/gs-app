import { AjoutModifProduitComponent } from './ajout-modif-produit/ajout-modif-produit.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(
	  
	private dialog : MatDialog ) { }

  ngOnInit(): void {
  }
  navBarElements = [
    {title : "Produit",active : true}
  ];
  menu = "Produit";
  selectedNav = "Produit";
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
  gridWith = "min-width: 750px; height: calc(100vh - 235px);";
  columnDefs = [
		{headerName: 'Nom du produit', field: 'nomProd',editable : true,sortable: true, filter: true,resizable: true,flex : 3 },
		{headerName: 'Unite', field: 'unite',editable : true,sortable: true, filter: true,resizable: true,flex : 1 },
		{headerName: 'Quantite', field: 'qte',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Groupe', field: 'grp',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Prix unitaire', field: 'prixUnitaire',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Total vente', field: 'totVente',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: "Prix d'achat", field: 'prixAchat',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Total achat', field: 'totAchat',editable : true,sortable: true, filter: true,resizable: true,flex : 1}
	];

	rowData = [];
	addProductDialog(){
		const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
		dialogConfig.height = "auto";
		dialogConfig.minWidth = 1000;
		dialogConfig.data = {
			type: "add",
			title: "Ajouter un produit"
		};
		let dialogRef = this.dialog.open(AjoutModifProduitComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(
			data => console.log("Dialog output:", data)
		); 
	}
	modifProductDialog(){
		const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
		dialogConfig.height = "auto";
		dialogConfig.minWidth = 1000;
		dialogConfig.data = {
			type: "add",
			title: "Ajouter un produit",
			prodObj : {
				nomProd : "produit 1",
				unite : "",
				qte : "10",
				grp : "",
				prixUnitaire : "11",
				totVente : "12",
				prixAchat : "13",
				totAchat : "14",
			}
		};
		let dialogRef = this.dialog.open(AjoutModifProduitComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(
			data => console.log("Dialog output:", data)
		); 
	}
}
