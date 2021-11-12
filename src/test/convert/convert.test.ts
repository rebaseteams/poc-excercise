/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import supertest from 'supertest';
import app from '../..';

describe('POST convert file', () => {
  it('should give the error message', async () => {
    const resp = await supertest(app).post('/convert/file/');
    expect(resp.statusCode).equals(200);
    expect(resp.body.data).to.equals('No file path found');
  });
});
