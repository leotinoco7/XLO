import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreatePackDto {
  @IsUUID()
  @ApiProperty({
    description: 'A Collection UUID',
    example: '--- UUID here ---',
  })
  collectionId: string;
}
