export class LineChartData {

  constructor(
    public data: number[],
    public label: string,
    public borderWidth?: number,
    public hidden?: boolean,
    public fill?: boolean,
    public tension?: number,
    public borderColor?: string,
    public backgroundColor?: string,
  ) {
  }
}
