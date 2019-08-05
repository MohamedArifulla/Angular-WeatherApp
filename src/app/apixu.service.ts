import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
  getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=dbdcaf246bf844c090c210620190508&q=' + location
    );
}
}
