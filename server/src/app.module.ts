import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicsController } from './clinics/clinics.controller';
import { ClinicsModule } from './clinics/clinics.module';
import { PatientsService } from './patients/patients.service';
import { PatientsModule } from './patients/patients.module';
import { ClinicsService } from './clinics/clinics.service';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [ClinicsModule, PatientsModule],
  controllers: [AppController, ClinicsController],
  providers: [AppService, ClinicsService, PatientsService, UtilsService],
})
export class AppModule {}
