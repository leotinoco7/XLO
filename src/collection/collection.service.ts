import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import * as bcrypt from 'bcrypt';
import { Collection } from './entities/collection.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCollectionDto: CreateCollectionDto) {
    return await this.prisma.collection.create;
  }

  async findAll() {
    return await this.prisma.collection.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.collection.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, dto: UpdateCollectionDto) {
    const data: Partial<Collection> = { ...dto };
    return this.prisma.collection.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.collection.delete({
      where: {
        id,
      },
    });
    return { message: 'deletado com sucesso' };
  }
}
