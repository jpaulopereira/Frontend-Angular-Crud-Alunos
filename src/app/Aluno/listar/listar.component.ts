import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Aluno } from 'src/app/Modelo/Aluno';
import {MatSort} from "@angular/material/sort";
import {MatLegacyPaginator as MatPaginator} from "@angular/material/legacy-paginator";
import {MatLegacyTableDataSource as MatTableDataSource} from "@angular/material/legacy-table";
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  alunos: Aluno[] = [];
  dataSource = new MatTableDataSource(this.alunos);
  displayedColumns = ['name', 'matricula', 'cpf', 'telefone', 'email', 'endereco', 'dataNascimento', 'dataHoraCadastro', 'acao'];

  constructor(private service: ServiceService, private router: Router, private _snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource.data = this.alunos;
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.service.getAluno()
      .subscribe(data => {
        this.alunos = data;
        this.dataSource.data = this.alunos;
      });
  }

  Editar(aluno: Aluno):void{
    localStorage.setItem("id",aluno.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(aluno:Aluno){
    this.service.deleteAluno(aluno)
      .subscribe(data=>{
        this.alunos=this.alunos.filter(p=>p!==aluno);
        this.dataSource.data = this.alunos;
        this._snackBar.open('Aluno deletado', 'Fechar', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  visualizar(aluno: Aluno):void{
    localStorage.setItem("id",aluno.id.toString());
    this.router.navigate(["visualizar"]);
  }
}
