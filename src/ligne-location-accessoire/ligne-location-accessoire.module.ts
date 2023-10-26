import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LigneLocationAccessoire } from './entities/ligne-location-accessoire.entity';
import { LigneLocationAccessoireController } from './ligne-location-accessoire.controller';
import { LigneLocationAccessoireService } from './ligne-location-accessoire.service';

@Module({
  imports: [TypeOrmModule.forFeature([LigneLocationAccessoire])],
  controllers: [LigneLocationAccessoireController],
  providers: [LigneLocationAccessoireService],
})
export class LigneLocationAccessoireModule {}
