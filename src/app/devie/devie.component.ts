import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devie',
  templateUrl: './devie.component.html',
  styleUrls: ['./devie.component.css']
})
export class DevieComponent implements OnInit {

  constructor() { }
  total = 0;
  ngOnInit(): void {
  }
  menu = "Devis";
  gridWith = "width: 100%; height: calc(100vh - 125px);";
  columnDefs = [
		{headerName: 'Quantité', field: 'qte',editable : true,sortable: true, filter: true,resizable: true,width : 90 },
		{headerName: 'Désignation', field: 'des',editable : true,sortable: true, filter: true,resizable: true,width : 300 },
		{headerName: 'Prix Unitaire TTC', field: 'prix',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Montant TTC', field: 'montant',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
	];

  rowData = [];
}
