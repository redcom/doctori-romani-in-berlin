import config from '../config';
import Mailgun from 'mailgun-js';

const isEmail = (mail) => {
  return mail.match(/\w+@\w+\.\w+/);
};

const service = async (req, res) => {

  const { from = '', message = '' } = req.body;
  if (!isEmail(from)) { res.json(403); return; }

  //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
  const mailgun = new Mailgun({ apiKey: config.mailgun.api_key, domain: config.mailgun.domain });
  const data = {
    from,
    to: config.mailgun.to_who,
    subject: 'Hallo from Doctori Romani in Berlin',
    html: message,
  };

  mailgun
      .messages()
      .send(data)
      .then((body) => console.log('Contact Send:', body))
      .catch((err) => { throw Error(err); })
    ;

  const response = { lala: 'land' };
  res.json(response);
};

export default service;

