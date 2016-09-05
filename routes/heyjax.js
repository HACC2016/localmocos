module.exports = function(express,app,path,bodyParser,querystring) {
var router = express.Router();

console.log('Topic In Hey Jax');

const testJson={
  "name":"Ok",
  "response":"Ok"
};

router.use(function(req,res,next){
  console.log("In heyjax router");
  next();
})

/*** Can't get this route to work ****/
router.get('/heyjax/getTest',
  function(req, res) {
    console.log('In getTest From URL = ' + req.url);
                res.json(data);
});

router.get('/getTest',
  function(req, res) {
    console.log('In getTest From URL = ' + req.url);
                res.json(data);
});




app.get('/heyjax/getTest',function(req, res, next) {
    res.json(testJson);
});

    return router;
}