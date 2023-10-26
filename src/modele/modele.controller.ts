import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { addModeleDto } from './dto/add-modele.dto';
import { Modele } from './entities/modele.entity';
import { ModeleService } from './modele.service';

@Controller('modele')
export class ModeleController {
  constructor(private readonly modeleService: ModeleService) {}
  @Get()
  getAll(): Promise<Modele[]> {
    return this.modeleService.findAll();
  }

  @Get('/etat')
  getByEtat(): Promise<Modele[]> {
    return this.modeleService.findByEtat();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<Modele> {
    return this.modeleService.read(id);
  }

  @Post()
  create(@Body() addmodeleDto: addModeleDto): Promise<Modele> {
    return this.modeleService.create(addmodeleDto);
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() addmodeleDto: addModeleDto,
  ): Promise<Modele> {
    return this.modeleService.update(id, addmodeleDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<Modele> {
    return this.modeleService.delete(id);
  }
}
