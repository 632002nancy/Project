import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeadServiceService } from '../Service/lead-service.service';
import { map } from 'rxjs/operators';

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

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent {
  constructor(private http:HttpClient,
    private leadData:LeadServiceService){}

    allLeads:leads[]=[]
    leadsData: leads[]=[];

  showLeads(){
    console.log("here")
    this.leadData.getUsers().pipe(map((res) => {
      const leads = [];
      for (const key in res) {   //by doing this our properties are getting stored into the array
        leads.push(...res[key]) //spreading the properties in key to an individual rpoperty for leads array
      }
      // console.log(leads);
      return leads;
    }))
      .subscribe((res) => {
        this.allLeads = res;
        console.log(this.allLeads);
        this.leadsData=this.allLeads;
      });
    
  }
}
