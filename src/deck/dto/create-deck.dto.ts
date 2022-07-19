import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsUUID } from 'class-validator';

export class CreateDeckDto {
  @ApiProperty({
    description: 'Name your deck',
    example: 'The Best of the best',
  })
  @ArrayMaxSize(5)
  @IsUUID()
  utcId: string;
}
