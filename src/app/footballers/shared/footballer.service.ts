import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Footballer} from "./footballer";

@Injectable({
  providedIn: 'root'
})
export class FootballerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Footballer[]> {
    console.log("Início getAll");
    return this.http.get<Footballer[]>("http://localhost:8080/api/v1/back-end/footballer");
  }
}
