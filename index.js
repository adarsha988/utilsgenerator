const express = require("express");
const indexRouter = require("./routes");
const app = express();
app.use(express.json());
app.use("/", indexRouter);
app.use((err,req,res,next)=> {
    err=
    process.env.NODE_ENV==="production"? "something is wrong": err.toString();
    res.status(500).send(err);
})

app.listen(3007);
console.log("your code is running in port 3007");
