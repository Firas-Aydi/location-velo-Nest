/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import { addAccessoireDto } from './dto/add-accessoire.dto';
  import { Accessoire } from './entities/accessoire.entity';
  import { AccessoireService } from './accessoire.service';
  
  @Controller('accessoire')
  export class AccessoireController {
    constructor(private readonly accessoireService: AccessoireService) {}
    @Get()
    getAll(): Promise<Accessoire[]> {
      return this.accessoireService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Accessoire> {
      return this.accessoireService.read(id);
    }
  
    @Post()
    create(@Body() addAccessoireDto: addAccessoireDto): Promise<Accessoire> {
      return this.accessoireService.create(addAccessoireDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addAccessoireDto: addAccessoireDto): Promise<Accessoire> {
      return this.accessoireService.update(id, addAccessoireDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Accessoire> {
      return this.accessoireService.delete(id);
    }
  }
  