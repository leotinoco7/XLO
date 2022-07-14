import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { isAdmin } from 'src/utils/is-admin.util';
import { notFoundError } from 'src/utils/not-found.util';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCollectionDto, loggedUser) {
    isAdmin(loggedUser);

    const data: Prisma.CollectionCreateInput = {
      name: dto.name,
      cardNumber: dto.cardNumber,
    };

    return await this.prisma.collection.create({ data }).catch(handleError);
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

  async update(id: string, dto: UpdateCollectionDto, loggedUser) {
    isAdmin(loggedUser);

    const data: Prisma.UserUpdateInput = { ...dto };

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

  async delete(id: string, loggedUser) {
    isAdmin(loggedUser);

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
