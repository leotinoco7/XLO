import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreatePackDto {
  @ApiProperty({
    description: 'Collection id',
    example: '-- UUID here --',
  })
  @IsUUID()
  collectionId: string;
}
