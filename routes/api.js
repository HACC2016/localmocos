'use strict';
module.exports = function(express, app, https, path, bodyParser, querystring) {
    var router = express.Router();

    //HTS API Code
    //Currently returns JSON object for copper

    app.get('/api', function (req, res) {
      var data;
      let options = {
        hostname: 'hts.usitc.gov',
        path: '/api/search/?query=copper',
        method: 'GET'
      }
      https.request(options, (resp) => {
        resp.setEncoding('utf8');
        resp.on('data', (chunk) => {
          data += chunk;
        })
        resp.on('end', () => {
          res.send(data);
        })
      }).on('error', (e) => {
        console.log(`Error: ${e.message}`)
      }).end();
    })

    return router;
}