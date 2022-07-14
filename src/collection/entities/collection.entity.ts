import { Card } from '@prisma/client';

export class Collection {
  id?: string;

  name: string;
  cardNumber: number;
  cards: Card[];

  createdAt?: Date;
  updatedAt?: Date;
}
