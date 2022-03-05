import { Component, OnInit, ViewChild } from '@angular/core';
import { Meteo } from 'src/app/model/meteo.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['cod_station', 'ts', 'temp', 'wind', 'prec', 'pres', 'hum'];
  dataSource = new MatTableDataSource<Meteo>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: Meteo[] = [
  {

		"cod_station": 1,

		"ts": "2021-03-25 15:17:47",

		"temp": "18.60",

		"wind": "22.64",

		"prec": "0.65",

		"pres": "958.69",

		"hum": "45.82"

	},

	{

		"cod_station": 2,

		"ts": "2021-03-25 15:17:47",

		"temp": "19.35",

		"wind": "21.69",

		"prec": "1.16",

		"pres": "952.93",

		"hum": "42.48"

	},

	{

		"cod_station": 3,

		"ts": "2021-03-25 15:17:47",

		"temp": "18.47",

		"wind": "20.19",

		"prec": "1.40",

		"pres": "917.92",

		"hum": "48.49"

	},

	{

		"cod_station": 4,

		"ts": "2021-03-25 15:17:47",

		"temp": "21.43",

		"wind": "24.31",

		"prec": "3.89",

		"pres": "945.79",

		"hum": "47.56"

	},

	{

		"cod_station": 1,

		"ts": "2021-03-25 16:17:47",

		"temp": "18.41",

		"wind": "23.53",

		"prec": "3.13",

		"pres": "915.67",

		"hum": "45.23"

	},

	{

		"cod_station": 2,

		"ts": "2021-03-25 16:17:47",

		"temp": "19.94",

		"wind": "23.95",

		"prec": "3.05",

		"pres": "931.79",

		"hum": "49.73"

	},

	{

		"cod_station": 3,

		"ts": "2021-03-25 16:17:47",

		"temp": "22.52",

		"wind": "23.07",

		"prec": "1.67",

		"pres": "951.76",

		"hum": "49.71"

	},

	{

		"cod_station": 4,

		"ts": "2021-03-25 16:17:47",

		"temp": "18.09",

		"wind": "24.09",

		"prec": "2.46",

		"pres": "947.42",

		"hum": "49.52"

	},

	{

		"cod_station": 1,

		"ts": "2021-03-25 17:17:47",

		"temp": "19.33",

		"wind": "21.03",

		"prec": "4.88",

		"pres": "975.52",

		"hum": "40.70"

	},

	{

		"cod_station": 2,

		"ts": "2021-03-25 17:17:47",

		"temp": "19.23",

		"wind": "20.66",

		"prec": "0.11",

		"pres": "940.74",

		"hum": "44.01"

	},

	{

		"cod_station": 3,

		"ts": "2021-03-25 17:17:47",

		"temp": "21.47",

		"wind": "22.10",

		"prec": "4.04",

		"pres": "935.07",

		"hum": "41.86"

	},

	{

		"cod_station": 4,

		"ts": "2021-03-25 17:17:47",

		"temp": "20.66",

		"wind": "22.29",

		"prec": "3.09",

		"pres": "954.24",

		"hum": "47.43"

	},

	{

		"cod_station": 1,

		"ts": "2021-03-25 18:17:47",

		"temp": "18.12",

		"wind": "23.93",

		"prec": "0.04",

		"pres": "924.68",

		"hum": "42.20"

	},

	{

		"cod_station": 2,

		"ts": "2021-03-25 18:17:47",

		"temp": "18.95",

		"wind": "21.11",

		"prec": "2.81",

		"pres": "900.89",

		"hum": "47.82"

	},

	{

		"cod_station": 3,

		"ts": "2021-03-25 18:17:47",

		"temp": "22.56",

		"wind": "21.51",

		"prec": "4.25",

		"pres": "916.03",

		"hum": "45.58"

	},

	{

		"cod_station": 4,

		"ts": "2021-03-25 18:17:47",

		"temp": "22.98",

		"wind": "22.61",

		"prec": "3.69",

		"pres": "987.67",

		"hum": "40.70"

	},

	{

		"cod_station": 1,

		"ts": "2021-03-25 19:17:47",

		"temp": "20.57",

		"wind": "23.28",

		"prec": "2.92",

		"pres": "957.81",

		"hum": "42.16"

	},

	{

		"cod_station": 2,

		"ts": "2021-03-25 19:17:47",

		"temp": "20.71",

		"wind": "23.44",

		"prec": "4.75",

		"pres": "902.34",

		"hum": "42.46"

	}
]