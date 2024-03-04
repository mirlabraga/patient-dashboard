import { Injectable } from '@nestjs/common';
import { UtilsService } from '../utils/utils.service';

export class Clinic {
  id: number;
  name: string;
}

@Injectable()
export class ClinicsService {
  CLINICS =
    'https://raw.githubusercontent.com/salvehealth/tech-test-data/master/clinics.csv';

  async getClinics(): Promise<Clinic[]> {
    const response = await fetch(this.CLINICS);
    const clinics = await response.text();
    return UtilsService.convertToObjectArray(clinics);
  }
}
