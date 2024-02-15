const path = require('path');
const rootDir=require('../util/path')


exports.getContactcontroller = (req,res,next)=> {
    res.sendFile(path.join(rootDir,'views','contact.html'))
}
exports.postContactController = (req,res,next) =>{
    console.log(req.body)
    res.redirect('/success')
}
exports.getSuccess= (req,res,next)=>{
    res.send('Form successfully filled')
}
