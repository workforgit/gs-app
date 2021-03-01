import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input()
  navBarElements : any ;
  @Output() 
  selectedNav = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  selectNav(nav: string) {
    this.selectedNav.emit(nav);
  }
  /*navBarElements = [
    {title : "Client",root : '',active : true},
    {title : "Bon de livraison",root : 'Client/Bon de livraison',active : false},
  ]*/
}
