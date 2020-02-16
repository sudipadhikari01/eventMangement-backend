var EventRegistration = require("../model/eventRegistration");

exports.register = (req, res) => {
  var eventRegistration = new EventRegistration();

  (eventRegistration.eventTitle = req.body.eventTitle),
    (eventRegistration.eventLocation = req.body.eventLocation),
    (eventRegistration.country = req.body.country),
    (eventRegistration.region = req.body.region),
    (eventRegistration.city = req.body.city),
    (eventRegistration.scheduleOption = req.body.scheduleOption),
    (eventRegistration.eventDate = req.body.eventDate),
    (eventRegistration.eventFrom = req.body.eventFrom),
    (eventRegistration.eventTo = req.body.eventTo),
    (eventRegistration.eventImage = req.body.image),
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
