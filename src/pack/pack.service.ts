import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { notFoundError } from 'src/utils/not-found.util';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';

@Injectable()
export class PackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePackDto) {
    const pack = await this.prisma.pack
      .create({ data: dto })
      .catch(handleError);

    if (pack.price < 1 || pack.quantity < 1) {
      throw new BadRequestException('Please select a positive value');
    }

    return pack;
  }

  async findAll() {
    const data = await this.prisma.pack.findMany().catch(handleError);

    notFoundError(data, 'the packs');

    return data;
  }

  async findOne(id: string) {
    const data = await this.prisma.pack
      .findUnique({ where: { id } })
      .catch(handleError);

    notFoundError(data, 'this pack');

    return data;
  }

  async update(id: string, dto: UpdatePackDto) {
    const pack = await this.prisma.pack
      .update({ where: { id }, data: dto })
      .catch(handleError);

    if (pack.price < 1 || pack.quantity < 1) {
      throw new BadRequestException('Please select a positive value');
    }

    return pack;
  }

  async delete(id: string) {
    const data = await this.prisma.pack
      .delete({ where: { id } })
      .catch(handleError);

    notFoundError(data, 'this pack');

    return { message: 'Sucessfully deleted' };
  }
}
