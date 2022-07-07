import { Deck } from '@prisma/client';

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  CPF: string;
  imageUrl: string;
  ranking: number;
  balance: number;
  isAdmin?: boolean;
  deck?: Deck[];
  createdAt?: Date;
  updatedAt?: Date;
}
