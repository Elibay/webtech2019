export class Post {
    id: number;
    title: string;
    body: string;
    like_count: number;
    created_at: String;
}

export interface IAuthResponse {
    token: string;
  }
  
