import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadServiceService } from '../Service/lead-service.service';

interface Product {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  constructor(private router: Router,
   private leadData: LeadServiceService){}

  @ViewChild('leadForm') form: NgForm;

  products: Product[] = [
    {value: 'Jio Saavan', viewValue: 'Jio Saavan'},
    {value: 'JioFiber', viewValue: 'JioFiber'},
    {value: 'Air Fiber', viewValue: 'Air Fiber'},
    {value: 'Jio Sim', viewValue: 'Jio Phone'},
    {value: 'Jio Fi', viewValue: 'Jio Fi'},
    {value: 'Jio Book', viewValue: 'Jio Book'},
    {value: 'Jio Bharat', viewValue: 'Jio Bharat'},
  ];


  postData(data: {fname:string,lname: string,mobileNo: number,address: string, pinCode: number,state: string, city:string, product:string, preferredDate:Date,timeSlot:TimeRanges,id?:string}): void
  {
    console.log("form");
    console.log(data);
    console.log("post")
    this.leadData.postUsers(data).subscribe((result) => {   //returns an observable so need to subscrie
      console.log(result);
    });
    // this.form.setValue({
    //   fname: ""
    // })
  }

  leadcomponent(){
    console.log("clicked")
    this.router.navigate(['/leads']);
  }
}
