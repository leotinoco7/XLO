import { Deck } from '@prisma/client';
import { UserToCard } from '@prisma/client';

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
  utcs?: UserToCard[];
  createdAt?: Date;
  updatedAt?: Date;
}
