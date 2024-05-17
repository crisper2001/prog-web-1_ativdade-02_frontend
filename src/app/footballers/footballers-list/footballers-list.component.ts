import {Component, OnInit} from '@angular/core';
import {Footballer} from "../shared/footballer";
import {FootballerService} from "../shared/footballer.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FootballersListItemComponent} from "../footballers-list-item/footballers-list-item.component";

@Component({
  selector: 'app-footballers-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgClass,
    FootballersListItemComponent,
    NgIf
  ],
  templateUrl: './footballers-list.component.html',
  styleUrl: './footballers-list.component.scss'
})
export class FootballersListComponent implements OnInit {
  footballers: Footballer[] = [];

  constructor(
    public footballerService: FootballerService,
    route: ActivatedRoute,
  ) {
    this.footballers = route.snapshot.data['footballersData'];
  }

  ngOnInit(): void {
  }

  reload() {
    this.footballers = [];
    this.footballerService.getAll().subscribe(value => {
      this.footballers = value;
    });
  }

  refresh(footballer: Footballer) {
    const footballerIndex = this.footballers.findIndex((value) => value.id == footballer.id);
    this.footballers.splice(footballerIndex, 1);
  }
}
