import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateCardDto {
  @ApiProperty({
    description: 'Name of a card.',
    example: 'Pagani Huayra',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Type of the element in the card',
    example: 'Sports car',
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Card level of attack',
    example: 110,
  })
  @IsNumber()
  @IsPositive()
  cardAttack: number;

  @ApiProperty({
    description: 'Card level of defense',
    example: 95,
  })
  @IsNumber()
  @IsPositive()
  cardDef: number;

  @ApiProperty({
    description: 'Card rarity',
    example: 'common',
  })
  @IsString()
  rarity: string;
}
