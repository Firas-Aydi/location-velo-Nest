import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LigneLocation } from './entities/ligne-location.entity';
import { LigneLocationController } from './ligne-location.controller';
import { LigneLocationService } from './ligne-location.service';

@Module({
  imports: [TypeOrmModule.forFeature([LigneLocation])],
  controllers: [LigneLocationController],
  providers: [LigneLocationService],
})
export class LigneLocationModule {}
