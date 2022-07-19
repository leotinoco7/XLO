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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiTags('create-user')
  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // -----------------------------------------------ADMIN------------------------------------------------

  @ApiOperation({
    summary: 'Admin - List all users',
  })
  @ApiTags('user-admin')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('user')
  findAll(@LoggedUser() user: User) {
    return this.usersService.findAll(user.isAdmin);
  }

  @ApiOperation({
    summary: 'Admin - List a user by ID',
  })
  @ApiTags('user-admin')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('user/:id')
  findOne(@LoggedUser() user: User, @Param('id') id: string) {
    return this.usersService.findOne(id, user.isAdmin);
  }

  @ApiOperation({
    summary: 'Admin - Edit a user by ID',
  })
  @ApiTags('user-admin')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete('user/:id')
  remove(@LoggedUser() user: User, @Param('id') id: string) {
    return this.usersService.remove(id, user.isAdmin);
  }

  // -----------------------------------------------MY ACCOUNT------------------------------------------------

  @ApiOperation({
    summary: "Get logged user's account",
  })
  @ApiTags('user-my-account')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('my-account')
  findMyAcc(@LoggedUser() user: User) {
    return this.usersService.findMyAcc(user.id);
  }

  @ApiOperation({
    summary: "Get logged user's album",
  })
  @ApiTags('user-my-account')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get('my-account/album')
  findMyAlbum(@LoggedUser() user: User) {
    return this.usersService.findMyAlbum(user.id);
  }

  @ApiOperation({
    summary: "Edit logged user's account",
  })
  @ApiTags('user-my-account')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch('my-account')
  update(@Body() updateUserDto: UpdateUserDto, @LoggedUser() user: User) {
    return this.usersService.updateMyAcc(updateUserDto, user.id);
  }

  @ApiOperation({
    summary: "Delete logged user's account",
  })
  @ApiTags('user-my-account')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete('my-account')
  delete(@LoggedUser() user: User) {
    return this.usersService.deleteMyAcc(user.id);
  }
}
