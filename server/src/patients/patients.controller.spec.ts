import { Test, TestingModule } from '@nestjs/testing';
import { PatientsController } from './patients.controller';
import { Patient, PatientsService } from './patients.service';
import { UtilsService } from '../utils/utils.service';

describe('PatientsController', () => {
  let controller: PatientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientsController],
      providers: [PatientsService, UtilsService],
    }).compile();

    controller = module.get<PatientsController>(PatientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /patients by clinic id', () => {
    it('should return an array of patients by clinics', async () => {
      const result = [
        {
          id: '1',
          clinic_id: '1',
          first_name: 'Harriott',
          last_name: 'Wansbury',
          date_of_birth: '1961-10-16',
        },
        {
          id: '2',
          clinic_id: '1',
          first_name: 'Glennis',
          last_name: 'Eustis',
          date_of_birth: '1985-04-08',
        },
        {
          id: '3',
          clinic_id: '1',
          first_name: 'Christie',
          last_name: 'Chasmer',
          date_of_birth: '1966-12-21',
        },
        {
          id: '4',
          clinic_id: '1',
          first_name: 'Clarice',
          last_name: 'Brookfield',
          date_of_birth: '1963-03-07',
        },
      ];
      jest
        .spyOn(PatientsService.prototype, 'getPatientByClinic')
        .mockImplementation(
          () =>
            [
              {
                id: '1',
                clinic_id: '1',
                first_name: 'Harriott',
                last_name: 'Wansbury',
                date_of_birth: '1961-10-16',
              },
              {
                id: '2',
                clinic_id: '1',
                first_name: 'Glennis',
                last_name: 'Eustis',
                date_of_birth: '1985-04-08',
              },
              {
                id: '3',
                clinic_id: '1',
                first_name: 'Christie',
                last_name: 'Chasmer',
                date_of_birth: '1966-12-21',
              },
              {
                id: '4',
                clinic_id: '1',
                first_name: 'Clarice',
                last_name: 'Brookfield',
                date_of_birth: '1963-03-07',
              },
            ] as unknown as Promise<Patient[]>,
        );
      expect(await controller.getPatientByClinic(1)).toStrictEqual(result);
    });
  });
});
