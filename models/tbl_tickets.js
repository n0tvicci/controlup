const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    deleted: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("tbl_ticket", ticketSchema);
module.exports = Ticket;
