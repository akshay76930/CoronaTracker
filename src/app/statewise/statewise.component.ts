import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';
@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent implements OnInit{
  key_values:any=[];
  coviddata:any=[];
  constructor(private obj:TestServiceService) { }

  ngOnInit(){
    this.getCovidDetailsData();
    }
  getCovidDetailsData(){
    this.obj.getCovidDetails().subscribe((data) => {
      console.log("Covid data")
      this.key_values=data;
      this.key_values=this.key_values.total_values;
      console.log(this.key_values);
    }); 
  }
}