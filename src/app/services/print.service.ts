import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private router: Router) { }
  
  isPrinting = false;

  printDocument(documentName: string, documentData: string[]) {
    this.isPrinting = true;
    $("#viewport").addClass("isPrinting");
    $("#docFooterId").addClass("isPrinting");
    this.router.navigate(['/',
      { outlets: {
        'print': ['print', documentName, documentData.join()]
      }}]);
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      $("#viewport").removeClass("isPrinting");
      $("#docFooterId").removeClass("isPrinting");
      this.router.navigate([{ outlets: { print: null }}]);
    });
  }
}
