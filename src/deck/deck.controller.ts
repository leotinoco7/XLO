import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DeckService } from './deck.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

@ApiTags('deck')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  create(@Body() dto: CreateDeckDto) {
    return this.deckService.create(dto);
  }

  @Get()
  findAll() {
    return this.deckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deckService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDeckDto) {
    return this.deckService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deckService.delete(id);
  }
}
