# EX -1:EXPRESS ROUTERS & MIDDLEWARE

### AIM :
      To Create an Express app that have 6-8 routes in a commercial website point-of-view.
      Get number as a URL (request) parameter, and print the name of the appropriate services as a response, using Middleware.
### ALGORITHM :
    Step 1: Create a new folder in that install packages required such as package.json and node modules
    Step 2: Create a new file and name it app.js which has all the express code.
    Step 3: Create a folder called components in which routes folder is created.
    Step 4: In that folder add the required number of routes in a commercial website point of view.
    Step 5: Import the routes in app.js and install routes .
    Step 6: Add the required componennts and to run the code use nodemon app.js.
    Step 7: Stop the program and output gets displayed in the localhost port.
    
### PROGRAM :
 
   app.js
   
    const express = require("express");
    const app = express();
    const userRouter = require("./routes/users");
    const aboutRouter = require("./routes/about");
    const contactRouter = require("./routes/contact");
    const servicesRouter = require("./routes/services");
    const paymentRouter = require("./routes/payment");
    const loginRouter = require("./routes/login");
    // const secondPage = require("./secondPage.js");

    app.get("/", (request, response) => {
      // response.send(" Home Page");
      response.sendStatus(200);
    });

    // app.use("/secondPage", secondPage);
    app.use("/about", aboutRouter);
    app.use("/contact", contactRouter);
    app.use("/services", servicesRouter);
    app.use("/payment", paymentRouter);
    app.use("/login", loginRouter);
    app.listen(3500);

users.js

    const express = require("express");
    const userRouter = express.Router();

    userRouter.get("/", (request, response) => {
      response.send("List of users");
    });

    module.exports = userRouter;
    
login.js

    const express = require("express");
    const loginRouter = express.Router();

    loginRouter.get("/", (request, response) => {
      response.send("Login/Sign up");
    });

    module.exports = loginRouter;
    
 ### OUTPUT :
 
 ### RESULT :
            Thus,to create an Express app that have 6-8 routes in a commercial website point-of-view and Get a number as a URL (request) parameter,
            and print the name of the appropriate services as a response, using Middleware has been implemented successfully.
