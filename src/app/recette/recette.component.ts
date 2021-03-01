import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  today = new Date();
  menu = "Recette";
  gridWith = "min-width: 750px; height: calc(100vh - 175px);";
  columnDefs = [
		{headerName: 'Bon de livraison N°', field: 'numeroBdL',editable : true,sortable: true, filter: true,resizable: true,flex : 1 },
		{headerName: 'Facture N°', field: 'numeroF',editable : true,sortable: true, filter: true,resizable: true,flex : 1 },
		{headerName: 'Methode de paiement', field: 'MdP',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Type', field: 'type',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Date', field: 'date',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Montant espèce', field: 'Mespèce',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Montant cheque', field: 'Mcheque',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Reste', field: 'reste',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Montant', field: 'montant',editable : true,sortable: true, filter: true,resizable: true,flex : 1}
	];

	rowData = [];
}
