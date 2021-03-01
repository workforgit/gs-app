import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echeance-des-cheques',
  templateUrl: './echeance-des-cheques.component.html',
  styleUrls: ['./echeance-des-cheques.component.css']
})
export class EcheanceDesChequesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = "Echeance des cheques";
  today = new Date();
  total = 0;
  gridWith = "width: 100%; height: calc(100vh - 125px);";
  columnDefs = [
		{headerName: 'Cheque Number', field: 'chequeNumber',editable : true,sortable: true, filter: true,resizable: true,width : 160 },
		{headerName: 'Banque', field: 'banque',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Agence', field: 'agence',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Date', field: 'date',editable : true,sortable: true, filter: true,resizable: true,width : 140},
		{headerName: 'Amount', field: 'amount',editable : true,sortable: true, filter: true,resizable: true,width : 140},
	];

	rowData = [];
}
