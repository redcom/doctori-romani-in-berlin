// @flow

import type { $Request, $Response } from 'express';
import { isNil } from 'ramda';
import contactService from './contactService';

const services = {
  contactService,
};

const api = (req: $Request, res: $Response) => {
  const { service } = req.params;
  !isNil(services[service])
    ? services[service](req, res)
    : res.sendStatus(403);
};

export default api;
