import {DataTemperature} from "./DataTemperature";
import {DataCity} from "./DataCity";

export class DataByCity {

constructor(
  public city_info: DataCity,
  public data: DataTemperature []
) {}
}

