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

    const list = await this.CardGenaretor(collection, 3);
    const pack = [];
    list.forEach((card) => {
      pack.push(card);
    });

    // const pack = await this.CreatePack(collection, 3);

    console.log(pack);

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
    const common = [];
    const rare = [];
    const legendary = [];
    const pack = [];

    collection.map(function (card) {
      if (card.rarity === 'COMMON') {
        common.push(card);
      }
    });

    collection.map(function (card) {
      if (card.rarity === 'RARE') {
        rare.push(card);
      }
    });
    collection.map(function (card) {
      if (card.rarity === 'LEGENDARY') {
        legendary.push(card);
      }
    });

    if (common.length == 0 || rare.length == 0 || legendary.length == 0) {
      throw new BadRequestException('');
    }

    for (let i = 0; i < qnt; i++) {
      const rarity = Math.floor(Math.random() * 100) + 1;

      if (rarity >= 95) {
        const leg = this.CardGenaretor(legendary, 1);
        pack.push(leg);
      } else if (rarity >= 60) {
        const rar = this.CardGenaretor(rare, 1);
        pack.push(rar);
      } else {
        const com = this.CardGenaretor(common, 1);
        pack.push(com);
      }
    }
    return pack;
  }

  CardGenaretor(list, n) {
    return new Array(n)
      .fill(0)
      .map(() => list[Math.floor(Math.random() * list.length)]);
  }
}
