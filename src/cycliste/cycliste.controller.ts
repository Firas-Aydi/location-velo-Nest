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
  import { addCyclisteDto } from './dto/add-cycliste.dto';
  import { Cycliste } from './entities/cycliste.entity';
  import { CyclisteService } from './cycliste.service';
  
  @Controller('cycliste')
  export class CyclisteController {
    constructor(private readonly cyclisteService: CyclisteService) {}
    @Get()
    getAll(): Promise<Cycliste[]> {
      return this.cyclisteService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Cycliste> {
      return this.cyclisteService.read(id);
    }
  
    @Post()
    create(@Body() addCyclisteDto: addCyclisteDto): Promise<Cycliste> {
      return this.cyclisteService.create(addCyclisteDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addCyclisteDto: addCyclisteDto): Promise<Cycliste> {
      return this.cyclisteService.update(id, addCyclisteDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Cycliste> {
      return this.cyclisteService.delete(id);
    }
  }