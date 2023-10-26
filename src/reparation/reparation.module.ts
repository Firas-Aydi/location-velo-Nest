import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reparation } from './entities/reparation.entity';
import { ReparationController } from './reparation.controller';
import { ReparationService } from './reparation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reparation])],
  controllers: [ReparationController],
  providers: [ReparationService],
})
export class ReparationModule {}
