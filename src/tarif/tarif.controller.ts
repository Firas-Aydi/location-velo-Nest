import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { addTarifDto } from './dto/add-tarif.dto';
import { Tarif } from './entities/tarif.entity';
import { TarifService } from './tarif.service';
@Controller('tarif')
export class TarifController {
  constructor(private readonly tarifService: TarifService) {}
  @Get()
  getAll(): Promise<Tarif[]> {
    return this.tarifService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<Tarif> {
    return this.tarifService.read(id);
  }

  @Post()
  create(@Body() addtarifDto: addTarifDto): Promise<Tarif> {
    return this.tarifService.create(addtarifDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() addtarifDto: addTarifDto,
  ): Promise<Tarif> {
    return this.tarifService.update(id, addtarifDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<Tarif> {
    return this.tarifService.delete(id);
  }
}
