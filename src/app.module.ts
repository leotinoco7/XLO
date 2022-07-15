import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DeckModule } from './deck/deck.module';
import { CardModule } from './card/card.module';
import { CollectionModule } from './collection/collection.module';
import { PackModule } from './user-to-card/user-to-card.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    DeckModule,
    CardModule,
    CollectionModule,
    PackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
