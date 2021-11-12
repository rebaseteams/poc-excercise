import express from 'express';
import convertFile from '../controllers/convert/convertFile';
import getConvertedFile from '../controllers/convert/getConvertedFile';
import uploadCsv from '../middleware/upload';

const convertRoute = express.Router();

convertRoute.post('/file', uploadCsv.single('file'), convertFile);
convertRoute.get('/file/:filename', getConvertedFile);

export default convertRoute;
