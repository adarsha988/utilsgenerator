const router =require("express").Router();
const mailService=require("../../service/mailer");
router.get("/",(req,res)=>{
res.send("mail Api is working...");
});

router.post ("/",async(req,res,next)=>{
    try{
        const{from,to,message}=req.body;
        const response=mailService.sendEmail({from,to,message});
        res.send(response);

    }
    catch(e){
        next(e);
    }

});