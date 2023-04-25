const express = require("express");
const app = express();
const aboutPage = require("./aboutPage.js");
const contactPage = require("./contactPage.js");
const wishlistPage = require("./wishlistPage.js");
const cartPage = require("./cartPage.js");
const paymentPage = require("./paymentPage.js");
const newoffersPage = require("./newoffersPage.js");
const servicesPage = require("./servicesPage.js");

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.use("/aboutPage", aboutPage);
app.use("/contactPage", contactPage);
app.use("/cartPage", cartPage);
app.use("/payment", paymentPage);
app.use("/wishlistPage", wishlistPage);
app.use("/newoffersPage", newoffersPage);
app.use("/servicesPage", servicesPage);

app.listen(3600);
