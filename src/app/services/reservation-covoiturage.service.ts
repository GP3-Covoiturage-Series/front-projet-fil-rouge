import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Covoiturage } from '../models/covoiturage';

@Injectable({
  providedIn: 'root'
})
export class ReservationCovoiturageService {

  listReservationCovoiturage$ = new BehaviorSubject<Covoiturage[]>([])

  constructor(private http:HttpClient) { }

  getListReservationCovoiturageByCollaborateur(collaborateurId: number, state: string) : Observable<Covoiturage[]>{
    return this.http.get<Covoiturage[]>(`http://localhost:8080/rest/covoiturage/?collaborateurId=${collaborateurId}&state=${state}`).pipe(
      tap((reservations) => this.listReservationCovoiturage$.next(reservations)));
  }

}