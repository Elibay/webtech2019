export class Task {
    id: number;
    name: string;
    createdAt: string;
    dueOn: string;
    status: string;
}
export class TaskList {
    id: number;
    name: string;
}

export class AuthResponse {
    token: string;
}
