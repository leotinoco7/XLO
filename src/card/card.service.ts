import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { notFoundError } from 'src/utils/not-found.util';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateCardDto) {
    return await this.prisma.card.create({ data: dto });
  }

  async findAll(): Promise<Card[]> {
    const data = await this.prisma.card.findMany();
    if (data.length === 0) {
      throw new NotFoundException('There are no cards stored in the database!');
    }
    return data;
  }

  async findOne(id: string) {
    const data = await this.prisma.card.findUnique({ where: { id } });
    notFoundError(data, 'this card');
    return data;
  }

  async update(id: string, dto: UpdateCardDto) {
    const data: Partial<Card> = { ...dto };
    return await this.prisma.card.update({ where: { id }, data });
  }

  async delete(id: string) {
    const data = await this.prisma.card.delete({ where: { id } });
    notFoundError(data, 'this card');
    return data;
  }
}
