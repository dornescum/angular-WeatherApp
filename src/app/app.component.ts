import {Component, OnInit} from '@angular/core';
import {WeatherService} from "src/app/services/weather.service";
import {WeatherData} from "src/app/models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  weatherData?:WeatherData;
  cityName:string = "Bucharest";
  constructor(private weatherService: WeatherService) {
  }
  ngOnInit(): void {
    // this.weatherService.getWeatherData("Bucharest").subscribe({
    //   next: (response)=>{
    //     this.weatherData = response;
    //     console.log(response)
    //   }
    // })
    this.getWeatherData(this.cityName);
    this.cityName = "";

  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    // caut in orasul desemnat in input si dupa ii dau volarea ""
    this.cityName = "";
  }

  // mut din ngOnInit si am acces la ea aici
  private getWeatherData(cityName:string ){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response)=>{
        this.weatherData = response;
        console.log(response)
      }
    })
  }
}
