import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { addTypeClientDto } from './dto/add-type-client.dto';
import { TypeClient } from './entities/type-client.entity';
import { TypeClientService } from './type-client.service';

@Controller('type-client')
export class TypeClientController {
  constructor(private readonly typeClientService: TypeClientService) {}
  @Get()
  getAll(): Promise<TypeClient[]> {
    return this.typeClientService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<TypeClient> {
    return this.typeClientService.read(id);
  }

  @Post()
  create(@Body() addtypeClientDto: addTypeClientDto): Promise<TypeClient> {
    return this.typeClientService.create(addtypeClientDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() addtypeClientDto: addTypeClientDto,
  ): Promise<TypeClient> {
    return this.typeClientService.update(id, addtypeClientDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<TypeClient> {
    return this.typeClientService.delete(id);
  }
}
