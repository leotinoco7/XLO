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
import { PackService } from './pack.service';
import { CreatePackDto } from './dto/create-pack.dto';
import { UpdatePackDto } from './dto/update-pack.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('pack')
@Controller('pack')
export class PackController {
  constructor(private readonly packService: PackService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreatePackDto) {
    return this.packService.create(dto);
  }

  @Get()
  findAll() {
    return this.packService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePackDto) {
    return this.packService.update(id, dto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.packService.delete(id);
  }
}
