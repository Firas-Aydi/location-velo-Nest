import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { VeloModule } from './velo/velo.module';
import { TypeClientModule } from './type-client/type-client.module';
import { MarqueVeloModule } from './marque-velo/marque-velo.module';
import { TarifModule } from './tarif/tarif.module';
import { GuideModule } from './guide/guide.module';
import { ReparationModule } from './reparation/reparation.module';
import { AccessoireModule } from './accessoire/accessoire.module';
import { CompteModule } from './compte/compte.module';
import { ReservationModule } from './reservation/reservation.module';
// import { RetourModule } from './retour/retour.module';
import { DommageModule } from './dommage/dommage.module';
// import { ClientModule } from './client/client.module';
import { LigneReservationModule } from './ligne-reservation/ligne-reservation.module';
// import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CyclisteModule } from './cycliste/cycliste.module';
import { AffecterAccModule } from './affecter-acc/affecter-acc.module';
import { ModeleModule } from './modele/modele.module';
import { LocationModule } from './location/location.module';
import { LigneLocationModule } from './ligne-location/ligne-location.module';
import { LigneLocationAccessoireModule } from './ligne-location-accessoire/ligne-location-accessoire.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      cli: { migrationsDir: 'migrations' },
    }),
    MulterModule.register({ dest: './uploads' }),
    VeloModule,
    TypeClientModule,
    MarqueVeloModule,
    TarifModule,
    GuideModule,
    ReparationModule,
    AccessoireModule,
    CompteModule,
    ReservationModule,
    // RetourModule,
    DommageModule,
    // ClientModule,
    LigneReservationModule,
    // UserModule,
    AuthModule,
    CyclisteModule,
    AffecterAccModule,
    ModeleModule,
    LocationModule,
    LigneLocationModule,
    LigneLocationAccessoireModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppController],
  exports: [AppController],
})
export class AppModule {}
