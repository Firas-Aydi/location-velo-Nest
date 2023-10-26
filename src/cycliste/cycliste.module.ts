import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CyclisteController } from './cycliste.controller';
import { CyclisteService } from './cycliste.service';
import { Cycliste } from './entities/cycliste.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cycliste])],
  controllers: [CyclisteController],
  providers: [CyclisteService],
})
export class CyclisteModule {}
