import { Component, OnInit, ViewChild } from '@angular/core';
import { Meteo } from 'src/app/model/meteo.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { EmpFilter } from 'src/app/shared/emp-filter';
import { CodeChallengeService } from 'src/app/services/code-challenge.service';
import { MeteoVariable } from 'src/app/model/meteo-variable.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['cod_station', 'ts', 'temp', 'wind', 'prec', 'pres', 'hum'];
  meteosFromService: Meteo[];
  meteoVarsFromService: MeteoVariable[];
  meteoVars: String = "";
  dataSource = new MatTableDataSource<Meteo>();
  meteoStationsData = ["All", "1", "2", "3", "4"];
  empFilters: EmpFilter[]=[];
  filterDictionary= new Map<string,string>();
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer, private codeChallengeService: CodeChallengeService) { }

  ngOnInit(): void {

    // get meteo data from REST service
    this.codeChallengeService.getMeteos().subscribe(
      data => {
        this.meteosFromService = data;
        this.dataSource.data = this.meteosFromService;
      }
    );

    // get variables data from backend
    this.codeChallengeService.getMeteoVariablesBack().subscribe(
      data => {
        
        this.meteoVarsFromService = data._embedded.meteoVariables;

        for (const element of this.meteoVarsFromService) {
          this.meteoVars = this.meteoVars+"Name: "+element['name'];
          this.meteoVars = this.meteoVars+" Unit: "+element['unit']+". ";
        }
        
        
      }
    );
    

    // filters for columns
    this.empFilters.push({name:'cod_station',options:this.meteoStationsData,defaultValue:"all"});

    // filterPredicate for datasource (meteos)
    this.dataSource.filterPredicate = function (record,filter) {
      
      var map = new Map(JSON.parse(filter));
      let isMatch = false;

      // check the key to detect which column to filter
      for(let [key,value] of map){
        // case cod_station
        if(key == "cod_station"){
          isMatch = (value=="All") || (record[key as keyof Meteo] == value); 
          if(!isMatch) return false;
        // case ts
        } else if (key == "dateFrom") {

          // get date values
          // transform date in format 10/23/2015
          let inputDateFrom = new Date(""+value);

          // transform date in format 2021-03-25 15:17:47
          let cellDate = new Date(record.ts);

          isMatch = (cellDate > inputDateFrom); 
          if(!isMatch) return false;

        } else if (key == "dateTo") {

          // get date values
          // transform date in format 10/23/2015
          let inputDateTo = new Date(""+value);

          // transform date in format 2021-03-25 15:17:47
          let cellDate = new Date(record.ts)

          isMatch = (cellDate > inputDateTo); 
          if(!isMatch) return false;

        }
        
      }

      return isMatch;

    }
  }

  ngAfterViewInit() {
    // paginator help
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // manage filters for cod_station
  applyFilter(selection: string) {
    // apply the filter to cod_station column
    this.applyEmpFilter("cod_station", selection);
  }

  // manage filters for ts
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);
    // apply the filter dateFrom
    this.applyEmpFilter("dateFrom", dateRangeStart.value);
    // apply the filter dateTo
    this.applyEmpFilter("dateTo", dateRangeStart.value);
  }

  // filter for multiple columns
  applyEmpFilter(column: string, selection: string) {
    this.filterDictionary.set(column,selection);
    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    this.dataSource.filter = jsonString;
}

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
