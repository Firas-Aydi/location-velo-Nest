// /* eslint-disable prettier/prettier */
// import {
//     Body,
//     Controller,
//     Delete,
//     Get,
//     Param,
//     Post,
//     Put,
//   } from '@nestjs/common';
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   import { addUserDto } from './dto/add-user.dto';
//   import { User } from './entities/user.entity';
//   import { UserService } from './user.service';
//   @Controller('user')
//   export class UserController {
//     constructor(private readonly userService: UserService) {}
//     @Get()
//     getAll(): Promise<User[]> {
//       return this.userService.findAll();
//     }

//     @Get('/:id')
//     getById(@Param('id') id: number) {
//       return this.userService.read(id);
//     }

//     @Post()
//     create(@Body() addUserDto: addUserDto) {
//       return this.userService.create(addUserDto);
//     }

//     @Put('/:id')
//     update(@Param('id') id: number, @Body() addUserDto: addUserDto): Promise<User> {
//       return this.userService.update(id, addUserDto);
//     }

//     @Delete('/:id')
//     delete(@Param('id') id: number): Promise<User> {
//       return this.userService.delete(id);
//     }
//   }
