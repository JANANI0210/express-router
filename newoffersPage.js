const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("OFFERS");
});

module.exports = router;
