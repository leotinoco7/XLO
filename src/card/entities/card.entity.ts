export class Card {
  id?: string;
  name: string;
  type: string;
  cardAttack: number;
  cardDef: number;
  rarity: string;
  collectionId: string;
  deck?: Deck[];

  createdAt?: Date;
  updatedAt?: Date;
}
