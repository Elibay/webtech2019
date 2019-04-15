export class TaskList {
    id: number;
    name: string;
}
export class Task {
    id: number;
    name: string;
    created_at: string;
    due_on: string;
    status: string;
    // task_list: Array<TaskList>;    
}