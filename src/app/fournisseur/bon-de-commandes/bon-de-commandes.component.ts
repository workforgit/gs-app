import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bon-de-commandes',
  templateUrl: './bon-de-commandes.component.html',
  styleUrls: ['./bon-de-commandes.component.scss']
})
export class BonDeCommandesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  today = new Date();
  total = 0;
  gridWith = "width: 100%; height: calc(100vh - 125px);";
  columnDefs = [
		{headerName: 'Bon de livraison N°', field: 'bdl',editable : true,sortable: true, filter: true,resizable: true,flex : 1 },
		{headerName: 'Date', field: 'date',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Montant', field: 'montant',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
	];

	rowData = [];
}
