import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { CreatePackDto } from './dto/create-pack.dto';
import { PackService } from './user-to-card.service';

@ApiTags('pack')
@Controller('pack')
export class PackController {
  constructor(private readonly packService: PackService) {}

  @ApiOperation({
    summary: 'Generate a pack of cards',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreatePackDto, @LoggedUser() user: User) {
    return this.packService.create(dto, user);
  }
}
