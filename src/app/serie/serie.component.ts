import { Component, OnInit } from '@angular/core';
import {Serie} from "./serie"
import {series} from "./dataSeries"

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit {

  listaseries: Array<Serie>=[];
  promedioSeries:number=0;
  constructor() {}

  getSeriesList(): Array<Serie>{
    return series ;
  }

  getPromedioSeries(): number{
    series.forEach((serie) => this.promedioSeries = this.promedioSeries + serie.seasons);
    return this.promedioSeries/this.listaseries.length;
  }

  ngOnInit() {
    this.listaseries = this.getSeriesList();
    this.promedioSeries = this.getPromedioSeries();
  }
}
