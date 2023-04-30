import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Should get the list of Coffees', async () => {
    const response = await request(app.getHttpServer()).get('/Coffees');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveLength(8);
    response.body.forEach((element) => {
      expect(element).toHaveProperty('id');
      expect(element).toHaveProperty('title');
      expect(element).toHaveProperty('image');
      expect(element).toHaveProperty('variety');
    });
  });

  it('Should get the list of Teas', async () => {
    const response = await request(app.getHttpServer()).get('/Teas');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveLength(8);
    response.body.forEach((element) => {
      expect(element).toHaveProperty('id');
      expect(element).toHaveProperty('title');
      expect(element).toHaveProperty('image');
      expect(element).not.toHaveProperty('variety');
    });
  });
});
