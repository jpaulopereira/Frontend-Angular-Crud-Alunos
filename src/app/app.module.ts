import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListarComponent} from './Aluno/listar/listar.component';
import {AddComponent} from './Aluno/add/add.component';
import {EditComponent} from './Aluno/edit/edit.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import {TopoComponent} from './Nav/topo/topo.component';
import {FooterComponent} from './Nav/footer/footer.component';
import {HomeComponent} from './Nav/home/home.component';
import {TotalAlunos} from './Nav/TotalAlunos/TotalAlunos.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatLegacyTableModule as MatTableModule} from "@angular/material/legacy-table";
import {MatLegacyPaginatorModule as MatPaginatorModule} from "@angular/material/legacy-paginator";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {SidebarComponent} from './Nav/sidebar/sidebar.component';
import { VisualizarComponent } from './Aluno/visualizar/visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    TopoComponent,
    FooterComponent,
    TotalAlunos,
    SidebarComponent,
    VisualizarComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatListModule,
    ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
