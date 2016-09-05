module.exports = function(express,app,path,bodyParser,querystring) {
 var router = express.Router();

 var testJson={
  "name":"Admin",
  "response":"Ok"
};

  /**************** Home Page ***********************/




  


  /**************** Log In ***********************/
  
app.get('/Logout',function(req, res, next) {
    testJson.name="Logout";
    res.json(testJson);
});





  /**************** Log Out **********************/
app.get('/Login',function(req, res, next) {
      testJson.name="LogIn";
    res.json(testJson);
});


    return router;
}