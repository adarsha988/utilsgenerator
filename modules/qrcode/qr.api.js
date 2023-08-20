const router = require ("express").Router();
const QRController= require ("./qr.controller");
router.get ("/",(req,res)=>{

});
router.post ('/',async(req,res,next)=>{
    try{
        const {name: qr}=req.body;
        const result =await QRController.createQr(qr);
        res.send(`img scr=${result}/>`);
        
    }
    catch(e){
    next(e);}
});
module.exports=router;