import { Module } from '@nestjs/common';
import { PackService } from './user-to-card.service';
import { PackController } from './user-to-card.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [PackController],
  providers: [PackService],
})
export class PackModule {}
