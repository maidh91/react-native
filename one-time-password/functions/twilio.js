const twilio = require('twilio');

const accountSid = 'ACed2783f5d2e1f0df6b500ad380c3e5eb';
const authToken = '2d4b413ecf116e2861e2ac0f88ed2601';

module.exports = new twilio.Twilio(accountSid, authToken);
