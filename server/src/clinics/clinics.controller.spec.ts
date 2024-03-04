import { Test, TestingModule } from '@nestjs/testing';
import { ClinicsController } from './clinics.controller';
import { Clinic, ClinicsService } from './clinics.service';
import { UtilsService } from '../utils/utils.service';

describe('ClinicsController', () => {
  let controller: ClinicsController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicsController],
      providers: [ClinicsService, UtilsService],
    }).compile();

    controller = module.get<ClinicsController>(ClinicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /clinics', () => {
    it('should return an array of clinics', async () => {
      const result = [
        { id: '1', name: 'Salve Fertility' },
        { id: '2', name: 'London IVF' },
      ];
      jest.spyOn(ClinicsService.prototype, 'getClinics').mockImplementation(
        () =>
          [
            { id: '1', name: 'Salve Fertility' },
            { id: '2', name: 'London IVF' },
          ] as unknown as Promise<Clinic[]>,
      );
      expect(await controller.getClinics()).toStrictEqual(result);
    });
  });
});
