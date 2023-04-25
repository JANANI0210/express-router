const express = require("express");
const router = express.Router();

let listOfservices = [
  {
    name: "Web Development",
  },

  {
    name: "Cloud Computing",
  },

  {
    name: "UI/UX Design",
  },

  {
    name: "Block Chain",
  },

  {
    name: "Digital Marketing",
  },

  {
    name: "Cyber Security",
  },
];

router
  .route("/:id")
  .get((request, response) => {
    console.log(request.user);
    response.send("Get method with " + request.params.id);
  })

  .put((request, response) => {
    response.send("Update method with " + request.params.id);
  })

  .delete((request, response) => {
    response.send("Delete method with " + request.params.id);
  });

router.param("id", (request, response, next, id) => {
  console.log(id);
  request.user = listOfservices[id];
  next();
});

module.exports = router;
