import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-ajout-modif-produit',
  templateUrl: './ajout-modif-produit.component.html',
  styleUrls: ['./ajout-modif-produit.component.css']
})
export class AjoutModifProduitComponent implements OnInit {
  title : string;
  type : string;
  prodObj : any;
  nomProd : string;
  constructor(
    
    private diagRef : MatDialogRef<AjoutModifProduitComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
this.title = data.title;
this.type = data.type;
if(data.prodObj){
  this.prodObj = data.prodObj;
}else{
  this.prodObj = {
    "nomProd" : "",
    "refProd" : "",
    "unite" : "",
    "qte" : 0,
    "grp" : "",
    "prixUnitaire" : 0,
    "prixAchat" : 0,
    "inv" : false
  }
}
  }

  ngOnInit(): void {
    
  }
  save() {
    this.diagRef.close(this.prodObj);
  }

  close() {
    this.diagRef.close();
  }

}
