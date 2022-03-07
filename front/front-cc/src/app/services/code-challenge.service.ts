import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meteo } from '../model/meteo.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MeteoStation } from '../model/meteo-station.model';
import { MeteoVariable } from '../model/meteo-variable.model';

@Injectable({
    providedIn: 'root'
})
export class CodeChallengeService {

    private meteoUrl = 'https://demo3679421.mockable.io/meteo';
    private meteoStationsBackUrl = 'http://localhost:8080/api/meteoStations';
    private meteoVariablesBackUrl = 'http://localhost:8080/api/meteoVariables';

    public _meteos: BehaviorSubject<Meteo[]> = new BehaviorSubject<Meteo[]>(null);
    public meteosObs = this._meteos.asObservable();
    public meteosInitialized: boolean;

    constructor(private http: HttpClient) { }

    getMeteos() {
        return this.http.get<Meteo[]>(this.meteoUrl).subscribe(
          data => {
            this._meteos.next(data);
            this.meteosInitialized = true;
          }
        );
    }
    
    getMeteoStationsBack(): Observable<GetResponseStations> {
        return this.http.get<GetResponseStations>(this.meteoStationsBackUrl);
    }

    getMeteoVariablesBack(): Observable<GetResponseVariables> {
        return this.http.get<GetResponseVariables>(this.meteoVariablesBackUrl);
    }

}

interface GetResponseVariables {
    _embedded: {
      meteoVariables: MeteoVariable[];
    },
    page: {
      size: number,
      totalElements: number,
      totalPages: number,
      number: number
    }
}
interface GetResponseStations {
    _embedded: {
      meteoStations: MeteoStation[];
    },
    page: {
      size: number,
      totalElements: number,
      totalPages: number,
      number: number
    }
}
