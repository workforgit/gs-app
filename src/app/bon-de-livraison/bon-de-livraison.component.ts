import { PrintService } from './../services/print.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bon-de-livraison',
  templateUrl: './bon-de-livraison.component.html',
  styleUrls: ['./bon-de-livraison.component.scss']
})
export class BonDeLivraisonComponent implements OnInit {
  methPaiement : string;
  constructor(private printService : PrintService) { }

  ngOnInit(): void {
   this.methPaiement = "M";
  }
  menu = "Bon de livraison";
  navBarElements = [
  ];
  selectedNav = "";
  
  onSelectNav(nav: string) {
	  this.selectedNav = nav;
  }
  gridWith = "width: 100%; height: 100%";
  columnDefs = [
		{headerName: 'Quantité', field: 'qte',editable : true,sortable: true, filter: true,resizable: true,width : 90 },
		{headerName: 'Désignation', field: 'des',editable : true,sortable: true, filter: true,resizable: true,width : 300 },
		{headerName: 'Prix TTC', field: 'prix',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Remise', field: 'remise',editable : true,sortable: true, filter: true,resizable: true,width : 80},
		{headerName: 'Montant TTC', field: 'montant',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
	];
  rowData = [];
  imprimFacture(){
    this.printService.printDocument("facture",['1']);
  }
}
