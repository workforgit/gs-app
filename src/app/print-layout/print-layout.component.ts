import { Config } from './../config';
import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  typeDoc = "facture";
  ngOnInit(): void {
  }

}
