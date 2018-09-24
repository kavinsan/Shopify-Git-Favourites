const axios = require('axios');

var express = require('express');
var router = express.Router();

const github_id = '6c1d6aede9e8885f21f9';
const github_secret = '96636d59dbba5e04e180a07a6dd1898b071f0f1f';

/* GET home page. */
router.get('/', function(req, res) {

  // https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
  const redirect_uri = 'http://localhost:8192/callback';

  // https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
  const scope = 'repo user';
  var uri = `https://github.com/login/oauth/authorize?client_id=${github_id}&redirect_uri=${redirect_uri}&scope=${scope}`;
  res.status(301).redirect(uri);

});

router.get('/callback', async function (req, res) {

  const requestToken = req.query.code;

  var oauth = await axios({ 
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${github_id}&client_secret=${github_secret}&code=${requestToken}`,
    headers: { accept: 'application/json'}
  });
  
  const accessToken = oauth.data.access_token;
  //console.log('user access token: ' + accessToken);

  var test = await axios({
     //method: 'get',
     //url: 'https://api.github.com/user',
     method: 'DELETE',
     url: 'https://api.github.com/user/starred/EOSIO/eos',
     headers: {
       accept: 'application/json',
       Authorization: 'bearer ' + accessToken,
       'Content-Type': 'application/json',
       'Content-Length': 0
     }
  });
  
  res.send('test');
});

module.exports = router;
