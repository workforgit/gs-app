import { FactureLayoutComponent } from './print-layout/facture-layout/facture-layout.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { BonDeLivraisonFournisseurComponent } from './bon-de-livraison-fournisseur/bon-de-livraison-fournisseur.component';
import { RecetteComponent } from './recette/recette.component';
import { EcheanceDesChequesComponent } from './echeance-des-cheques/echeance-des-cheques.component';
import { DevieComponent } from './devie/devie.component';
import { RetourComponent } from './retour/retour.component';
import { BonDeLivraisonComponent } from './bon-de-livraison/bon-de-livraison.component';
import { ProduitComponent } from './produit/produit.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'Client',
    component : ClientComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Fournisseur',
    component : FournisseurComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Produit',
    component : ProduitComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Bon de livraison',
    component : BonDeLivraisonComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Retour',
    component : RetourComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Devis',
    component : DevieComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Echeance des cheques',
    component : EcheanceDesChequesComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Recette',
    component : RecetteComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Bon de livraison Fournisseur',
    component : BonDeLivraisonFournisseurComponent,
    canActivate : [AuthGuard]
  },{
    path: 'Parametrage',
    component : ParametrageComponent,
    canActivate : [AuthGuard]
  },{ 
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'facture/:factureIds', component: FactureLayoutComponent }
    ]
  },{
    path: '**', 
    component: AuthComponent
  },{
    path: '', 
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
