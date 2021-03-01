import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lst-fournisseurs',
  templateUrl: './lst-fournisseurs.component.html',
  styleUrls: ['./lst-fournisseurs.component.scss']
})
export class LstFournisseursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gridWith = "min-width: 750px; height: calc(100vh - 125px);";
  columnDefs = [
		{headerName: 'Nom du societe', field: 'societe',editable : true,sortable: true, filter: true,resizable: true,width : 150 },
		{headerName: 'Email', field: 'email',editable : true,sortable: true, filter: true,resizable: true,flex : 2},
		{headerName: 'Telephone 1', field: 'tel1',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Telephone 2', field: 'tel2',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Adresse', field: 'adresse',editable : true,sortable: true, filter: true,resizable: true,flex : 3},
    {headerName: 'Ville', field: 'ville',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
    {headerName: 'Code TVA', field: 'tva',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
	];

	rowData = [];
}
