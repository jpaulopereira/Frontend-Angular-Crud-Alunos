import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../../Service/service.service";
import {Aluno} from "../../Modelo/Aluno";

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {


  constructor(private router: Router, private service: ServiceService) {
  }

  aluno: Aluno = new Aluno();

  ngOnInit(): void {
    this.visualizar();

  }


  visualizar() {
    let id = localStorage.getItem("id");
    // @ts-ignore
    this.service.getAlunoId(+id)
      .subscribe(data => {
        this.aluno = data;
      })
  }


  voltar() {
    this.router.navigate(["listar"]);
  }


}
