import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { CodeChallengeService } from 'src/app/services/code-challenge.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  private chart: am4charts.XYChart;
  private jsonTempTs: any;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private codeChallengeService: CodeChallengeService) {}

  


  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {

      // ---- code mine
      // call the service to get meteos
      this.codeChallengeService.getMeteos().subscribe(
        data => {
          // get meteos data
          this.jsonTempTs = data;
          // loop data to convert to data to pass to the chart
          // we will get the temperature, date and cod_station only
          for (const element of this.jsonTempTs) {
            
            delete element['hum'];
            delete element['prec'];
            delete element['wind'];
            delete element['pres'];

            // value (temp)
            // convert to number
            element['temp'] = parseFloat(element['temp']);
            Object.defineProperty(element, 'value',
              Object.getOwnPropertyDescriptor(element, 'temp'));
            delete element['temp'];

            // name (cod_station)
            Object.defineProperty(element, 'name',
              Object.getOwnPropertyDescriptor(element, 'cod_station'));
            delete element['cod_station'];

            // convert element['ts'] into a Date            
            let cellDate = new Date(element['ts'])
            element['ts'] = cellDate;

            // date (ts)
            Object.defineProperty(element, 'date',
              Object.getOwnPropertyDescriptor(element, 'ts'));
            delete element['ts'];

          }

          am4core.useTheme(am4themes_animated);

          // create the chart
          let chart = am4core.create("chartdiv", am4charts.XYChart);
    
          chart.paddingRight = 20;
    
          // assign data values to chart
          chart.data = this.jsonTempTs;
    
          let date2Axis = chart.xAxes.push(new am4charts.DateAxis());
          date2Axis.renderer.grid.template.location = 0;
    
          let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.tooltip.disabled = true;
          valueAxis.renderer.minWidth = 35;
    
          let series = chart.series.push(new am4charts.LineSeries());
          // assign values to axis
          series.dataFields.dateX = "date";
          series.dataFields.valueY = "value";
          series.tooltipText = "{valueY.value}";
    
          chart.cursor = new am4charts.XYCursor();
    
          let scrollbarX = new am4charts.XYChartScrollbar();
          scrollbarX.series.push(series);
          chart.scrollbarX = scrollbarX;
    
          this.chart = chart;

        }
      );

      


      
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}