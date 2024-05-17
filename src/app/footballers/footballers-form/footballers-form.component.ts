import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Footballer} from "../shared/footballer";
import {FootballerService} from "../shared/footballer.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-footballers-form',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './footballers-form.component.html',
  styleUrl: './footballers-form.component.scss'
})
export class FootballersFormComponent implements OnInit {
  footballer: Footballer = new Footballer();

  constructor(
    private activateRouted: ActivatedRoute,
    private router: Router,
    private footballerService: FootballerService
  ) { }

  ngOnInit(): void {
    const id = this.activateRouted.snapshot.paramMap.get('id');
    if (id) {
      this.footballerService.getById(parseInt(id)).subscribe(value => {
        const footballerAux = value;
        console.log("INIT FORM:" + JSON.stringify(footballerAux));
        if (footballerAux) {
          this.footballer = footballerAux;
        }
      }, error => {
        console.log("Erro:", JSON.stringify(error));
        alert(`Erro ao buscar o dados:${error.error}`);
      })

    }
  }

  onSubmit(){
    this.footballerService.save(this.footballer)
      .subscribe(value => {
        console.log("Salvo:", JSON.stringify(value));
        this.router.navigate(['']);
      }, error => {
        console.log("Erro" + JSON.stringify(error));
        alert('Erro ao salvar:');
      });

  }



}
