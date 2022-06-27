import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreatePackDto {
  @ApiProperty({
    description: '',
    example: 'link.com/image.jpg',
  })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    description: 'Users avatar',
    example: 'link.com/image.jpg',
  })
  @IsNumber()
  @IsPositive()
  price: number;
}
