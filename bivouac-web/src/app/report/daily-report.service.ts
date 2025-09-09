import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DailySalesReport } from './model/daily-sales-report';

@Injectable({
  providedIn: 'root'
})
export class DailyReportService {

  constructor(private httpClient: HttpClient) { }

  postDailyReport(report:DailySalesReport) {
    return this.httpClient.post('http://localhost:8080/daily-report', report)
  }
}
