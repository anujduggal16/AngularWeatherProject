import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {
  url:string ="http://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
  url2:string ="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  authKey:string="&APPID=85ddea1105c3b9f796c5e5b54e4c5408"
  constructor(private http:HttpClient) { }

  getData(city:string){
    return (this.http.get(this.url+city+this.authKey))
  }
  getCurData(city:string){
    return (this.http.get(this.url2+city+this.authKey))
  }
}
