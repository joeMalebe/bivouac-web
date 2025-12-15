import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';
import { SalesReportComponent } from './report/sales-report/sales-report.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Route[] = [{
  path: '',
  component:HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'sales',
    component:SalesReportComponent
  },{
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    AuthModule,
    ReportModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
