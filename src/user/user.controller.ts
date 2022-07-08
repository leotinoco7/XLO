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
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('create-user')
  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // -----------------------------------------------ADMIN------------------------------------------------

  @ApiTags('user-admin')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('user')
  findAll(@LoggedUser() user: User) {
    return this.usersService.findAll(user.isAdmin);
  }

  @ApiTags('user-admin')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('user/:id')
  findOne(@LoggedUser() user: User, @Param('id') id: string) {
    return this.usersService.findOne(id, user.isAdmin);
  }

  @ApiTags('user-admin')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete('user/:id')
  remove(@LoggedUser() user: User, @Param('id') id: string) {
    return this.usersService.remove(id, user.isAdmin);
  }

  // -----------------------------------------------MY ACCOUNT------------------------------------------------

  @ApiTags('user-my-account')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('my-account')
  findMyAcc(@LoggedUser() user: User) {
    return this.usersService.findMyAcc(user.id);
  }

  @ApiTags('user-my-account')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch('my-account')
  update(@LoggedUser() user: User, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateMyAcc(user.id, updateUserDto);
  }

  @ApiTags('user-my-account')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch('my-account')
  delete(@LoggedUser() user: User) {
    return this.usersService.deleteMyAcc(user.id);
  }
}
