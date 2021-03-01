import { CommonService } from './../../services/common.service';
import { Client } from './../../classes/client';
import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.scss']
})
export class ClientsDetailsComponent implements OnInit {

  constructor(private dataservice : DataService,
	          private commonService : CommonService) { }
  
  /* output */
  @Output() clientChanged: EventEmitter<Client> = new EventEmitter();

  private gridApi;
  private gridColumnApi; 
   clients : any[] = [];
  private selclient : Client = new Client() ;
  private maxCtcID : number;
  ngOnInit(): void {
		
	this.dataservice.getAllClients()
	.subscribe((data) => {
		this.clients = data;
	});

  }
  
  gridWith = "min-width: 750px; height: calc(100vh - 125px);";
 
  columnDefs = [
		{headerName: 'N°', field: 'CtcID',editable : false,sortable: false, filter: false,resizable: true,width : 55},
		{headerName: 'Nom', field: 'LastName',editable : true,sortable: true, filter: true,resizable: true,width : 150 },
		{headerName: 'Prenom', field: 'FirstName',editable : true,sortable: true, filter: true,resizable: true,width : 150 },
		{headerName: 'Email', field: 'Email',editable : true,sortable: true, filter: true,resizable: true,flex : 2},
		{headerName: 'Tel 1', field: 'MobilePhone',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Tel 2', field: 'MobilePhone2',editable : true,sortable: true, filter: true,resizable: true,flex : 1},
		{headerName: 'Adresse', field: 'Address',editable : true,sortable: true, filter: true,resizable: true,flex : 2},
		{headerName: 'code TVA', field: 'CodeTVA',editable : true,sortable: true, filter: true,resizable: true,flex : 1}
	];
	cellValueChanged(ev): void{
		
		this.selclient.CtcID = ev.data.CtcID
		this.selclient.Address = ev.data.Address
		this.selclient.CodeTVA = ev.data.CodeTVA
		this.selclient.Email = ev.data.Email		
		this.selclient.FirstName = ev.data.FirstName
		this.selclient.LastName = ev.data.LastName
		this.selclient.MobilePhone = ev.data.MobilePhone
		this.selclient.MobilePhone2 = ev.data.MobilePhone2
		this.dataservice.updateClient(this.selclient).subscribe((data) => {
			
		});
	}   
	deleteClient(){
		let selData = this.getSelectedRowData();
		if(selData && selData.length == 1)
			this.commonService.askmess('Confirmez vous la suppression?',selData[0].FirstName+" "+selData[0].LastName,function () {
				Swal.fire(
					'Removed!',
					'Client removed successfully.',
					'success'
				  )	
			},function () {
				Swal.fire(
					'not Removed!',
					'Client not removed.',
					'error'
				  )
			})
		/*Swal.fire({
			title: 'Confirmez vous la suppression?',
			text: selData[0].FirstName+" "+selData[0].LastName,
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'OK',
			cancelButtonText: 'Annuler',
			backdrop : true,
			allowOutsideClick : false,
			allowEscapeKey : false,
			width : "35rem",
			padding : "1.05rem"
		  }).then((result) => {
			if (result.value) {
			 
			 Swal.fire(
				'Removed!',
				'Product removed successfully.',
				'success'
			  )
			}
		  })*/
	}
	addNewClient() : void{
		this.dataservice.getAllClients()
		.subscribe((data) => {
			
			this.clients = data;
			this.maxCtcID = 1;
			data.forEach(clt => {
				if(this.maxCtcID < clt.CtcID) 
					this.maxCtcID = clt.CtcID
			});
			this.selclient = new Client();
			this.selclient.CtcID = this.maxCtcID+1;
			this.clients.push(this.selclient);
			this.dataservice.addClient(this.selclient)
			.subscribe((data2) => {
			})
			
		
		});
	}

 	onGridReady(params) {

		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		
	}
	onRowDataChanged(){
		if(this.gridApi){
			let selected = false;
			let firstNode;
			this.gridApi.forEachNode(node => {
				if(!firstNode) firstNode = node;
				if ( node.data.CtcID === this.selclient.CtcID ) {
					node.setSelected( true );
					this.gridApi.ensureNodeVisible(node, "bottom");
					this.gridApi.setFocusedCell(node.childIndex, "LastName", null);
					selected = true;
				}
			});
			if(!selected)
				if(firstNode)
					firstNode.setSelected( true );
			
			this.selclient = this.getSelectedRowData() ;
		}
		
	}	
 	getSelectedRowData() {
		let selectedNodes = this.gridApi.getSelectedNodes();
		let selectedData = selectedNodes.map(node => node.data);
		if(selectedData)
			return selectedData[0];
		else
			return null;
	} 
	rowClicked(){
		this.selclient = this.getSelectedRowData() ;
		this.clientChanged.emit(this.selclient);
	}
}
