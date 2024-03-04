import { Controller, Get } from '@nestjs/common';
import { Patient, PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async getPatientByClinic(clinicId: number | undefined): Promise<Patient[]> {
    return await this.patientsService.getPatientByClinic(clinicId);
  }
}
