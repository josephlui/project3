const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "302735331685-j2de3ss9t9pcmout25hjo0e0lg0d550v.apps.googleusercontent.com",  
     
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
}
verify().catch(console.error);