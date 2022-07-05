import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreatePackDto {
  @ApiProperty({
    description: 'Amount of cards in the pack',
    example: '15',
  })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    description: 'Price of the pack',
    example: '12.99',
  })
  @IsNumber()
  @IsPositive()
  price: number;
}
