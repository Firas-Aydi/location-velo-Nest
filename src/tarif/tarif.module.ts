import { Module } from '@nestjs/common';
import { TarifService } from './tarif.service';
import { TarifController } from './tarif.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarif } from './entities/tarif.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarif])],
  providers: [TarifService],
  controllers: [TarifController],
})
export class TarifModule {}
