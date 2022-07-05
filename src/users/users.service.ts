import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { notFoundError } from 'src/utils/not-found.util';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const userList = await this.prisma.user.findMany();

    const userEmail = userList.filter((user) => user.email === dto.email);

    const userCPF = userList.filter((user) => user.CPF === dto.CPF);

    if (userEmail.length > 0 || userCPF.length > 0) {
      throw new BadRequestException('This e-mail/CPF is already in use.');
    }

    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };

    return await this.prisma.user
      .create({
        data,
        select: {
          name: true,
          email: true,
          CPF: true,
          isAdmin: true,
          password: false,
          ranking: true,
          imageUrl: false,
          balance: true,
        },
      })
      .catch(handleError);
  }

  async findAll() {
    return await this.prisma.user
      .findMany({
        select: {
          id: true,
          name: true,
          email: true,
          CPF: false,
          isAdmin: true,
          password: false,
          ranking: true,
          balance: true,
          imageUrl: false,
        },
      })
      .catch(handleError);
  }

  async findOne(id: string) {
    const user = await this.prisma.user
      .findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          CPF: true,
          isAdmin: true,
          password: false,
          ranking: true,
          balance: true,
          imageUrl: true,
        },
      })
      .catch(handleError);

    notFoundError(user, `this user (${id})`);

    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    const data: Partial<User> = { ...dto };

    notFoundError(
      await this.prisma.user.findUnique({ where: { id } }),
      `this user (${id})`,
    );

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user
      .update({
        where: { id },
        data,
        select: {
          id: true,
          name: true,
          email: true,
          CPF: true,
          isAdmin: true,
          password: false,
          ranking: true,
          balance: true,
          imageUrl: true,
        },
      })
      .catch(handleError);
  }

  async remove(id: string) {
    notFoundError(
      await this.prisma.user.findUnique({ where: { id } }),
      `this user (${id})`,
    );

    await this.prisma.user
      .delete({
        where: {
          id,
        },
      })
      .catch(handleError);
    return { message: 'User successfully deleted!' };
  }
}
