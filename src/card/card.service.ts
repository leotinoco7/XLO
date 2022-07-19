import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { isAdmin } from 'src/utils/is-admin.util';
import { notFoundError } from 'src/utils/not-found.util';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCardDto, loggedUser) {
    isAdmin(loggedUser);

    const limit = await this.collectionLimit(dto);

    if (!limit) {
      throw new BadRequestException({
        message: 'This collection has reached its limit!',
      });
    }

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

    data.rarity = this.dataTreatment(data.rarity);

    return this.prisma.card.create({ data }).catch(handleError);
  }

  async findOne(id: string) {
    const data = await this.prisma.card
      .findUnique({
        where: { id },
        include: {
          collection: {
            select: {
              name: true,
            },
          },
        },
      })
      .catch(handleError);
    notFoundError(data, `this card (${id})`);
    return data;
  }

  async update(id: string, dto: UpdateCardDto, loggedUser) {
    isAdmin(loggedUser);
    const data: Prisma.CardUpdateInput = {
      ...dto,
    };
    data.rarity = this.dataTreatment(data.rarity);
    notFoundError(
      await this.prisma.card.findUnique({ where: { id } }),
      `this card (${id})`,
    );
    return this.prisma.card
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string, loggedUser) {
    isAdmin(loggedUser);
    await this.prisma.card.delete({ where: { id } }).catch(handleError);
    notFoundError(
      this.prisma.card.findUnique({ where: { id } }),
      `this card (${id})`,
    );
    return { message: 'Card deleted successfully!' };
  }

  dataTreatment(data) {
    return data
      .normalize('NFD')
      .replace(/[^a-zA-Zs]/g, '')
      .toUpperCase();
  }
  async collectionLimit(dto) {
    const limit = await this.prisma.collection.findUnique({
      where: { id: dto.collectionId },
      include: {
        cards: true,
      },
    });
    console.log({ limit });
    console.log(limit.cards.length);
    if (limit.cards.length >= limit.cardNumber) {
      return false;
    } else {
      return true;
    }
  }
}
