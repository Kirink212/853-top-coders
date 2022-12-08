export default class Task {
  title: string;
  description?: string;
  dueDate: Date;
  status: boolean;

  constructor(title: string, descr?: string, dueDate: Date = new Date(), status: boolean = false) {
    this.title = title;
    this.description = descr;
    this.dueDate = dueDate;
    this.status = status;
  }
}
