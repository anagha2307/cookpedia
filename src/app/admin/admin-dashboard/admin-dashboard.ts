import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  selected = new Date()
  chartOptions: Highcharts.Options = {};
  constructor(){
    this.chartOptions = {
      chart:{
        type :'bar'
      },
      title:{
        text:'Analysis of Recipe Download Count Based on Cuisine'
      },
      xAxis:{
        type:'category'
      },
      yAxis:{
        title:{
          text:'Total Download Recipe Count'
        }
      },
      legend:{
        enabled:false
      },
      credits:{
        enabled:false
      },
      series:[
        {
        name:'Cuisine',
        type:'bar',
        colorByPoint:true,
        data:[{
          name:'Italian',
          y:20
        }]
      }]
    }
  }
}
