const express = require('express')
const router = express.Router();
const {getuserfrofile , login , signup} = require('../User/Controller')

router.get('/', (req, res) => {
    res.send('Hello World!') 
  })
  router.post('/', (req, res) => {
    res.json({
      username:" Banoqabil " + req.body.name
    })
    
  }) 

router.get('/getuserprofile',getuserfrofile) 
router.post('/login',login)
router.post('/signup',signup)

module.exports=router;