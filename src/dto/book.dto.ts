import { ApiModelProperty } from '@nestjs/swagger';
import { ResponseUserDto } from './user.dto';

export class ResponseBookDto {
  @ApiModelProperty({ description: 'Book ID' })
  id: string;
  @ApiModelProperty({ description: 'Book Name' })
  name: string;
  @ApiModelProperty({ description: 'Users', type: ResponseUserDto, isArray: true })
  users?: ResponseUserDto[];
}