import { Module } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  providers: [ClinicsService, UtilsService],
})
export class ClinicsModule {}
