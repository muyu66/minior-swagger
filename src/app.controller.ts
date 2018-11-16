import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseBookDto } from './dto/book.dto';
import { ResponseUserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseUserRightDto } from './dto/user_right.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(): string {
    return this.appService.root();
  }

  @ApiOperation({ title: 'getBooks' })
  @ApiResponse({ status: 200, type: ResponseBookDto, isArray: true })
  @Get('books')
  getBooks(): ResponseBookDto[] {
    return [];
  }

  @ApiOperation({ title: 'getUsers' })
  @ApiResponse({ status: 200, type: ResponseUserDto, isArray: true })
  @Get('users')
  getUsers(): ResponseUserDto[] {
    return [];
  }

  @ApiOperation({ title: 'getUserRights' })
  @ApiResponse({ status: 200, type: ResponseUserRightDto, isArray: true })
  @Get('user_rights')
  getUserRights(): ResponseUserRightDto[] {
    return [];
  }
}
