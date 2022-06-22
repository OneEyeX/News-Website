import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}
  // put API key here
  API_KEY = 'put API key here';
  // example API_KEY = '012SDS12121...';

  // news api url
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=fr&apiKey=' + this.API_KEY;

  // Technews Api Url
  techApiUrl =
    'https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=' +
    this.API_KEY;

  // Technews Api Url
  businessApiUrl =
    'https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=' +
    this.API_KEY;

  // topHeading()
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  // techNews()
  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  // businessNews()
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }
}
