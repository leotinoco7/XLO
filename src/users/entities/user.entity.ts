export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  CPF: string;
  imageUrl: string;
  ranking: number;
  isAdmin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
