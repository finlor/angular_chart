import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {DataService} from "../../../service/dataService";
import {DataByCity} from "../../../models/DataByCity";
import {DataCity} from "../../../models/DataCity";
import {LineChartData} from "../../../models/LineChartData";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  public data: DataByCity;
  public dataCity: DataCity[];
  public cityName: string;
  public lineChartData: LineChartData[] = [];
  public lineChartLabel: string[] = [];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public loadData: boolean = true;

  public lineChartOptions: any = {
    responsive: true,
    legend: {
      display: true
    },
  };

  public selectedCity: string = "GB";
  public selectedCityControl = new FormControl(this.selectedCity);

  @ViewChild(BaseChartDirective) baseChart: BaseChartDirective;

  ngOnInit() {
    // subscribe to the Observable to make the HTTP call
    this.dataService.getAllCity().subscribe((data) => {
      this.dataCity = data;
    });
  }


  updateCity(event: any) {
    this.dataService.getDataByCity(event.value.cityId).subscribe((data) => {
      this.data = data;
      this.mappingData(this.data, this.lineChartData);
    });
  }


  mappingData(data: DataByCity, lineChartData: LineChartData[]) {
    const dataLinechart: LineChartData = {
      label: data.city_info.name,
      data: data.data
        .sort(({date: a}, {date: b}) => a < b ? -1 : a > b ? 1 : 0)
        .map(current => Math.round((current.temperature + Number.EPSILON) * 100) / 100),
      borderWidth: 1,
      hidden: false,
      backgroundColor: 'white'
    };
    this.lineChartLabel = data.data
      .sort(({date: a}, {date: b}) => a < b ? -1 : a > b ? 1 : 0)
      .map(current => current.date.toString());

    if (lineChartData.filter(current => current.label === dataLinechart.label).length === 0) {
      lineChartData.push(dataLinechart);
    }
    this.cityName = data.city_info.name
  }
}
