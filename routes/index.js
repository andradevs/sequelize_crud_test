var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET All Users*/
router.get('/',function(req,res,next){
  model.User.findAll({}).then(users => res.json({
    error:false,
    data: users
  }))
  .catch(error => res.json({
    error:true,
    data: [],
    error:error
  }))
})

module.exports = router;
