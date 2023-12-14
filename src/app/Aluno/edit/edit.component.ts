import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Aluno } from 'src/app/Modelo/Aluno';
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  aluno :Aluno=new Aluno();
  constructor(private router:Router,private service:ServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    // @ts-ignore
    this.service.getAlunoId(+id)
      .subscribe(data=>{
        this.aluno=data;
      })

  }
  Actualizar(aluno:Aluno){
    this.service.updateAluno(aluno)
      .subscribe(data=>{
        this.aluno=data;
        this._snackBar.open('Aluno Editado', 'Fechar', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });

        this.router.navigate(["listar"]);

      }, err => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message)
        }
      })
  }

}
