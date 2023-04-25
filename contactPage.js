const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("Contact US");
});

module.exports = router;
