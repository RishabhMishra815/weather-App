import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'cd8a728847c5b200cdb10aeaa9eb184e';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${location}&appid=${this.apiKey}&units=metric`);
  }
}
