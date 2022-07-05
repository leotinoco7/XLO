export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  CPF: string;
  isAdmin?: boolean;
  balance: number;
  ranking: number;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}
