module.exports = function(express, app, https, path, bodyParser, querystring) {
  var router = express.Router();
  var apiHostname = 'hts.usitc.gov';
  //HTS Keyword search
  app.get('/api', function (req, res, next) {
    res.send('Coming Soon!');
  })

  app.post('/api', function (req, res, next) {
    var results = '';
    var searchPath = `/api/search?query=${req.body.keyword}`;
    var options = {
      hostname: apiHostname,
      path: searchPath,
      method: 'GET'
    };
    https.request(options, (response) => {
      response.setEncoding('utf8');
      response.on('data', (chunk) => {
        results += chunk;
      })
      response.on('end', () => {
        res.json(JSON.parse(results));
      })
    })
    .on('error', (e) => {
        console.log(`Error: ${e.message}`)
    })
    .end();
  })

  return router;
}