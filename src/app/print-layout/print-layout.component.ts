import { Config } from './../config';
import { Component, OnInit } from '@angular/core';
import { PrintService } from '../services/print.service';

@Component({
  selector: 'app-print-layout',
  templateUrl: './print-layout.component.html',
  styleUrls: ['./print-layout.component.css']
})
export class PrintLayoutComponent implements OnInit {
  logoUrl = Config.logoUrl;
  address = Config.adressEntreprise;
  desc = Config.descEntreprise;
  name = Config.nomEntreprise;
  tel = Config.telEntreprise;
  email = Config.emailEntreprise;
  typeDoc = "facture";
  constructor(private printService: PrintService) {
    this.typeDoc = this.printService.typeDoc;
    if(this.typeDoc == "bondelivraison") this.typeDoc = "bon de livraison";
  }  
  ngOnInit(): void {
  }

}
