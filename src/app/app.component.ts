import { Component } from '@angular/core';
import{DataService} from './dataservice.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  city:string='';
  weatherData:any;
  curWeatherData:any;
  weatherList=new Array();
  iconUrl:string
  constructor(private data:DataService){}

  getWeatherData(){
    if(this.city.trim()==''){
      window.alert("Enter City Name")
    }
    else{
      this.weatherList=[];
      this.curWeatherData=[];
      this.data.getCurData(this.city).subscribe((curResponse)=>{
      this.curWeatherData= curResponse;
      },(error)=>{ 
        window.alert("Wrong City Name")
      })
      this.data.getData(this.city).subscribe((response)=>{
      this.weatherData=response;
      var i =0;
      for(let index=0;index<5;index++){
        this.weatherList.push(this.weatherData.list[i]);
        i=i+8;
      } 
    },(error)=>{  
    })
    }
    
  }
}
