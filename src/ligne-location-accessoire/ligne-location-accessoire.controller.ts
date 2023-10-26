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
  import { addLigneLocationAccessoireDto } from './dto/add-ligne-location-accessoire.dto';
  import { LigneLocationAccessoire } from './entities/ligne-location-accessoire.entity';
  import { LigneLocationAccessoireService } from './ligne-location-accessoire.service';
  
  @Controller('ligne-location-accessoire')
  export class LigneLocationAccessoireController {
    constructor(private readonly ligneLocationAccessoireService: LigneLocationAccessoireService) {}
    @Get()
    getAll(): Promise<LigneLocationAccessoire[]> {
      return this.ligneLocationAccessoireService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<LigneLocationAccessoire> {
      return this.ligneLocationAccessoireService.read(id);
    }
  
    @Post()
    create(@Body() addLigneLocationAccessoireDto: addLigneLocationAccessoireDto): Promise<LigneLocationAccessoire> {
      return this.ligneLocationAccessoireService.create(addLigneLocationAccessoireDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addLigneLocationAccessoireDto: addLigneLocationAccessoireDto): Promise<LigneLocationAccessoire> {
      return this.ligneLocationAccessoireService.update(id, addLigneLocationAccessoireDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<LigneLocationAccessoire> {
      return this.ligneLocationAccessoireService.delete(id);
    }
  }
  