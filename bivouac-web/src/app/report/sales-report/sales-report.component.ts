import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DailyReportService } from '../daily-report.service';
import { DailySalesReport } from '../model/daily-sales-report';
import { GuestOccupation } from '../model/guest-occupation';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss'],
})
export class SalesReportComponent implements OnInit {
  dailyReport!: DailySalesReport;
  drinks!: number;
  isNoOccupations: boolean = false;
  currency: string = "CDF";

  constructor(private fb: FormBuilder,private dailyReportService:DailyReportService) {}

  form: FormGroup = new FormGroup({});
  occupations: GuestOccupation[] = [];
  ngOnInit(): void {
    this.form = this.fb.group({
      roomNumber: [undefined, Validators.required],
      type: [undefined, Validators.required],
      amount: [undefined, Validators.required],
    });
  }

  isRequired(controlName: string): boolean {
    return !this.isNoOccupations &&
    (
      (this.form.get(controlName)?.hasError('required') &&
        (this.form.get(controlName)?.touched ||
          this.form.get(controlName)?.dirty)) ??
      false
    );
  }
  addOccupation() {
    if (this.form.invalid) return;
    let occupation = this.form.value;
    console.log(occupation);
    this.occupations.push(occupation);
    this.form.reset();
  }
  onSubmitReport() {
    this.dailyReport = {
      occupations: this.occupations,
      noOccupationsDay: this.isNoOccupations,
      currency:this.currency,
      capturedBy: 'Joe', //get user by session data
      dateCaptured: new Date(),
      resturantSales: this.drinks,
    };
    this.dailyReportService.postDailyReport(this.dailyReport).subscribe((value)=> {
      console.log(JSON.stringify(value));
      
    })
    
  }
  isNoOccupationsDay(): boolean {
    return this.occupations.length < 1 && this.isNoOccupations;
  }
}
