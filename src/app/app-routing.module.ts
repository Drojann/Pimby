import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenarComponent } from './ordenar/ordenar.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
  { path: 'home', component: PaginainicialComponent},
  { path: 'ordenar', component: OrdenarComponent},
  { path: 'admin', component: AdministradorComponent},
  { path: 'navegacion', component: NavegacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
