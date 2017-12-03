const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = (req, res) => {
  // verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'You must provide a phone number' });
  }

  // format the phone number to remove dashes and parens
  var prefix = '';
  if (String(req.body.phone).startsWith('+')) {
    prefix = '+';
  }
  const phone = prefix + String(req.body.phone).replace(/[^\d]/g, "");

  admin.auth().getUser(phone)
    .then(user => {
      const code = Math.floor((Math.random() * 8999 + 1000));
      
      twilio.messages.create({
        body: 'Your code is ' + code,
        to: phone,
        from: '+18433763008'
      }, (error) => {
        if (error) { 
          return res.status(422).send(error);
        }

        admin.database().ref('users/' + phone)
          .update({ code: code, codeValid: true }, () => {
            res.send({ success: true });  
          })
      });
    })
    .catch(error => {
      res.status(422).send(error)
    })
}
