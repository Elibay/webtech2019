export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export class UserProduct {
    id: number;
    product: Product;
    count: number;
}

export class AuthResponse {
    token: string;
}
