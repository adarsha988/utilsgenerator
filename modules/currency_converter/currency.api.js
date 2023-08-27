const router = require("express").Router();
const currencycontroller = require("./currency.controller");
router.get("/", (req, res, next) => {
  try {
    const { from, to, amount} = req.body;
    const response = currencycontroller.converter(from, to, amount);
    res.send({ from: from, to: to, amount: amount, result: response });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
