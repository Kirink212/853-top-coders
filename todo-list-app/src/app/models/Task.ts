export default class Task {
  static lastId: number = 4;

  id: number;
  title: string;
  description?: string;
  dueDate: Date;
  status: boolean;

  constructor(title: string, descr?: string, dueDate: Date = new Date(), status: boolean = false) {
    this.title = title;
    this.description = descr;
    this.dueDate = dueDate;
    this.status = status;

    this.id = Task.updateLastId();
  }

  static updateLastId(id?: number): number {
    // this.lastId = id?? this.lastId + 1;
    return ++this.lastId;
  }
}
