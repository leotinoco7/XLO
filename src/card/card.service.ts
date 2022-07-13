import { Injectable } from '@nestjs/common';
import { handleError } from 'src/utils/handle-error.util';
import { PrismaService } from 'src/prisma/prisma.service';
import { notFoundError } from 'src/utils/not-found.util';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';
import { isAdmin } from 'src/utils/is-admin.util';
import { Prisma } from '@prisma/client';
import { User } from '@prisma/client';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCardDto, loggedUser) {
    isAdmin(loggedUser);
    const data: Prisma.CardCreateInput = {
      name: dto.name,
      type: dto.type,
      cardAttack: dto.cardAttack,
      cardDef: dto.cardDef,
      rarity: dto.rarity,
      collection: {
        connect: {
          id: dto.collectionId,
        },
      },
    };
    return this.prisma.card.create({ data }).catch(handleError);
  }

  async findAll() {
    const data = await this.prisma.card.findMany().catch(handleError);

    notFoundError(data, 'the cards');

    return data;
  }

  async findOne(id: string) {
    const data = await this.prisma.card
      .findUnique({ where: { id } })
      .catch(handleError);
    notFoundError(data, `this card (${id})`);
    return data;
  }

  async update(id: string, dto: UpdateCardDto) {
    const data: Partial<Card> = { ...dto };
    notFoundError(
      this.prisma.card.findUnique({ where: { id } }),
      `this card (${id})`,
    );
    return await this.prisma.card
      .update({ where: { id }, data })
      .catch(handleError);
  }

  async delete(id: string) {
    const data = await this.prisma.card
      .delete({ where: { id } })
      .catch(handleError);
    notFoundError(
      this.prisma.card.findUnique({ where: { id } }),
      `this card (${id})`,
    );
    return data;
  }
}
