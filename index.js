const express = require("express");
const app = express();
app.get("/:name/:lastName", (req, res) => {
  const { name, lastName } = req.params;
  res.send(`your name is ${name} ${lastName}`);
});
app.listen(3000);
console.log("your code is running in port 3000");
