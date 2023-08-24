const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/contact", (req, res) => {
  res.render("contact us");
});

module.exports = router;
