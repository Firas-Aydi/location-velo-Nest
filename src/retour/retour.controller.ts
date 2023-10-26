// /* eslint-disable prettier/prettier */
// import {
//     Body,
//     Controller,
//     Delete,
//     Get,
//     Param,
//     Post,
//     Put,
//   } from '@nestjs/common';
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   import { addRetourDto } from './dto/add-retour.dto';
//   import { Retour } from './entities/retour.entity';
//   import { RetourService } from './retour.service';

//   @Controller('retour')
//   export class RetourController {
//     constructor(private readonly retoursService: RetourService) {}
//     @Get()
//     getAll(): Promise<Retour[]> {
//       return this.retoursService.findAll();
//     }

//     @Get('/:id')
//     getById(@Param('id') id: number): Promise<Retour> {
//       return this.retoursService.read(id);
//     }

//     @Post()
//     create(@Body() addRetourDto: addRetourDto): Promise<Retour> {
//       return this.retoursService.create(addRetourDto);
//     }

//     @Put('/:id')
//     update(@Param('id') id: number, @Body() addRetourDto: addRetourDto): Promise<Retour> {
//       return this.retoursService.update(id, addRetourDto);
//     }

//     @Delete('/:id')
//     delete(@Param('id') id: number): Promise<Retour> {
//       return this.retoursService.delete(id);
//     }
//   }
