import { CreateUserDto } from '@/user/dto/createUserdto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(createUserDto): CreateUserDto {
    return createUserDto;
  }
}
