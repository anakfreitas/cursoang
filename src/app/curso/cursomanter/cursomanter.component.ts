import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Curso } from '../servico/curso';
import { CursoService } from '../servico/curso.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cursomanter',
  templateUrl: './cursomanter.component.html',
  styleUrls: ['./cursomanter.component.css']
})
export class CursomanterComponent implements OnInit {

  curso: Curso = new Curso();


  constructor(
    private cursoService: CursoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  incluir(){
    this.cursoService.incluir(this.curso).subscribe(
      retorno => {
        alert(retorno['mensagem']);
        this.router.navigate(['/curso']);
      }
    )
  }  

  voltar(){
    this.router.navigate(['/curso']);
  }
}
