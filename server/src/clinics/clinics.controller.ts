import { Controller, Get } from '@nestjs/common';
import { Clinic, ClinicsService } from './clinics.service';

@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Get()
  async getClinics(): Promise<Clinic[]> {
    return await this.clinicsService.getClinics();
  }
}
