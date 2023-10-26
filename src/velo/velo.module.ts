import { Module } from '@nestjs/common';
import { VeloController } from './velo.controller';
import { VeloService } from './velo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Velo } from './entities/velo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Velo])],
  controllers: [VeloController],
  providers: [VeloService],
})
export class VeloModule {}
