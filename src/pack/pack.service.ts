import { Injectable } from '@nestjs/common';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';

@Injectable()
export class PackService {
  create(dto: CreatePackDto) {
    return 'This action adds a new pack';
  }

  findAll() {
    return `This action returns all pack`;
  }

  findOne(id: string) {
    return `This action returns a #${id} pack`;
  }

  update(id: string, dto: UpdatePackDto) {
    return `This action updates a #${id} pack`;
  }

  delete(id: string) {
    return `This action removes a #${id} pack`;
  }
}
