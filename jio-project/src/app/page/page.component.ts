import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadServiceService } from '../Service/lead-service.service';
import { HttpClient } from '@angular/common/http';

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
   private leadData: LeadServiceService,
   private https:HttpClient){}

  @ViewChild('leadForm') form: NgForm;

  saved:boolean=false;

  products: Product[] = [
    {value: 'Jio Saavan', viewValue: 'Jio Saavan'},
    {value: 'JioFiber', viewValue: 'JioFiber'},
    {value: 'Air Fiber', viewValue: 'Air Fiber'},
    {value: 'Jio Sim', viewValue: 'Jio Sim'},
    {value: 'Jio Fi', viewValue: 'Jio Fi'},
    {value: 'Jio Book', viewValue: 'Jio Book'},
    {value: 'Jio Bharat', viewValue: 'Jio Bharat'},
  ];


  postData(data: {fName:string,lName: string,mobile: number,address: string, pinCode: number,state: string, city:string, product:string, date:Date,time:TimeRanges}): void
  {
    this.saved=true;
    console.log("form");
    console.log(this.form);
    console.log("post")
    this.leadData.postUsers(data).subscribe((result) => {   //returns an observable so need to subscrie
      console.log(result);
    });
    this.form.resetForm();
    
  }

  pinFetch(value:number){
    console.log(value);
    document.getElementById('pincode').addEventListener('input', function() {
      // const pincode = value;
      console.log("inside pincode");
      const pincode = value.toString();
      if (pincode.length === 6) {
          fetchCityAndState(pincode);
          console.log(pincode.length);
      }
      });
  
      function fetchCityAndState(pincode) {
      const apiUrl:string = 'https://api.postalpincode.in/pincode/${pincode}';
  
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              if (data && data.length > 0 && data[0].Status === 'Success') {
                  const { PostOffice } = data[0];
                  if (PostOffice && PostOffice.length > 0) {
                      const city = PostOffice[0].District;
                      const state = PostOffice[0].State;
                      displayResult(city, state);
                  }
              } else {
                  displayResult('Not Found', 'Not Found');
              }
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              displayResult('Error', 'Error');
          });
  }
  
  function displayResult(city, state) {
      const resultDiv = document.getElementById('result');
      console.log("city state");
      console.log(city);
      console.log(state);
      // resultDiv.innerHTML = City: ${city}<br>State: ${state};
  }
  }

  leadcomponent(){
    console.log("clicked")
    this.router.navigate(['/leads']);
  }
}
