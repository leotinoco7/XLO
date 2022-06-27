export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  CPF: string;
  imageUrl: string;
  ranking: number;
  isAdmin?: boolean;
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
}
