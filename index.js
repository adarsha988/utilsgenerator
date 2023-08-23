const express = require("express");
const indexRouter = require("./routes");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs"); //accept eljs file
app.set("views", "./views"); //ejs file shoud in be views folder
app.use("/", indexRouter);
app.use((err, req, res, next) => {
  err =
    process.env.NODE_ENV === "production"
      ? "something is wrong"
      : err.toString();
  res.status(500).send(err);
});

app.listen(3007);
console.log("your code is running in port 3007");
