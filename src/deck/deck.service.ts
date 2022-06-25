import { Injectable } from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@Injectable()
export class DeckService {
  create(dto: CreateDeckDto) {
    return 'This action adds a new deck';
  }

  findAll() {
    return `This action returns all deck`;
  }

  findOne(id: string) {
    return `This action returns a #${id} deck`;
  }

  update(id: string, dto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  delete(id: string) {
    return `This action removes a #${id} deck`;
  }
}
