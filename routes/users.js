var express = require('express');
var router = express.Router();
var model = require('../models/index');


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

/*POST usuario */
router.post('/',function(req,res,next){
  const {
    firstname,
    lastname,
    email
  } = req.body;
  model.User.create({
    firstName:firstname,
    lastName:lastname,
    email:email
  })
  .then(user => res.status(201).json({
    error:false,
    data: user,
    message:'new user has been created'
  }))
  .catch(error => res.json({
    error:true,
    data: [],
    error: errror
  }))
})

/*PUT users */

router.put('/:id',function(req,res,next){
  const user_id = req.params.id;
  const{firstname,lastname,email} = req.body;
  model.User.update({
    firstName:firstname,
    lastName:lastname,
    email:email
  },{
    where:{
      id:user_id
    }
  })
  .then(user => res.status(201).json({
    error:false,
    message: ' usuario atualizado'
  }))
  .catch(error => res.json({
    error: true,
    error:error
  }))
})

/*DELETE users */
router.delete('/:id',function(req,res,next){
  const user_id = req.params.id;
  model.User.destroy({ where: {
    id:user_id
  }})
  .then(status => res.status(201).json({
    error: false,
    message: 'o usuario foi deletado'
  }))
  .catch(error => res.json({
    error:true,
    error:error
  }))
})



module.exports = router;
