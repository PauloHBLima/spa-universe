import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaHomeComponent } from './components/spa-home/spa-home.component';
import { OUniversoComponent } from './components/o-universo/o-universo.component';
import { ExploracaoComponent } from './components/exploracao/exploracao.component';

const routes: Routes = [
  {path: 'home', component: SpaHomeComponent},
  {path: 'oUniverso', component: OUniversoComponent},
  {path: 'exploração', component: ExploracaoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
