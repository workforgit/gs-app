import { CommonService } from './../services/common.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
 
  @Input()
  currentMenu : any ;
  
  constructor(private authService : AuthService,
              private router : Router,
              private commonService : CommonService){ }
  
  ngAfterViewInit(): void{
    console.log("**",this.commonService.getEtatSideBar())
   // setTimeout(() => {
      
    
    switch (this.commonService.getEtatSideBar()) {
      case "mini": 
        $("[id=sidebar]").removeClass("side-bar-opened");
        $('[id=sideBarIcon]').removeClass("icon-arrow-to-left");
        $("[id=sidebar]").addClass("side-bar-closed");
        $('[id=sideBarIcon]').addClass("icon-arrow-to-right");
        $('[id=viewport]').removeClass("opened");
        break;
      case "maxi":
        $("[id=sidebar]").removeClass("side-bar-closed");
        $('[id=sideBarIcon]').removeClass("icon-arrow-to-right");
        $("[id=sidebar]").addClass("side-bar-opened");
        $('[id=sideBarIcon]').addClass("icon-arrow-to-left");
        $('[id=viewport]').addClass("opened");
        break;
      default:
        break;
    }
 // }, 1000);
  }
  ngOnInit(): void {
    
    this.setActiveMenu();
    
  }
  
  isAuthenticated = this.authService.isAuthenticated();
  sideBarElements = [
    {title : "Client",icon : 'client',root : '/Client' , active : false},
    {title : "Fournisseur",icon : 'fournisseur',root : '/Fournisseur' , active : false},
    {title : "Produit",icon : 'produit',root : '/Produit' , active : false},
    {title : "Bon de livraison",icon : 'bon-livraison3',root : '/Bon de livraison' , active : false},
    {title : "Retour",icon : 'retour',root : '/Retour' , active : false},
    {title : "Devis",icon : 'devis',root : '/Devis' , active : false},
    {title : "Echeance des cheques",icon : 'cheque',root : '/Echeance des cheques' , active : false},
    {title : "Recette",icon : 'recette',root : '/Recette' , active : false},
    {title : "Parametrage",icon : 'param',root : '/Parametrage' , active : false},
  ];
  setActiveMenu(){
    for (let index = 0; index < this.sideBarElements.length; index++) {
      if(this.sideBarElements[index].title == this.currentMenu){
        this.sideBarElements[index].active = true;
      }
      
    }
  }
  goTo(root : string) : void{
    this.router.navigate([root])
  }
  sideBarClick(){
    if($("#sidebar").hasClass("side-bar-opened")){
      $("#sidebar").removeClass("side-bar-opened");
      $('#sideBarIcon').removeClass("icon-arrow-to-left");
      $("#sidebar").addClass("side-bar-closed");
      $('#sideBarIcon').addClass("icon-arrow-to-right");
      $('#viewport').removeClass("opened");
      this.commonService.setEtatSideBar("mini");
    }else{
      $("#sidebar").removeClass("side-bar-closed");
      $('#sideBarIcon').removeClass("icon-arrow-to-right");
      $("#sidebar").addClass("side-bar-opened");
      $('#sideBarIcon').addClass("icon-arrow-to-left");
      $('#viewport').addClass("opened");
      this.commonService.setEtatSideBar("maxi");
    }

  }
}
