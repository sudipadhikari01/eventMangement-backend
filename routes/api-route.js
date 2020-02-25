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

// evenregistration post route
router.post("/event-registration", upload.single("eventImage"), (req, res) => {
  console.log("Event title is " + req.body.eventForm.eventTitle);
  console.log("hello testing");
  console.log("Event image  is " + req.file.filename);

  const url = req.protocol + ":" + req.get("host") + "/public/images/";
  // var eventRegistration = new EventRegistration();
  // (eventRegistration.eventTitle = req.body.eventForm.eventTitle),
  //   (eventRegistration.eventLocation = req.body.eventForm.eventLocation),
  //   (eventRegistration.country = req.body.eventForm.country),
  //   (eventRegistration.region = req.body.eventForm.region),
  //   (eventRegistration.city = req.body.eventForm.city),
  //   (eventRegistration.scheduleOption = req.body.eventForm.scheduleOption),
  //   (eventRegistration.eventDate = req.body.eventForm.eventDate),
  //   (eventRegistration.eventFrom = req.body.eventForm.eventFrom),
  //   (eventRegistration.eventTo = req.body.eventForm.eventTo),
  //   (eventRegistration.eventImage = url + req.file.filename),
  //   (eventRegistration.eventDescription = req.body.eventForm.eventDescription),
  //   (eventRegistration.organizerName = req.body.eventForm.organizerName),
  //   (eventRegistration.organizerDescription =
  //     req.body.eventForm.organizerDescription),
  //   (eventRegistration.ticketType = req.body.eventForm.ticketType),
  //   (eventRegistration.ticketName = req.body.eventForm.ticketName),
  //   (eventRegistration.ticketPrice = req.body.eventForm.ticketPrice),
  //   (eventRegistration.ticketDescription =
  //     req.body.eventForm.ticketSalesStartTime),
  //   (eventRegistration.ticketSalesStartTime =
  //     req.body.eventForm.ticketSalesStartTime),
  //   (eventRegistration.ticketSalesStartTime =
  //     req.body.eventForm.ticketSalesStartTime),
  //   (eventRegistration.ticketSalesStartTime =
  //     req.body.eventForm.ticketSalesStartTime),
  //   (eventRegistration.ticketSalesStartTime =
  //     req.body.eventForm.ticketSalesStartTime),
  //   (eventRegistration.ticketSalesStartDate =
  //     req.body.eventForm.ticketSalesStartDate),
  //   (eventRegistration.ticketSalesEndTime =
  //     req.body.eventForm.ticketSalesEndTime),
  //   (eventRegistration.ticketSalesEndtDate =
  //     req.body.eventForm.ticketSalesEndtDate),
  //   (eventRegistration.eventType = req.body.eventForm.eventType),
  //   (eventRegistration.eventTopic = req.body.eventForm.eventTopic);

  // eventRegistration.save(error => {
  //   if (error) {
  //     res.json(error);
  //   } else {
  //     res.json({
  //       message: "Event registered successfully",
  //       data: eventRegistration
  //     });
  //   }
  // });
});

router.route("/event-registration").get(EventRegistrationController.getEvent);

module.exports = router;
