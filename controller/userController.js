var User = require("../model/users");

// validate the login
exports.login = function(req, res) {
  // users = Users.create({
  //
  // });

  User.find(
    { name: req.body.name, password: req.body.password },
    (error, user) => {
      if (error) {
        res.json({
          status: "error",
          message: "error"
        });
      } else {
        if (user.length >= 1) {
          res.json({
            status: "success",
            message: "users retrieved successfully",
            data: user
          });
        } else {
          res.json({
            status: "failed",
            message: "invalid login credentials"
          });
        }
      }
    }
  );
};

// end of login

// register new user
exports.register = (req, res) => {
  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;

  // save the user and check for the error
  user.save(function(error) {
    if (error) {
      res.json(error);
    }
    res.json({ message: "New user created", data: user });
  });
};
