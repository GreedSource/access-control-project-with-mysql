import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
export class RefreshTokenDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'token',
  })
  readonly refresh: string;
}
