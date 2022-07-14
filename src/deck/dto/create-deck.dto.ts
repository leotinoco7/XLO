import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateDeckDto {
  @ApiProperty({
    description: 'Name your deck',
    example: 'The Best of the best',
  })
  @IsUUID()
  utcId: string;
}
