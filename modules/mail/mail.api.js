const router =require("express").Router();
const mailService=require("../../services/mailer");
router.get("/",(req,res)=>{
res.send("mail Api is working...");
});

router.post ("/",async(req,res,next)=>{
    try{
        const{value,QrData}=req.body;
        console.log(QrData)
        if(!value){
            return res.status(400).json("message:Email not found!!")
        }
        const response=await mailService.sendEmail({value,QrData});
        return res.status(200).json({response})
        

    }
    catch(e){
        next(e);
    }

});
module.exports=router;