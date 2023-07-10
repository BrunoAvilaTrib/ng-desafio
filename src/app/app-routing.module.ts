import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainGuard } from './lib/guards/main.guard';
import { TipoCambioComponent } from './tipo-cambio/tipo-cambio.component';


const routes: Routes = [

  {path: '', redirectTo: 'login' , pathMatch: 'full'   },
  {
    path: 'cambio', component: TipoCambioComponent,
    canActivate: [MainGuard],
  },
  {path: 'login', component: LoginComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
