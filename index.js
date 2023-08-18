const express = require("express");
const indexRouter = require("./routes");
const app = express();
app.use(express.json());
app.use("/", indexRouter);

app.listen(3007);
console.log("your code is running in port 3007");
