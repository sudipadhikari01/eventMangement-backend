var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var eventRegistrationSchema = new Schema({
  eventTitle: { type: String, required: true },
  eventLocation: { type: String, required: true },
  country: { type: String },
  region: { type: String },
  city: { type: String },
  scheduleOption: { type: String },
  eventDate: { type: String },
  eventFrom: { type: String },
  eventTo: { type: String },
  eventImage: { type: String },
  eventDescription: { type: String },
  organizerName: { type: String },
  organizerDescription: { type: String },
  ticketType: { type: String },
  ticketName: { type: String },
  ticketQuantity: { type: String },
  ticketPrice: { type: String },
  ticketDescription: { type: String },
  ticketSalesStartDate: { type: String },
  ticketSalesStartTime: { type: String },
  ticketSalesEndtDate: { type: String },
  ticketSalesEndTime: { type: String },
  eventType: { type: String },
  eventTopic: { type: String }
});

module.exports = mongoose.model("EventRegistration", eventRegistrationSchema);
