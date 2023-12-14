import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro de alunos';


  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Novo(){
    this.router.navigate(["add"]);
  }

  PgInicial(){
    this.router.navigate(["home"]);
  }

  TotalAlunos(){
    this.router.navigate(["TotalAlunos"])
  }
}

