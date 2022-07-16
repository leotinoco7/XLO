import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePackDto } from './dto/create-pack.dto';

@Injectable()
export class PackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePackDto, loggedUser: User) {
    const collection = await this.prisma.card.findMany({
      where: { collectionId: dto.collectionId },
    });

    const pack = await this.CreatePack(collection, 3);

    const transactions = pack.map((utc) =>
      this.prisma.userToCard.create({
        data: {
          user: {
            connect: {
              id: loggedUser.id,
            },
          },
          card: {
            connect: {
              id: utc.id,
            },
          },
        },
      }),
    );
    return this.prisma.$transaction(transactions);
  }

  CreatePack(collection, qnt) {
    const common = collection.map(function (card) {
      if (card.rarity === 'COMMON') {
        return card;
      }
    });
    const rare = collection.map(function (card) {
      if (card.rarity === 'RARE') {
        return card;
      }
    });
    const legendary = collection.map(function (card) {
      if (card.rarity === 'LEGENDARY') {
        return card;
      }
    });

    if (common.length == 0 || rare.length == 0 || legendary.length == 0) {
      throw new BadRequestException('');
    }

    const pack = [];

    for (let i = 0; i < qnt; i++) {
      const rarity = Math.floor(Math.random() * 100) + 1;

      if (rarity >= 95) {
        this.PackIncrement(legendary, 1, pack);
      } else if (rarity >= 60) {
        this.PackIncrement(rare, 1, pack);
      } else {
        this.PackIncrement(common, 1, pack);
      }
    }

    return pack;
  }

  CardGenaretor(list, n) {
    return new Array(n)
      .fill(0)
      .map(() => list[Math.floor(Math.random() * list.length)]);
  }

  PackIncrement(list, n, pack) {
    const array = this.CardGenaretor(list, n);
    array.forEach((item) => pack.push(item));
  }
}
