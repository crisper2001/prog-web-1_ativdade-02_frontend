import {Routes} from '@angular/router';
import {FootballersListComponent} from "./footballers/footballers-list/footballers-list.component";
import {FootballerResolve} from "./footballers/shared/footballer.resolve";

export const routes: Routes = [
  {
    path: '', component: FootballersListComponent,
    resolve: {footballerData: FootballerResolve}
  }
];
