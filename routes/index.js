const router = require("express").Router();
const QRcode = require("../modules/qrcode");
router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/qr", async (req, res) => {
  const { qr } = req.query;
  const { name } = req.params;
  const qrData = await QRcode.toDataURL(qr);
  res.send(`<img src=${qrData}>`);
  //res.send("hello");
});

module.exports = router;
