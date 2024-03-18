import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface leads{
  fName:string,
  lName: string,
  mobile: number,
  address: string, 
  pinCode: number,
  state: string, 
  city:string, 
  product:string, 
  date:Date, 
  time:TimeRanges,
  // id?:string
}

@Injectable({
  providedIn: 'root'
})
export class LeadServiceService {

  constructor(private http:HttpClient){ }
  getUsers(){
    return this.http.get('http://localhost:3050');
  }
  getCity(pincode:any){
    return this.http.get(`http://localhost:3050/getcity/${pincode}`);
  }

  postUsers(data:leads){
    return this.http.post('http://localhost:3050',data);
  }
}
