import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bon-de-livraison-fournisseur',
  templateUrl: './bon-de-livraison-fournisseur.component.html',
  styleUrls: ['./bon-de-livraison-fournisseur.component.css']
})
export class BonDeLivraisonFournisseurComponent implements OnInit {
  total = 0;
  
  constructor() { }

  ngOnInit(): void {
  
  }
 
  menu = "Bon de livraison Fournisseur";
  gridWith = "width: 100%; height: 100%";
  columnDefs = [
		{headerName: 'Quantité', field: 'qte',editable : true,sortable: true, filter: true,resizable: true,width : 90 },
		{headerName: 'Désignation', field: 'des',editable : true,sortable: true, filter: true,resizable: true,width : 300 },
		{headerName: 'Prix TTC', field: 'prix',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Remise', field: 'remise',editable : true,sortable: true, filter: true,resizable: true,width : 80},
		{headerName: 'Montant TTC', field: 'montant',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
	];

  rowData = [];
}
