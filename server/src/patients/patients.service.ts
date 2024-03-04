import { Injectable } from '@nestjs/common';
import { Clinic } from 'src/clinics/clinics.service';
import { UtilsService } from '../utils/utils.service';

export class Patient {
  id: number;
  clinic: Clinic;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

@Injectable()
export class PatientsService {
  PATIENT_1 =
    'https://raw.githubusercontent.com/salvehealth/tech-test-data/master/patients-1.csv';

  PATIENT_2 =
    'https://raw.githubusercontent.com/salvehealth/tech-test-data/master/patients-2.csv';

  async getPatientByClinic(idClinic: number): Promise<Patient[]> {
    if (idClinic == 1) {
      const response = await fetch(this.PATIENT_1);
      const patients1 = await response.text();
      return UtilsService.convertToObjectArray(patients1);
    } else if (idClinic == 2) {
      const response = await fetch(this.PATIENT_2);
      const patients2 = await response.text();
      return UtilsService.convertToObjectArray(patients2);
    }
    return null;
  }
}
