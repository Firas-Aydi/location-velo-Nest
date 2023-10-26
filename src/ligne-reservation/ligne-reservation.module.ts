import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LigneReservation } from './entities/ligne-reservation.entity';
import { LigneReservationController } from './ligne-reservation.controller';
import { LigneReservationService } from './ligne-reservation.service';

@Module({
  imports: [TypeOrmModule.forFeature([LigneReservation])],
  controllers: [LigneReservationController],
  providers: [LigneReservationService],
})
export class LigneReservationModule {}
