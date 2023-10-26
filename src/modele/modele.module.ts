import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modele } from './entities/modele.entity';
import { ModeleController } from './modele.controller';
import { ModeleService } from './modele.service';
import { AppModule } from 'src/app.module';

@Module({
  imports: [forwardRef(() => AppModule), TypeOrmModule.forFeature([Modele])],
  controllers: [ModeleController],
  providers: [ModeleService],
})
export class ModeleModule {}
