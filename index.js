const express = require("express");
const indexRouter= require("./routes");
const app=express();

app.use("/",indexRouter);

app.listen(3003);
console.log("your code is running in port 3002");
