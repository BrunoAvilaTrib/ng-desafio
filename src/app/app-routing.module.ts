import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCambiooComponent } from './tipo-cambioo/tipo-cambioo.component';


const routes: Routes = [

  {path: '', redirectTo: 'cambio' , pathMatch: 'full'   },
  {path: 'cambio', component: TipoCambiooComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
