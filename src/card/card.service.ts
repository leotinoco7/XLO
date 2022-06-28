import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateCardDto) {
    return await this.prisma.card.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.card.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.card.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateCardDto) {
    const data: Partial<Card> = { ...dto };
    return await this.prisma.card.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.card.delete({
      where: {
        id,
      },
    });
    return { message: 'deletado com sucesso' };
  }
}
