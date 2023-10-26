import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { addReparationDto } from './dto/add-reparation.dto';
import { Reparation } from './entities/reparation.entity';
import { ReparationService } from './reparation.service';

@Controller('reparation')
export class ReparationController {
  constructor(private readonly reparationService: ReparationService) {}
  @Get()
  getAll(): Promise<Reparation[]> {
    return this.reparationService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<Reparation> {
    return this.reparationService.read(id);
  }

  @Post()
  create(@Body() addreparationDto: addReparationDto): Promise<Reparation> {
    return this.reparationService.create(addreparationDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() addreparationDto: addReparationDto,
  ): Promise<Reparation> {
    return this.reparationService.update(id, addreparationDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<Reparation> {
    return this.reparationService.delete(id);
  }
}
