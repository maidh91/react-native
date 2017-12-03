const admin = require('firebase-admin');

module.exports = (req, res) => {
  // test
  // res.send(req.body);

  // verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }

  // format the phone number to remove dashes and parens
  var prefix = '';
  if (String(req.body.phone).startsWith('+')) {
    prefix = '+';
  }
  const phone = prefix + String(req.body.phone).replace(/[^\d]/g, "");

  // create a new user acc using that phone number
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(error => res.status(422).send({ error }));

  // response to the user request, saying the account was made
}
