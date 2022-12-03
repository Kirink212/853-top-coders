export default interface Task {
  title: string;
  description?: string;
  dueDate: Date;
  status: boolean;
}
