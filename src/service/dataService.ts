import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataByCity} from "../models/DataByCity";
import {DataCity} from "../models/DataCity";

@Injectable()
export class DataService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllCity(): Observable<DataCity[]> {
    return this.http.get<DataCity[]>(`http://localhost:8080/api/v1/cities`);
  }

  getDataByCity(cityId: number): Observable<DataByCity> {
    return this.http.get<DataByCity>(`http://localhost:8080/api/v1/temperature/${cityId}`);
  }
}
