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
  import { addLigneLocationDto } from './dto/add-ligne-location.dto';
  import { LigneLocation } from './entities/ligne-location.entity';
  import { LigneLocationService } from './ligne-location.service';
  
  @Controller('ligne-location')
  export class LigneLocationController {
    constructor(private readonly ligneReservationService: LigneLocationService) {}
    @Get()
    getAll(): Promise<LigneLocation[]> {
      return this.ligneReservationService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<LigneLocation> {
      return this.ligneReservationService.read(id);
    }
  
    @Post()
    create(@Body() addLigneLocationDto: addLigneLocationDto): Promise<LigneLocation> {
      return this.ligneReservationService.create(addLigneLocationDto);
    }
  
    @Put('/:id')
    update(
      @Param('id') id: number,
      @Body() addLigneLocationDto: addLigneLocationDto): Promise<LigneLocation> {
      return this.ligneReservationService.update(id, addLigneLocationDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<LigneLocation> {
      return this.ligneReservationService.delete(id);
    }
  }
  