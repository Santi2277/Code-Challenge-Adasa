import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meteo } from '../model/meteo.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CodeChallengeService {

    
    private meteoUrl = 'https://demo3679421.mockable.io/meteo';

    constructor(private http: HttpClient) { }

    getMeteos(): Observable<Meteo[]> {
        return this.http.get<Meteo[]>(this.meteoUrl);
      }

}

