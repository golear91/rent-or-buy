import {Component} from 'angular2/core';
import {CalculatorComponent} from './shared/calculator.component';
import {AboutComponent} from './shared/about.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
	selector: 'my-app',
	template: `
        <h1>{{title}}</h1>
        <nav>
          <a [routerLink]="['Calculator']">Calculator</a>
          <a [routerLink]="['About']">About</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ],
    styleUrls: ["app/app.component.css"]
})

@RouteConfig([
  {
    path: '/calculator',
    name: 'Calculator',
    component: CalculatorComponent
  }
])

@RouteConfig([
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
])
export class AppComponent 
{
    title: string = "test application";
    /*
    rent: number = 2000;
    rentString: string = "Monthly Rent: ";
    maxRent: number = 5000;
    
    principal: number = 300000;
    principalString: string = "Total Principal: ";
    maxPrincipal: number = 1000000;
    
    monthlyPayment: number = 2000;
    monthlyPaymentString: string = "Monthly Payment: ";
    maxMonthlyPayment: number = 8000;
    
    periodInMonths: number = 240;
    mortgagePeriodString: string = "Amortization Period: ";
    maxPeriod: number = 30;
    
    monthlyInterest: number = 0.005;
    interestString: string = "Interest Rate: ";
    maxInterest: number = 10;
    
    ngOnInit():void{
    }
    
    calculateMonthlyPayment(){
        this.monthlyPayment = this.principal * this.monthlyInterest / (1-Math.pow(1 + this.monthlyInterest,-this.periodInMonths)); 
    }
    calculatePrincipal(){
        this.principal = this.monthlyPayment * (1-Math.pow(1 + this.monthlyInterest,-this.periodInMonths)) / this.monthlyInterest;
    }
    updateRent(rent: number){
        this.rent = rent;
    }
    updatePrincipal(principal: number){
        this.principal = principal;
        this.calculateMonthlyPayment();
    }
    updatePeriod(period: number){
        this.periodInMonths = period * 12;
        this.calculateMonthlyPayment();
    }
    updateMonthlyPayment(monthlyPayment: number){
        this.monthlyPayment = monthlyPayment;
        this.calculatePrincipal()
    }
    updateInterest(interest: number){
        this.monthlyInterest = interest / 1200;
        this.calculateMonthlyPayment()
    }
    */
}