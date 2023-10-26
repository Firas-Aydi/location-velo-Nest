import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DommageController } from './dommage.controller';
import { DommageService } from './dommage.service';
import { Dommage } from './entities/dommage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dommage])],
  controllers: [DommageController],
  providers: [DommageService],
})
export class DommageModule {}
