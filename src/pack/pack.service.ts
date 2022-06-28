import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { notFoundError } from 'src/utils/not-found.util';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';

@Injectable()
export class PackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePackDto) {
    return await this.prisma.pack.create({ data: dto });
  }

  async findAll() {
    const data = await this.prisma.pack.findMany();

    notFoundError(data, 'the packs');

    return data;
  }

  async findOne(id: string) {
    const data = await this.prisma.pack.findUnique({ where: { id } });

    notFoundError(data, 'this pack');

    return data;
  }

  async update(id: string, dto: UpdatePackDto) {
    return await this.prisma.pack.update({ where: { id }, data: dto });
  }

  async delete(id: string) {
    const data = await this.prisma.pack.delete({ where: { id } });

    notFoundError(data, 'this pack');

    return data;
  }
}
