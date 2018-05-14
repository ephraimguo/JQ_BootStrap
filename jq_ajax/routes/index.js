var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/jqajax', function(req, res){
  res.send({name: "yanyu", age:"27", ph:98803289, email:"ephraimguo@gmail.com", wd: req.body.word});
});

router.get('/jqajaxget', function(req, res){
  res.send({js: req.query.js});
});

router.get('/load_html', function(req, res){
  res.send(`
  <h1>Oh Sea</h1>
  <p>this is the oh sea contents</p>
  `);
});

module.exports = router;
