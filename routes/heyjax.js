module.exports = function(express,app,path,bodyParser,querystring) {
var router = express.Router();

router.use(function(req,res,next){
  next();
})

/*** Can't get this route to work ****/
router.get('/heyjax/getTest',
  function(req, res) {
    res.json(data);
});

router.get('/getTest',
  function(req, res) {
    res.json(data);
});




app.get('/heyjax/getTest',function(req, res, next) {
    res.json(testJson);
});

    return router;
}