import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import * as bcrypt from 'bcrypt';
import { Collection } from './entities/collection.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { notFoundError } from 'src/utils/not-found.util';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCollectionDto: CreateCollectionDto) {
    return await this.prisma.collection
      .create({ data: createCollectionDto })
      .catch(handleError);
  }

  async findAll() {
    return await this.prisma.collection.findMany().catch(handleError);
  }

  async findOne(id: string) {
    const collection = await this.prisma.collection
      .findUnique({
        where: {
          id,
        },
      })
      .catch(handleError);

    notFoundError(collection, 'the collections');
    return collection;
  }

  async update(id: string, dto: UpdateCollectionDto) {
    const data: Partial<Collection> = { ...dto };

    notFoundError(
      this.prisma.collection.findUnique({ where: { id } }),
      `this collection (${id})`,
    );

    return this.prisma.collection
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.prisma.collection
      .delete({
        where: {
          id,
        },
      })
      .catch(handleError);
    notFoundError(
      this.prisma.collection.findUnique({ where: { id } }),
      `this collection (${id})`,
    );
    return { message: 'Sucessfully deleted' };
  }
}
