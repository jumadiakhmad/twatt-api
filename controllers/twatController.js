const OAuth = require('oauth');
require('dotenv').config();
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.APPLICATION_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
);

function timeline(req,res) {
  var screen_name = 'nodejs'
    oauth.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + screen_name + '&count=2',
      process.env.USER_TOKEN,
      process.env.USER_SECRET,
        function (e,data) {
          if(e) res.send(e)
            console.log(data);
            res.send(data)
        }
    )
}

function search(req,res) {
  oauth.get('https://api.twitter.com/1.1/search/tweets.json?q=%10Jokowi',
    process.env.USER_TOKEN,
    process.env.USER_SECRET,
      function(e,data) {
        if(e) res.send(e)
          console.log(data);
          res.send(data)
      }
  )
}

function post(req,res) {
  oauth.post('https://api.twitter.com/1.1/statuses/update.json?status=' + req.body.twit,
    process.env.USER_TOKEN,
    process.env.USER_SECRET,
    'req.body.twit',
    'text',
    function (err, data){
          // console.log('halooo ==>',words);
         if (err) console.error(err);
         // console.log(require('util').inspect(data));
         res.send(data);
       }
  )
}

module.exports = { timeline, search, post }
