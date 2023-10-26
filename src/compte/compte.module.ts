import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompteController } from './compte.controller';
import { CompteService } from './compte.service';
import { Compte } from './entities/compte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compte])],
  controllers: [CompteController],
  providers: [CompteService],
  exports: [CompteService],
})
export class CompteModule {}
