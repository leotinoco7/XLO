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
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@ApiTags('collection')
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreateCollectionDto) {
    return this.collectionService.create(dto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.collectionService.findAll();
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCollectionDto) {
    return this.collectionService.update(id, dto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.collectionService.delete(id);
  }
}
