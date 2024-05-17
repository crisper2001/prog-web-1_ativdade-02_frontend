import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Footballer} from "../shared/footballer";
import {FootballerService} from "../shared/footballer.service";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-footballers-list-item',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    FormsModule
  ],
  templateUrl: './footballers-list-item.component.html',
  styleUrl: './footballers-list-item.component.scss'
})
export class FootballersListItemComponent {
  @Input()
  footballer!: Footballer;

  @Output()
  itemChange: EventEmitter<Footballer> = new EventEmitter<Footballer>();

  constructor(public footballerService: FootballerService) {
  }
}
