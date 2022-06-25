export class Task {
  public id: string;
  public item: string;
  public realizada: boolean;

  constructor(id:string, item: string, realizada: boolean) {
    this.id = id;
    this.item = item;
    this.realizada = realizada;
  }
}
