let router = require("express").Router();

// import User controller
var UserController = require("../controller/userController");
var EventRegistrationController = require("../controller/eventRegistrationController");

// set default API response
var EventRegistration = require("../model/eventRegistration");

// multer middleware
var upload = require("../middleware/multer/multerConfig");

router.get("/", function(req, res) {
  res.json({ status: "API its working", message: "Welcom to login" });
});

router.route("/login").post(UserController.login);
router.route("/register").post(UserController.register);

// handling the image
router.post("/event-registration/image", (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      res.json(error);
    } else {
      console.log("req", req.files);
      res.json({
        message: "Image uploaded successfully",
        status: "success",
        data: req.files[0].filename
      });
    }
  });

  // evenregistration post route
  router
    .route("/event-registration")
    .post(EventRegistrationController.register);
});

router.route("/event-registration").get(EventRegistrationController.getEvent);

module.exports = router;
