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
import { addLigneReservationDto } from './dto/add-ligne-reservation.dto';
import { LigneReservation } from './entities/ligne-reservation.entity';
import { LigneReservationService } from './ligne-reservation.service';

@Controller('ligne-Reservation')
export class LigneReservationController {
  constructor(private readonly ligneReservationService: LigneReservationService) {}
  @Get()
  getAll(): Promise<LigneReservation[]> {
    return this.ligneReservationService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<LigneReservation> {
    return this.ligneReservationService.read(id);
  }

  @Post()
  create(
    @Body() addLigneReservationDto: addLigneReservationDto,
  ): Promise<LigneReservation> {
    return this.ligneReservationService.create(addLigneReservationDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() addLigneReservationDto: addLigneReservationDto,
  ): Promise<LigneReservation> {
    return this.ligneReservationService.update(id, addLigneReservationDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<LigneReservation> {
    return this.ligneReservationService.delete(id);
  }
}
