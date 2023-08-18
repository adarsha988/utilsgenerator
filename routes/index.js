const router = require("express").Router();
const QRcode = require("../modules/qrcode");
router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/qr", async (req, res) => {
  // const { qr } = req.query;
  try {
    const { name: qr } = req.body;
    const qrData = await QRcode.toDataURL(qr);
    res.send(`<img src=${qrData}>`);
  } catch (e) {
    res.send("somthing went wrong");
  }
  //res.send("hello");
});

module.exports = router;
