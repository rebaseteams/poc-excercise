import express from 'express';
import convert from '../controllers/convert';
import converted from '../controllers/converted';
import uploadCsv from '../middleware/upload';

const convertRoute = express.Router();

convertRoute.post('/file', uploadCsv.single('file'), convert);
convertRoute.get('/file/:filename', converted);

export default convertRoute;
