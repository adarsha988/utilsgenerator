const express = require("express");
const app = express();
app.get("/:name/:lastName", (req, res) => {
  const { name, lastName } = req.params;
  const { address, phone } = req.query;
  res.send(`your name is ${name} ${lastName} my address is ${address} and ${phone}`);
});
app.listen(3001);
console.log("your code is running in port 3000");
