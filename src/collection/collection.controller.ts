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
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@ApiTags('collection')
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @ApiOperation({
    summary: 'Admin - Create a collection',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreateCollectionDto, @LoggedUser() user: User) {
    return this.collectionService.create(dto, user.isAdmin);
  }

  @ApiOperation({
    summary: 'List all the collections',
  })
  @Get()
  findAll() {
    return this.collectionService.findAll();
  }

  @ApiOperation({
    summary: 'List a collection by ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(id);
  }

  @ApiOperation({
    summary: 'Admin - Edit a collection by ID',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCollectionDto,
    @LoggedUser() user: User,
  ) {
    return this.collectionService.update(id, dto, user.isAdmin);
  }

  @ApiOperation({
    summary: 'Admin - Remove a collection by ID',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: string, @LoggedUser() user: User) {
    return this.collectionService.delete(id, user.isAdmin);
  }
}
