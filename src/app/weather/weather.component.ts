import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: any;
  location: string = '';
  errorMessage: string = '';  

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.location).subscribe(
      data => {
        this.weatherData = data;
        this.errorMessage = '';  
      },
      error => {
        console.error('Error fetching weather data', error);
        this.errorMessage = 'Error fetching weather data. Please check the location and Zip Code and try again.';  // Set the error message
      }
    );
  }
}
