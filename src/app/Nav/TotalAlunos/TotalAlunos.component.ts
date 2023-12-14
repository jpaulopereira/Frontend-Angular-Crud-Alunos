import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";


class Alunos {
}

@Component({
  selector: 'app-TotalAlunos',
  templateUrl: './TotalAlunos.component.html',
  styleUrls: ['./TotalAlunos.component.css']
})
export class TotalAlunos implements OnInit {

    alunos: Alunos[]

  constructor( private service: ServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.totalAlunos().subscribe(alunos =>{
     this.alunos = alunos;

    })
   }

}
