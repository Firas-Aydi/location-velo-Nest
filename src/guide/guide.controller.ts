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
  import { addGuideDto } from './dto/add-guide.dto';
  import { Guide } from './entities/guide.entity';
  import { GuideService } from './guide.service';
  
  @Controller('guide')
  export class GuideController {
    constructor(private readonly guideService: GuideService) {}
    @Get()
    getAll(): Promise<Guide[]> {
      return this.guideService.findAll();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Guide> {
      return this.guideService.read(id);
    }
  
    @Post()
    create(@Body() addGuideDto: addGuideDto): Promise<Guide> {
      return this.guideService.create(addGuideDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addGuideDto: addGuideDto): Promise<Guide> {
      return this.guideService.update(id, addGuideDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Guide> {
      return this.guideService.delete(id);
    }
  }
  