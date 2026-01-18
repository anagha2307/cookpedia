import { Component, inject } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../../services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  router = inject(Router)
  api = inject(ApiService)
  selected = new Date()
  chartOptions: Highcharts.Options = {};
  isSidebarOpen: boolean = true

  userCount: number = 0
  recipeCount: number = 0
  downloadCount: number = 0
  notification: number = 0

  constructor() {
    if (localStorage.getItem("chart")) {
      const chartData = JSON.parse(localStorage.getItem("chart") || "")
      this.chartOptions = {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Analysis of Recipe Download Count Based on Cuisine'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'Total Download Recipe Count'
          }
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        accessibility: {
          enabled: false
        },
        series: [
          {
            name: 'Cuisine',
            type: 'bar',
            colorByPoint: true,
            data: chartData
          }]
      }
    }
  }
  ngOnInit() {
    this.getUser()
    this.getRecipeCount()
    this.getDownload()
    this.getNotification()
    this.api.getChartData()
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }
  getUser() {
    this.api.getAllUsersAPI().subscribe((res: any) => {
      this.userCount = res.length
    })
  }
  getRecipeCount() {
    this.api.getAllRecipesAPI().subscribe((res: any) => {
      this.recipeCount = res.length
    })
  }
  getDownload() {
    this.api.getDownloadListAPI().subscribe((res: any) => {
      this.downloadCount = res.map((item: any) => item.count).reduce((acc: any, curr: any) => acc + curr)
    })
  }
  getNotification() {
    this.api.getFeedbackListAPI().subscribe((res: any) => {
      this.notification = res.filter((item: any) => item.status == "pending").length
    })
  }
  logout() {
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }
}
