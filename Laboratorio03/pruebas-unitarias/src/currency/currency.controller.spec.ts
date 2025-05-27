import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { CurrencyModule } from './currency.module';
import { CurrencyService } from './currency.service';

describe('CurrencyController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CurrencyModule],
    })
      .overrideProvider(CurrencyService)
      .useValue({
        obtenerEquivalenteDolar: jest.fn().mockReturnValue(2),
        inicializar: jest.fn(),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('/dollarEquivalent/abc debe retornar 400', () => {
    return request(app.getHttpServer())
      .get('/dollarEquivalent/abc')
      .expect(400);
  });

  it('/dollarEquivalent/1000 debe retornar 200 OK y valor esperado', () => {
    return request(app.getHttpServer())
      .get('/dollarEquivalent/1000')
      .expect(200)
      .expect(2);
  });
});
