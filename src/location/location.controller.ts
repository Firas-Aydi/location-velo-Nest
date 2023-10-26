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
  import { addLocationDto } from './dto/add-location.dto';
  import { Location } from './entities/location.entity';
  import { LocationService } from './location.service';

  @Controller('location')
  export class LocationController {
    constructor(private readonly locationService: LocationService) {}
    @Get()
    getAll(): Promise<Location[]> {
      return this.locationService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Location> {
      return this.locationService.read(id);
    }
  
    @Post()
    create(@Body() addLocationDto: addLocationDto): Promise<Location> {
      return this.locationService.create(addLocationDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addLocationDto: addLocationDto): Promise<Location> {
      return this.locationService.update(id, addLocationDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Location> {
      return this.locationService.delete(id);
    }
  }
  