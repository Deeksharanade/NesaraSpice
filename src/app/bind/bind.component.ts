import { Component, OnInit } from '@angular/core';
class Product{
  name: string;
}
class Details{
name:String;
flight:String;
faretype:String;
additionalinfo:String;
}
class Ticket{
  traveldate:String;
  fligtno:String;
  from:String;
  to:String;
  deptime:String;
  arrtime:String;
  airline:String;
  
}
class Invoice{
  customerName: string;
  products: Product[] = [];
  details: Details[] = [];
 
  constructor(){
    this.products.push(new Product());
    this.details.push(new Details());
    
  }
}
class Another{
  tickets:Ticket[]=[];
  constructor(){
    this.tickets.push(new Ticket());
  }}
@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  values=[];
i=0;
passenger;
flightno=[];
from=[];
to=[];
j=0;
l=0;
k=0;
demo=[];
val = '';

onEnter(value : string) {
  this.demo[this.i]=value;
  this.i++;

 }

 onEnter1() { 
 this.total=(this.fee + this.psf + this.udf + this.ugst + this.asf + this.fee*0.025 + this.fee*0.025);
 }


 onEnter2(value2: string) {
  this.flightno[this.j] = value2;
  this.j++;

 }
 onEnter3(value3: string) {
  this.from[this.l] = value3;
  this.l++;

 }
 onEnter4(value4: string) {
  this.to[this.k] = value4;
  this.k++;

 }
   fee:number;
    ugst:number;
    udf:number;
    psf:number;
    asf:number;
    total:number;

  constructor() {}

  ngOnInit(): void {
  }
  invoice = new Invoice(); 
  another = new Another();
 addProduct(){
  this.invoice.products.push(new Product());
  this.invoice.details.push(new Details());
}

 addTravel(){
   this.another.tickets.push(new Ticket());
 }

}
