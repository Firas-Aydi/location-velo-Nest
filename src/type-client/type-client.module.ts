import { Module } from '@nestjs/common';
import { TypeClientController } from './type-client.controller';
import { TypeClientService } from './type-client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeClient } from './entities/type-client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeClient])],
  controllers: [TypeClientController],
  providers: [TypeClientService],
})
export class TypeClientModule {}
