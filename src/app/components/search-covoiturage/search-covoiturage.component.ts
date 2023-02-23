import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ReservationCovoiturageService } from 'src/app/services/reservation-covoiturage.service';

@Component({
  selector: 'app-search-covoiturage',
  templateUrl: './search-covoiturage.component.html',
  styleUrls: ['./search-covoiturage.component.css']
})
export class SearchCovoiturageComponent implements OnInit, OnDestroy {

  searchForm!: FormGroup;

  searchResults$ = this.reservationCovoiturageService.listCovoiturageByDateDepart$;
  
  constructor(private reservationCovoiturageService: ReservationCovoiturageService, private formBuilder: FormBuilder, private router:Router){}


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchDateDepart : [null]
    })
  }

  ngOnDestroy(): void {
    this.searchResults$.next([]);
  }

  onSearch(){
    this.reservationCovoiturageService.getCovoiturageByDateDepart(2, this.searchForm.value.searchDateDepart).subscribe();
  }


}
