import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface leads{
  fname:string,
  lname: string,
  mobileNo: number,
  address: string, 
  pinCode: number,
  state: string, 
  city:string, 
  product:string, 
  preferredDate:Date, 
  timeSlot:TimeRanges,
  id?:string
}

@Injectable({
  providedIn: 'root'
})
export class LeadServiceService {

  constructor(private http:HttpClient){ }
  getUsers(){
    return this.http.get('http://localhost:3050');
  }

  postUsers(data:leads){
    console.log(data)
    return this.http.post('http://localhost:3050',data);
  }
}
