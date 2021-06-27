import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  reportData:any = [];
  selectedData: any =[];
  worldData:any =[];
  constructor(private obj1:TestServiceService) { }

  ngOnInit(){
    this.getWorldReportData();
   }
   getWorldReportData(){
    this.obj1.getWorldReport().subscribe((data) => {
      console.log("Response data")
      this.reportData=data;
      console.log(this.reportData);
      this.selectedData=this.reportData.data.summary;
    });
  }
}