const router = require("express").Router();
const qrRouter = require("../modules/qrcode/qr.api");
const mailer = require("../modules/mail/mail.api")
const currencyConverter = require("../modules/currency_converter/currency.api");
router.get("/", (req, res) => {
  res.send("api is working ");
});
router.use("/qr", qrRouter);
router.use("/mailer",mailer)
router.use("/currency", currencyConverter);
module.exports = router;
