import { ApiModelProperty } from '@nestjs/swagger';

export class ResponseUserRightDto {
  @ApiModelProperty({ description: 'User ID' })
  id: string;
  @ApiModelProperty({ description: 'User Name' })
  name: string;
}