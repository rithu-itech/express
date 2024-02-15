const path = require('path');

const express=require('express');

const router=express.Router();
const rootDir=require('../util/path')
router.get('/contactus',(req,res,next)=> {
    res.sendFile(path.join(rootDir,'views','contact.html'))
});        
router.post('/submitcontact',(req,res,next) =>{
    console.log(req.body)
    res.redirect('/success')
}); 
router.get('/success',(req,res,next)=>{
    res.send('Form successfully filled')
})
module.exports = router;