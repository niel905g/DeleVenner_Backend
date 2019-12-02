/* const mailgun = require("mailgun-js");
const DOMAIN = 'https://delevenner.dk';
const mg = mailgun({apiKey: "895a4b0b20613dd7d7d00fedec45b0b0-e470a504-d977edc6", domain: DOMAIN});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'info@delevenner.dk',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
}); */

/* var API_KEY = '895a4b0b20613dd7d7d00fedec45b0b0-e470a504-d977edc6';
var DOMAIN = 'https://delevenner.dk';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'info@delevenner.dk',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
}); */