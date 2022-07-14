import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { notFoundError } from 'src/utils/not-found.util';
import { CreateDeckDto } from './dto/create-deck.dto';

@Injectable()
export class DeckService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateDeckDto, loggedUserId) {
    async function deckLimit(limitNumber) {
      const limit = await this.prisma.deck.findMany({
        where: { userId: loggedUserId },
      });

      if (limit.length >= limitNumber) {
        throw new BadRequestException('Your deck has reached its limit.');
      }
    }

    deckLimit(3);
    const data: Prisma.DeckCreateInput = {
      user: {
        connect: {
          id: loggedUserId,
        },
      },
      userToCard: {
        connect: {
          id: dto.utcId,
        },
      },
    };
    return await this.prisma.deck.create({ data }).catch(handleError);
  }

  async delete(id: string, userId: string) {
    notFoundError(
      this.prisma.deck.findUnique({ where: { id, userId } }),
      `this deck (${id})`,
    );
    this.prisma.deck.delete({ where: { id, userId } }).catch(handleError);
    return { message: 'Card sucessfuly removed.' };
  }

  async reset(userId: string) {
    this.prisma.deck.deleteMany({ where: { userId } });

    return { message: 'Your deck have been cleaned.' };
  }
}
