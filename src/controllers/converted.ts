import { Request, Response } from 'express';
import path from 'path';

const converted = async (req : Request, res : Response) => {
  const { filename } = req.params;
  console.log(filename);
  const filepath = path.resolve(`dist/uploads/converted/${filename}`);
  res.download(filepath);
};

export default converted;
