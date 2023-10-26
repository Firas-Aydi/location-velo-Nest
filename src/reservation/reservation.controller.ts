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
  import { addReservationDto } from './dto/add-reservation.dto';
  import { Reservation } from './entities/reservation.entity';
  import { ReservationService } from './reservation.service';

  @Controller('reservation')
  export class ReservationController {
    constructor(private readonly reservationService: ReservationService) {}
    @Get()
    getAll(): Promise<Reservation[]> {
      return this.reservationService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Reservation> {
      return this.reservationService.read(id);
    }
  
    @Post()
    create(@Body() addReservationDto: addReservationDto): Promise<Reservation> {
      return this.reservationService.create(addReservationDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addReservationDto: addReservationDto): Promise<Reservation> {
      return this.reservationService.update(id, addReservationDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Reservation> {
      return this.reservationService.delete(id);
    }
  }
  