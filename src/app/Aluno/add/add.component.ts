import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/Service/service.service';
import {Aluno} from 'src/app/Modelo/Aluno';
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(private router: Router, private service: ServiceService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  SalvarAluno() {
    this.service.createAluno(this.aluno)
      .subscribe(data => {
        this._snackBar.open('Aluno Cadastrado', 'Fechar', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        })

        this.router.navigate(["listar"]);
      }, err => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message)
        }
    })
  }
}
