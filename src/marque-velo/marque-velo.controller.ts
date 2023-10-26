import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { addMarqueVeloDto } from './dto/add-marque-velo.dto';
import { MarqueVelo } from './entities/marque-velo.entity';
import { MarqueVeloService } from './marque-velo.service';
@Controller('marque-velo')
export class MarqueVeloController {
  constructor(private readonly marqueVeloService: MarqueVeloService) {}
  @Get()
  getAll(): Promise<MarqueVelo[]> {
    return this.marqueVeloService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<MarqueVelo> {
    return this.marqueVeloService.read(id);
  }

  @Post()
  create(@Body() addmarqueVeloDto: addMarqueVeloDto): Promise<MarqueVelo> {
    return this.marqueVeloService.create(addmarqueVeloDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() addmarqueVeloDto: addMarqueVeloDto,
  ): Promise<MarqueVelo> {
    return this.marqueVeloService.update(id, addmarqueVeloDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<MarqueVelo> {
    return this.marqueVeloService.delete(id);
  }
}
