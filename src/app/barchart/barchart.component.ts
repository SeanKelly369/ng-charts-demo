import { Component } from '@angular/core';
import { AgChartOptions, AgBarSeriesOptions, AgLineSeriesOptions } from 'ag-charts-community';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss'
})
export class BarchartComponent {
  public chartOptions: AgChartOptions;
  constructor() {
    this.chartOptions = {
      title: { text: 'Ice Cream Sales' },
      subtitle: { text: 'Data from 2022' },
      legend: {
        position: 'right',
      },
      // Data: Data to be displayed in the chart
      data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
      ],
      // Series: Defines which chart type and data to use
      series: [
        { type: 'bar', xKey: 'month', yKey: 'iceCreamSales' } as AgBarSeriesOptions, // Existing 'Bar' Series, using 'iceCreamSales' data-points
        { type: 'line', xKey: 'month', yKey: 'avgTemp' } as AgLineSeriesOptions, // Additional 'Line' Series, using 'avgTemp' data-points
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number', position: 'left', keys: ['iceCreamSales'] },
        { type: 'number', position: 'right', keys: ['avgTemp'] },
    ],
    };

  }
}
