import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { notFoundError } from 'src/utils/not-found.util';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Injectable()
export class DeckService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateDeckDto) {
    return await this.prisma.deck.create({ data: dto });
  }

  async findAll() {
    const data = await this.prisma.deck.findMany().catch(handleError);

    notFoundError(data, 'the decks');

    return data;
  }

  async findOne(id: string) {
    const data = await this.prisma.deck
      .findUnique({ where: { id } })
      .catch(handleError);

    notFoundError(data, 'this deck');

    return data;
  }

  async update(id: string, dto: UpdateDeckDto) {
    const data = await this.prisma.deck
      .update({ where: { id }, data: dto })
      .catch(handleError);

    notFoundError(
      this.prisma.deck.findUnique({ where: { id } }),
      `this deck (${id})`,
    );

    return data;
  }

  async delete(id: string) {
    this.prisma.deck.delete({ where: { id } }).catch(handleError);

    notFoundError(
      this.prisma.deck.findUnique({ where: { id } }),
      `this deck (${id})`,
    );

    return { message: 'Sucessfully deleted' };
  }
}
