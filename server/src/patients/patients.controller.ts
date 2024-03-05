import { Controller, Get, Param } from '@nestjs/common';
import { Patient, PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get(':id')
  async getPatientByClinic(
    @Param('id') id: number | undefined,
  ): Promise<Patient[]> {
    return await this.patientsService.getPatientByClinic(id);
  }
}
