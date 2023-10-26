import { Module } from '@nestjs/common';
import { MarqueVeloController } from './marque-velo.controller';
import { MarqueVeloService } from './marque-velo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarqueVelo } from './entities/marque-velo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MarqueVelo])],
  controllers: [MarqueVeloController],
  providers: [MarqueVeloService],
})
export class MarqueVeloModule {}
