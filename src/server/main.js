// @flow
import config from './config';
import errorHandler from './lib/errorHandler';
import express from 'express';
import bodyParser from 'body-parser';
import frontend from './frontend';
import api from './api';

const app = express();
app.use(bodyParser.json({ limit: '1mb' }));
// app.use(bodyParser.urlencoded({
//   limit: '50mb',
//   extended: true,
// }));

app.use(frontend);
app.all('/api/:service', api);
app.get('*', errorHandler);

app.listen(config.port, () => {
  console.log(`Server started at http://localhost:${config.port}`);
});
