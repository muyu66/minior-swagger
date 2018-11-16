import { ApiModelProperty } from '@nestjs/swagger';
import { ResponseBookDto } from './book.dto';

export class ResponseUserDto {
  @ApiModelProperty({ description: 'User ID' })
  id: string;
  @ApiModelProperty({ description: 'User Name' })
  name: string;
  @ApiModelProperty({ description: 'Books', type: ResponseBookDto, isArray: true })
  books?: ResponseBookDto[];
}