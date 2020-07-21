import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

interface RateDateRates {
  [k: string]: { [k: string]: number }
}

export interface WeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string
//šeit izmainam vērtības, jo mainās api Weather dēļ.


  // start_at: string;
  // base: string;
  // end_at: string;
  weathers: RateDateRates;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  // baseRate = 'EUR';
  // symbols = 'USD,GBP';
  // currencyData: any;
  WeatherData: any;

  // startDate: string;
  // endDate: string;
  // rates: any[];
  weathers:any[];

  constructor(private restClient: HttpClient) {}

  ngOnInit(): void {
    this.restClient
      .get<WeatherData>(this.getTemperaturesrUrl())
      .subscribe((data) => this.processData(data));
  }

  processData(data: WeatherData): void {
    // this.startDate = data.start_at;
    // this.endDate = data.end_at;
    // this.rates = Object.entries(data.rates)
    this.weathers = Object.entries(data)

    .map(divainiba=>({
      index: divainiba[0],
      w: divainiba[1],

    }));
  }

  // getRatesUrl(): string {
    getTemperaturesrUrl(): string {
    return environment.temperaturesUrl1;
      // .replace('{base}', this.baseRate)
      // .replace('{symbols}', this.symbols);
  }
}
