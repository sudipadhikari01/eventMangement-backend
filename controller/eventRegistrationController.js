var EventRegistration = require("../model/eventRegistration");

exports.register = (req, res) => {
  var eventRegistration = new EventRegistration();
  console.log(" the response from server is ", req.body);

  var imageUrl =
    req.protocol +
    "://" +
    req.get("host") +
    "/public/images/" +
    req.body.eventImage;

  (eventRegistration.eventTitle = req.body.eventTitle),
    (eventRegistration.eventLocation = req.body.eventLocation),
    (eventRegistration.country = req.body.country),
    (eventRegistration.region = req.body.region),
    (eventRegistration.city = req.body.city),
    (eventRegistration.scheduleOption = req.body.scheduleOption),
    (eventRegistration.eventDate = req.body.eventDate),
    (eventRegistration.eventFrom = req.body.eventFrom),
    (eventRegistration.eventTo = req.body.eventTo),
    (eventRegistration.eventImage = imageUrl),
    (eventRegistration.eventDescription = req.body.eventDescription),
    (eventRegistration.organizerName = req.body.organizerName),
    (eventRegistration.organizerDescription = req.body.organizerDescription),
    (eventRegistration.ticketType = req.body.ticketType),
    (eventRegistration.ticketName = req.body.ticketName),
    (eventRegistration.ticketPrice = req.body.ticketPrice),
    (eventRegistration.ticketDescription = req.body.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime = req.body.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime = req.body.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime = req.body.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime = req.body.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartDate = req.body.ticketSalesStartDate),
    (eventRegistration.ticketSalesEndTime = req.body.ticketSalesEndTime),
    (eventRegistration.ticketSalesEndtDate = req.body.ticketSalesEndtDate),
    (eventRegistration.eventType = req.body.eventType),
    (eventRegistration.eventTopic = req.body.eventTopic);

  eventRegistration.save(error => {
    if (error) {
      res.json(error);
    } else {
      res.json({
        message: "Event registered successfully",
        data: eventRegistration
      });
    }
  });
};

exports.getEvent = (req, res) => {
  EventRegistration.find({})
    .sort({ createdAt: -1 })
    .exec((error, event) => {
      if (error) {
        res.json({
          status: "error",
          message: "error"
        });
      } else {
        if (event.length >= 1) {
          res.json({
            status: "success",
            message: "events retrieved successfully",
            data: event
          });
        }
      }
    });
};
