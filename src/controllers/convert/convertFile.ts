import { Request, Response } from 'express';
import { spawn } from 'child_process';
import path from 'path';

const pyrunner = async (csvPath : string, fileName : string, convertPath : string) : Promise<any> => new Promise((resolve, reject) => {
  const pyout = spawn('python', ['pyscripts/trial.py', csvPath, fileName, convertPath]);
  pyout.stdout.on('data', (data) => {
    resolve(data);
  });
  pyout.stderr.on('data', (data) => {
    console.log(data.toString());
    reject(data);
  });
});

const convertFile = async (req : Request, res : Response) => {
  const filepath = req.file?.path;
  const filename = req.file?.filename;
  console.log(req.file);
  if (filepath && filename) {
    console.log(path.resolve(`dist/uploads/converted/${filename}`));
    const data = await pyrunner(filepath, path.resolve(`dist/uploads/converted/${filename}`), path.resolve('dist/uploads/converted/'));
    console.log(data.toString());
    res.send({ data: data.toString(), filename });
  } else {
    res.send({ data: 'No file path found', filename });
  }
};

export default convertFile;
