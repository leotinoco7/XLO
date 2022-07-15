import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { CreatePackDto } from './dto/create-pack.dto';
import { PackService } from './user-to-card.service';

@ApiTags('pack')
@Controller('pack')
export class PackController {
  constructor(private readonly packService: PackService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  create(@Body() collectionId: CreatePackDto, @LoggedUser() user: User) {
    return this.packService.create(collectionId, user);
  }
}
