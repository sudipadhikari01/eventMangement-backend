let router = require("express").Router();
// import User controller
var UserController = require("../controller/userController");

// set default API response

router.get("/", function(req, res) {
  res.json({ status: "API its working", message: "Welcom to login" });
});

router.route("/login").post(UserController.login);
router.route("/register").post(UserController.register);

module.exports = router;
