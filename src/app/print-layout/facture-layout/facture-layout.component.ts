import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-facture-layout',
  templateUrl: './facture-layout.component.html',
  styleUrls: ['./facture-layout.component.css']
})
export class FactureLayoutComponent implements OnInit {

  invoiceIds: string[];
  invoiceDetails: Promise<any>[];

  constructor(private route: ActivatedRoute,
              private printService: PrintService) { 
    this.invoiceIds = route.snapshot.params['factureIds'].split(',');
  }

  ngOnInit(): void {
    this.invoiceDetails = this.invoiceIds
      .map(id => this.getInvoiceDetails(id));
    Promise.all(this.invoiceDetails)
      .then(() => this.printService.onDataReady());
  }

  getInvoiceDetails(invoiceId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({amount}), 1000)
    );
  }

}
