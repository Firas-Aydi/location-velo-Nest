/* eslint-disable prettier/prettier */
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
//   import { addClientDto } from './dto/add-client.dto';
//   import { Client } from './entities/client.entity';
//   import { ClientService } from './client.service';
  
//   @Controller('client')
//   export class ClientController {
//     constructor(private readonly clientervice: ClientService) {}
//     @Get()
//     getAll(): Promise<Client[]> {
//       return this.clientervice.findAll();
//     }
  
//     @Get('/:id')
//     getByid(@Param('id') id: number): Promise<Client> {
//       return this.clientervice.read(id);
//     }
  
//     @Post()
//     create(@Body() addClientDto: addClientDto) {
//       return this.clientervice.create(addClientDto);
//     }
  
//     @Put('/:id')
//     update(@Param('id') id: number, @Body() addClientDto: addClientDto): Promise<Client> {
//       return this.clientervice.update(id, addClientDto);
//     }
  
//     @Delete('/:id')
//     delete(@Param('id') id: number): Promise<Client> {
//       return this.clientervice.delete(id);
//     }
//   }