export class Task {
    name: string;
    createdAt: string;
    dueOn: string;
    status: string;
}

export class Todo {
    id: number;
    name: string;
}

export class AuthResponse {
    token: string;
}
