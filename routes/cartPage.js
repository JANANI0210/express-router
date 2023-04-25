const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("CART");
});

module.exports = router;
