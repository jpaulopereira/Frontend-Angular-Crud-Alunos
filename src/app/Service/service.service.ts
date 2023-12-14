import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aluno} from '../Modelo/Aluno';
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";


@Injectable(

)
export class ServiceService {

  constructor(private http: HttpClient, _snackBar: MatSnackBar) {
  }

  Url = 'http://localhost:8080/api/aluno';

  getAluno() {
    return this.http.get<Aluno[]>(this.Url + '/listar');
  }

  createAluno(aluno: Aluno) {
    return this.http.post<Aluno>(this.Url + '/incluir', aluno);
  }

  getAlunoId(id: number) {
    return this.http.get<Aluno>(this.Url + `/get/${id}`);
  }

  updateAluno(aluno: Aluno) {
    return this.http.put<Aluno>(this.Url + "/editar", aluno);

  }

  deleteAluno(aluno: Aluno) {
    return this.http.delete(`${this.Url}/apagar/${aluno.id}`);
  }

  mensagem(str: String): void {
    alert(str)
  }

  totalAlunos() {
    return this.http.get<Aluno[]>(this.Url + '/getTotal');
  }

}
