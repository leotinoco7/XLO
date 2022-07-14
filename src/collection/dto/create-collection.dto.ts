import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCollectionDto {
  @ApiProperty({
    description: 'Collection name',
    example: 'Winter 2022',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Card number',
    example: '7',
  })
  @IsNumber()
  @IsNotEmpty()
  cardNumber: number;
}
