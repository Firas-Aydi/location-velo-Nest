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
  import { addDommageDto } from './dto/add-dommage.dto';
  import { Dommage } from './entities/dommage.entity';
  import { DommageService } from './dommage.service';
  
  @Controller('dommage')
  export class DommageController {
    constructor(private readonly dommageService: DommageService) {}
    @Get()
    getAll(): Promise<Dommage[]> {
      return this.dommageService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Dommage> {
      return this.dommageService.read(id);
    }
  
    @Post()
    create(@Body() addDommageDto: addDommageDto): Promise<Dommage> {
      return this.dommageService.create(addDommageDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addDommageDto: addDommageDto): Promise<Dommage> {
      return this.dommageService.update(id, addDommageDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Dommage> {
      return this.dommageService.delete(id);
    }
  }