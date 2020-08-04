import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import GlobalError from '@shared/errors/GlobalError';
import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

/*
Existe middlewares para tratativas de erros
Eles recebem 4 parametros
*/
app.use(GlobalError);

app.listen(3333, () => {
  console.log('🚀️ Server started on port 3333');
});
