import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListarComponent} from './Aluno/listar/listar.component';
import {AddComponent} from './Aluno/add/add.component';
import {EditComponent} from './Aluno/edit/edit.component';
import {HomeComponent} from './Nav/home/home.component';
import {TotalAlunos} from './Nav/TotalAlunos/TotalAlunos.component';
import {VisualizarComponent} from "./Aluno/visualizar/visualizar.component";

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: 'home', component: HomeComponent},
  {path: 'TotalAlunos', component: TotalAlunos},
  {path: 'visualizar', component: VisualizarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
