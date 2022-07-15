import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, Rarity, User } from '@prisma/client';
import { map } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePackDto } from './dto/create-pack.dto';

@Injectable()
export class PackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePackDto, loggedUser: User ) {
    const collection = await this.prisma.card.findMany({
      where: { collectionId: dto.collectionId},
    });

    function createPack(collection, qnt) {
      const common = collection.map(function (card){ if(card.rarity === 'COMMON'){return card}})
      const rare = collection.map(function (card){ if(card.rarity === 'RARE'){return card}})
      const legendary = collection.map(function (card){ if(card.rarity === 'LEGENDARY'){return card}})

      if(common.length == 0 || rare.length == 0 || legendary.length == 0){
        throw new BadRequestException()
      }
      const pack = []

      for(let i = 0; i < qnt ; i++){
        const rarity = Math.floor(Math.random() * 100) + 1;
        
        
        if(rarity >= 95){
          pack.push(legendary[Math.floor(Math.random() * legendary.length) + 1])
        }else if ( rarity >= 60 ){
          ache uma carta rara
        }else {
          ache uma cara comun
        }
      }

      return pack
    }
    for(card of pack){
    const data: Prisma.UserToCardCreateInput = {
      user:{
        connect:{
          id: loggedUser.id
        }
      },
      card: {
        connect: {
          id: card
        }
      }
    }
    
    await this.prisma.userToCard.create({data})
  }
  }
}
