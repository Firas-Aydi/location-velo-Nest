import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { addVeloDto } from './dto/add-velo.dto';
import { Velo } from './entities/velo.entity';
import { VeloService } from './velo.service';

@Controller('velo')
export class VeloController {
  constructor(private readonly veloService: VeloService) {}
  @Get()
  getAll(): Promise<Velo[]> {
    return this.veloService.findAll();
  }

  @Get('/etat')
  getByEtat(): Promise<Velo[]> {
    return this.veloService.findByEtat();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<Velo> {
    return this.veloService.read(id);
  }

  @Post()
  create(@Body() addveloDto: addVeloDto): Promise<Velo> {
    return this.veloService.create(addveloDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() addVeloDto: addVeloDto,
  ): Promise<Velo> {
    return this.veloService.update(id, addVeloDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<Velo> {
    return this.veloService.delete(id);
  }
}
