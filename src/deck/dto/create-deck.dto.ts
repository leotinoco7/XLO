import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreateDeckDto {
  @ApiProperty({
    description: 'Name your deck',
    example: 'The Best of the bests',
  })
  @IsString()
  @Length(3, 25)
  name: string;

  @ApiProperty({
    description: 'Attack power from deck',
    example: 17,
  })
  @IsInt()
  @IsPositive()
  deckAttack: number;

  @ApiProperty({
    description: 'Deck´s Card quantity',
    example: 6,
  })
  @IsInt()
  @IsPositive()
  cardQuantity: number;

  @ApiProperty({
    description: 'Defense power from deck',
    example: 23,
  })
  @IsInt()
  @IsPositive()
  deckDefense: number;
}
