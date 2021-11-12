/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import supertest from 'supertest';
import app from '../..';

describe('GET converted file', () => {
  it('should give error when passed wrong file name', async () => {
    const resp = await supertest(app).get('/convert/file/sample.csv');
    expect(resp.statusCode).equals(404);
    expect(resp.text).to.include('Error: ENOENT: no such file or directory');
  });
});
