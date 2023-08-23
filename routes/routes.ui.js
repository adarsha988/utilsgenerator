const router=require("express").Router();
router.get("/",(req,res)=>{
    res.render("index",{data:"we are the camps "});
})
module.exports=router;
