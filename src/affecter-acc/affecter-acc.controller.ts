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
  import { addAffecterAccDto } from './dto/add-Affecter-acc.dto';
  import { Affecter_acc } from './entities/affecter-acc.entity';
  import { AffecterAccService } from './affecter-acc.service';
  
  @Controller('affecter-acc')
  export class AffecterAccController {
    constructor(private readonly affecterAccService: AffecterAccService) {}
    @Get()
    getAll(): Promise<Affecter_acc[]> {
      return this.affecterAccService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Affecter_acc> {
      return this.affecterAccService.read(id);
    }
  
    @Post()
    create(@Body() addAffecterAccDto: addAffecterAccDto): Promise<Affecter_acc> {
      return this.affecterAccService.create(addAffecterAccDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addAffecterAccDto: addAffecterAccDto): Promise<Affecter_acc> {
      return this.affecterAccService.update(id, addAffecterAccDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Affecter_acc> {
      return this.affecterAccService.delete(id);
    }
  }
  