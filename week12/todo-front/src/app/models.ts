export class Task {
    id: number;
    name: string;
    created_at: string;
    due_on: string;
    status: string;
}
export class TaskList {
    id: number;
    name: string;
    task_list: Array<Task>;
}
