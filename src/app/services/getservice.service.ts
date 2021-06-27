import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
}) 
export class GetserviceService {
  constructor (private obj:HttpClient){}

getCovidDetails(){
  const coviddata="https://corona-virus-world-and-india-data.p.rapidapi.com/api_india"
  const headers={
    headers:new HttpHeaders({
      "x-rapidapi-key": "cd1b36eba6msh513c010628db521p124bb3jsn3d271cd3c7e6",
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
     })
    }
  return this.obj.get(coviddata,headers);
  }
}