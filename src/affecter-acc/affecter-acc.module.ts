import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AffecterAccController } from './affecter-acc.controller';
import { AffecterAccService } from './affecter-acc.service';
import { Affecter_acc } from './entities/affecter-acc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Affecter_acc])],
  controllers: [AffecterAccController],
  providers: [AffecterAccService],
})
export class AffecterAccModule {}
