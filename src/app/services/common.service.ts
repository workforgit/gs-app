import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  sideBar = "maxi";	
  askmess(question:string,detail:string,okfn:any,nofn:any): void{
    
    Swal.fire({
			title: question,
			text: detail,
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
       if(okfn)
        okfn.call();
			}else{
       if(nofn)
        nofn.call();
      }
		  })
  }

animateLoading(id : string) :void{
if(id.indexOf("#") > -1){
	id.replace("#","");
}
var loaderDiv = '<div class="loader-div">';
loaderDiv += '<div class="lds-roller">';
loaderDiv += 	'<div></div>';
loaderDiv += 	'<div></div>';
loaderDiv += 	'<div></div>';
loaderDiv += 	'<div></div>';
loaderDiv += 	'<div></div>';
loaderDiv += 	'<div></div>';
loaderDiv += 	'<div></div>';
loaderDiv += 	'<div></div>';
loaderDiv += '</div>';
loaderDiv += '</div>';

$("#"+id).append(loaderDiv);
}
stopAnimateLoading(id : string) :void{
	if(id.indexOf("#") > -1){
		id.replace("#","");
	}
	$("#"+id+" .loader-div").remove()
}

getEtatSideBar(){
	return this.sideBar;
}
setEtatSideBar(sideBar : string){
	this.sideBar = sideBar;
}
}
