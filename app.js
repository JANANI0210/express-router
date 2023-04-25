const express = require("express");
const app = express();
const aboutPage = require("./routes/aboutPage.js");
const contactPage = require("./routes/contactPage.js");
const wishlistPage = require("./routes/wishlistPage.js");
const cartPage = require("./routes/cartPage.js");
const paymentPage = require("./routes/paymentPage.js");
const newoffersPage = require("./routes/newoffersPage.js");
const servicesPage = require("./routes/servicesPage.js");

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
