var EventRegistration = require("../model/eventRegistration");

exports.register = (req, res) => {
  var eventRegistration = new EventRegistration();
  console.log(" the response from server is ", req.body.eventForm);
  console.log(" the response from server is ", req.files.image.data);

  (eventRegistration.eventTitle = req.body.eventForm.eventTitle),
    (eventRegistration.eventLocation = req.body.eventForm.eventLocation),
    (eventRegistration.country = req.body.eventForm.country),
    (eventRegistration.region = req.body.eventForm.region),
    (eventRegistration.city = req.body.eventForm.city),
    (eventRegistration.scheduleOption = req.body.eventForm.scheduleOption),
    (eventRegistration.eventDate = req.body.eventForm.eventDate),
    (eventRegistration.eventFrom = req.body.eventForm.eventFrom),
    (eventRegistration.eventTo = req.body.eventForm.eventTo),
    (eventRegistration.eventImage = req.files.image.name),
    (eventRegistration.eventDescription = req.body.eventForm.eventDescription),
    (eventRegistration.organizerName = req.body.eventForm.organizerName),
    (eventRegistration.organizerDescription =
      req.body.eventForm.organizerDescription),
    (eventRegistration.ticketType = req.body.eventForm.ticketType),
    (eventRegistration.ticketName = req.body.eventForm.ticketName),
    (eventRegistration.ticketPrice = req.body.eventForm.ticketPrice),
    (eventRegistration.ticketDescription =
      req.body.eventForm.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime =
      req.body.eventForm.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime =
      req.body.eventForm.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime =
      req.body.eventForm.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartTime =
      req.body.eventForm.ticketSalesStartTime),
    (eventRegistration.ticketSalesStartDate =
      req.body.eventForm.ticketSalesStartDate),
    (eventRegistration.ticketSalesEndTime =
      req.body.eventForm.ticketSalesEndTime),
    (eventRegistration.ticketSalesEndtDate =
      req.body.eventForm.ticketSalesEndtDate),
    (eventRegistration.eventType = req.body.eventForm.eventType),
    (eventRegistration.eventTopic = req.body.eventForm.eventTopic);

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
  EventRegistration.find((error, event) => {
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
