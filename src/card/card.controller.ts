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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@ApiTags('card')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  @ApiOperation({
    summary: 'Create a card',
  })
  create(@Body() dto: CreateCardDto, @LoggedUser() user: User) {
    return this.cardService.create(dto, user.isAdmin);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all the cards in a collection',
  })
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a single card by its ID',
  })
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({
    summary: 'Edit a card by ID',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCardDto,
    @LoggedUser() user: User,
  ) {
    return this.cardService.update(id, dto, user.isAdmin);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({
    summary: 'Remove a card by its ID',
  })
  delete(@Param('id') id: string, @LoggedUser() user: User) {
    return this.cardService.delete(id, user.isAdmin);
  }
}
