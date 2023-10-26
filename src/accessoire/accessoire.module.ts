import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessoireController } from './accessoire.controller';
import { AccessoireService } from './accessoire.service';
import { Accessoire } from './entities/accessoire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accessoire])],
  controllers: [AccessoireController],
  providers: [AccessoireService],
})
export class AccessoireModule {}
