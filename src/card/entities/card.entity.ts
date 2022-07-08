import { UserToCard } from '@prisma/client';

export class Card {
  id?: string;
  name: string;
  type: string;
  cardAttack: number;
  cardDef: number;
  rarity: string;
  collectionId: string;
  utcs: UserToCard[];

  createdAt?: Date;
  updatedAt?: Date;
}
